<?php

namespace App\Http\Controllers;

use App\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Mail\CredentialsMail;
use Illuminate\Support\Facades\Mail;
use App\Colis;
use App\ColisLivre;
use App\ColisAnnule;
use Carbon\Carbon;
use App\Wilaya;
use App\ColisPaye;
use Auth;
use Faker\Generator as Faker;
use App\FraisLivraison;
use App\Livraison_externe;
use Inertia\Inertia;
use App\Mail\InformationUpdatedMail;
use Illuminate\Support\Facades\DB as FacadesDB;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */


    public function MesFrais()
    {
        $frais = FraisLivraison::where('from', Auth::guard('client')->user()->wilaya)
            ->with(['WilayaF', 'WilayaT'])
            ->get();

        return Inertia::render('client/FraisLivraison', [
            'frais' => $frais
        ]);
    }

    public function ClientStats()
    {
        $id = Auth::guard('client')->user()->id_client;
        $totalColisLiv = ColisLivre::where('client', $id)->count();
        $totalColis = Colis::where('client', $id)->count() + ColisLivre::where('client', $id)->count() + ColisAnnule::where('client', $id)->count();

        $colis = Colis::where('client', $id)->get()->groupBy(function ($d) {
            return Carbon::parse($d->created_at)->format('m');
        })->toArray();

        $colisLiv = ColisLivre::where('client', $id)->get()->groupBy(function ($d) {
            return Carbon::parse($d->created_at)->format('m');
        })->toArray();

        $wilayas = Wilaya::where('fraisLivraison', '!=', null)->pluck('nom');

        return Inertia::render('client/dashboard/Stats', [
            'totalColisLiv' => $totalColisLiv,
            'totalColis' => $totalColis,
            'colis' => $colis,
            'colisLiv' => $colisLiv,
            'wilayas' => $wilayas

        ]);
    }

    public function clientDetails($id)
    {
        $client = Client::where('id_client', $id)->first();
        if (Auth::guard('admin')->user()->role != "agent-bureau" && Auth::guard('admin')->user()->role != "admin-wilaya") return abort(403);
        if (Auth::guard('admin')->user()->wilaya != $client->wilaya) return abort(403);

        $colisLiv = ColisLivre::where('client', $id)->with([
            'Wilaya',
            'Commune',
            'Logs'
        ])->get();

        $colisP = ColisPaye::where('client', Auth::guard('client')->user()->$id)->with([
            'Wilaya',
            'Commune',
            'Logs'
        ])->get();

        $colisAnnu = ColisAnnul::where('client', Auth::guard('client')->user()->id_client)->with([
            'Wilaya',
            'Commune',
            'Logs'
        ])->get();


        return Inertia::render('client/dashboard/MesPaiements', [
            'payes' => $colisP,
            'livres' => $colisLiv,
            'annules' => $colisAnnu,
        ]);
    }

    public function AclientDetails($id)
    {

        $client = Client::where('id_client', $id)->first();
        if (Auth::guard('admin')->user()->role != "agent-bureau" && Auth::guard('admin')->user()->role != "admin-wilaya" &&  Auth::guard('admin')->user()->role != "super-admin") return abort(403);
        if (Auth::guard('admin')->user()->role != "super-admin" && Auth::guard('admin')->user()->wilaya != $client->wilaya) return abort(403);

        $colisLiv = ColisLivre::where('client', $id)->with([
            'Wilaya',
            'Commune',
            'Logs',
            'Livreur'
        ])->get();

        $colisP = ColisPaye::where('client', $id)->with([
            'Wilaya',
            'Commune',
            'Logs',
            'Livreur'
        ])->get();

        $colisAnnu = ColisAnnule::where('client', $id)->with([
            'Wilaya',
            'Commune',
            'Logs',
            'Livreur'
        ])->get();

        return Inertia::render('admin/dashboard/clients/DetailsClient', [
            'payes' => $colisP,
            'livres' => $colisLiv,
            'annules' => $colisAnnu,
        ]);
    }

    public function createClient(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'nom' => ['required', 'string', 'max:25'],
            'prenom' => ['required', 'string', 'max:25'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:clients'],
            'password' => ['required', 'string'],

        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator) // send back all errors to the login form
                ->withInput();
        } else {
            $user = Client::create([
                'telephone' => $request->telephone,
                'nom' => $request->nom,
                'email' => $request->email,
                'remise' => $request->remise,
                'TypeRemise' => $request->typeRemise,
                'password' => bcrypt($request->password),
                'type' => $request->type,
                'prenom' => $request->prenom,
                'adresse' => $request->adresse,
                'wilaya' => is_string($request->wilaya) ? $request->wilaya : $request->wilaya['id'],
                'commune' => $request->commune
            ]);
            try {
                $data = ['email' => $request->email, 'password' => $request->password, 'lien' => "https://express.orcloudproject.com/login"];
                Mail::to($request->email)->send(new CredentialsMail($data));
            } catch (Exception $e) {
            }
        }
        return redirect()->route('admin.clients');
    }

    public function deleteClient(Request $request)
    {
        Client::where('id_client', $request->id)->delete();
        return redirect()->back();
    }

    public function updateInfo(Request $request)
    {

        $livreur = Client::where('id_client', $request->id)->first();
        if ($request->email == $livreur->email) {
            if ($request->wilaya != null)
                Client::where('id_client', $request->id)->update([
                    'nom' => $request->nom,
                    'prenom' => $request->prenom,
                    'type' => $request->type,
                    'remise' => $request->remise,
                    'TypeRemise' => $request->TypeRemise,
                    'wilaya' => $request->wilaya != null && is_string($request->wilaya) ? $request->wilaya : $request->wilaya['id'],
                    'adresse' => $request->adresse,
                    'telephone' => $request->telephone,
                    'commune' => $request->commune
                ]);
            else

                Client::where('id_client', $request->id)->update([
                    'nom' => $request->nom,
                    'prenom' => $request->prenom,
                    'email' => $request->email,
                    'type' => $request->type,
                    'remise' => $request->remise,
                    'TypeRemise' => $request->TypeRemise,
                    'adresse' => $request->adresse,
                    'telephone' => $request->telephone,
                    'commune' => $request->commune


                ]);
        } else {
            $validator = Validator::make($request->all(), [
                'email' => ['required', 'string', 'email', 'max:255', 'unique:clients'],
            ]);

            if ($validator->fails()) {
                return redirect()->back()
                    ->withErrors($validator) // send back all errors to the login form
                    ->withInput();
            } else {
                if ($request->wilaya != null)
                    Client::where('id_client', $request->id)->update([
                        'nom' => $request->nom,
                        'prenom' => $request->prenom,
                        'email' => $request->email,
                        'type' => $request->type,
                        'remise' => $request->remise,
                        'TypeRemise' => $request->TypeRemise,
                        'wilaya' => $request->wilaya != null && is_string($request->wilaya) ? $request->wilaya : $request->wilaya['id'],
                        'adresse' => $request->adresse,
                        'telephone' => $request->telephone
                    ]);
                else
                    Client::where('id_client', $request->id)->update([
                        'nom' => $request->nom,
                        'prenom' => $request->prenom,
                        'email' => $request->email,
                        'type' => $request->type,
                        'remise' => $request->remise,
                        'TypeRemise' => $request->TypeRemise,
                        'commune' => $request->commune,
                        'adresse' => $request->adresse,
                        'telephone' => $request->telephone

                    ]);
            }
        }
        /*
    try{
        $data = ['email' => $request->email,'nom'=>$request->nom,'prenom'=>$request->prenom,'password'=>'' ];
        Mail::to($request->email)->send(new InformationUpdatedMail($data));

    }catch(Exception $e){}
     */
        return redirect()->to('/administration/clients');
    }


    public function updateInfoClient(Request $request)
    {

        $livreur = Client::where('id_client', $request->id)->first();
        if ($request->email == $livreur->email) {
            Client::where('id_client', $request->id)->update([
                'nom' => $request->nom,
                'prenom' => $request->prenom,
                'password' => $request->password == "" ? $livreur->password : Hash::make($request->password),
                'adresse' => $request->adresse,
                'telephone' => $request->telephone
            ]);
        } else {
            $validator = Validator::make($request->all(), [
                'email' => ['required', 'string', 'email', 'max:255', 'unique:clients'],
            ]);

            if ($validator->fails()) {
                return redirect()->back()
                    ->withErrors($validator) // send back all errors to the login form
                    ->withInput();
            } else {
                Client::where('id_client', $request->id)->update([
                    'nom' => $request->nom,
                    'prenom' => $request->prenom,
                    'email' => $request->email,
                    'password' => $request->password == "" ? $livreur->password : Hash::make($request->password),
                    'adresse' => $request->adresse,
                    'telephone' => $request->telephone
                ]);
            }
        }
        try {
            $data = ['email' => $request->email, 'nom' => $request->nom, 'prenom' => $request->prenom, 'password' => ''];
            Mail::to($request->email)->send(new InformationUpdatedMail($data));
        } catch (Exception $e) {
        }

        return redirect()->back();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Faker $faker)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'unique:clients',
            'telephone' => 'unique:clients'
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }

        FacadesDB::insert('INSERT into clients (nom, prenom,telephone,wilaya,commune,email,password,code,nb_points)
        values (?, ?,?,?,?,?,?,?,?)', [
            $request["nom"],
            $request["prenom"],
            $request["telephone"],
            $request["wilaya"],
            $request["commune"],
            $request["email"],
            Hash::make($request["password"]),
            strtoupper($request["prenom"] . $faker->unique()->numberBetween(10000, 99999)),
            0
        ]);
        return "operation reussite";
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $client = Client::where('id_client', '=', $id)->first();
        if ($client->email == $request['email']  && $client->telephone == $request['telephone']) {
        } else if ($client->e_mail == $request['email']) {
            $validator = Validator::make($request->all(), [
                'telephone' => 'unique:clients'
            ]);
            if ($validator->fails()) {
                return $validator->errors();
            }
        } else if ($client->telephone == $request['telephone']) {
            $validator = Validator::make($request->all(), [
                'email' => 'unique:clients',
            ]);
            if ($validator->fails()) {
                return $validator->errors();
            }
        } else {
            $validator = Validator::make($request->all(), [
                'email' => 'unique:clients',
                'telephone' => 'unique:clients'
            ]);
            if ($validator->fails()) {
                return $validator->errors();
            }
        }


        $client->update([
            'nom' => $request['nom'],
            'email' => $request['email'],
            'prenom' => $request['prenom'],
            'telephone' => $request['telephone'],
        ]);
        $client->save();
        return "Operation reussite";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        //
    }

    public function changePassword(Request $request, int  $id)
    {
        $livreur = Client::where('id_client', '=', $id)->first();
        $livreur->update([
            'password' => Hash::make($request['password'])
        ]);
        return "Operation Reussite";
    }

    public function showcodenpoints($id)
    {
        return Client::select('code', 'nb_points')->where('id_client', '=', $id)->first();
    }
}
