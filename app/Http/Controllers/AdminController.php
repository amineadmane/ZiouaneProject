<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Admin;
use App\Wilaya;
use App\Centre;
use App\Colis;
use App\ColisLivre;
use App\ColisAnnule;
use Carbon\Carbon;
use App\Client;
use Auth;
use DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Mail\CredentialsMail;
use App\Mail\InformationUpdatedMail;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function MesClients(){
        if(Auth::guard('admin')->user()->role!='super-admin'){
        $clients = Client::whereHas(
            'Wilaya',function($query) {
                $query->where('id',Auth::guard('admin')->user()->wilaya);
            })->with([
                'Wilaya',    
        ])->get();
        $wilayas= Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->get();
            }
        else{ $clients = Client::with(['Wilaya'])->get();
            $wilayas= Wilaya::get();
        }
        return Inertia::render('admin/dashboard/clients/MesClients', [
            'clients'=>$clients,     
            'wilayas'=>$wilayas 
        ]);    
    }

    public function StatistiquesAdmin(){
       if(Auth::guard('admin')->user()->role=='super-admin') return $this->superAdminStats();
       if(Auth::guard('admin')->user()->role=='admin-wilaya') return $this->AdminWilayaStats();
    }
  
    public function indexAgentBureau(){
        $etats=['prét','ramassé'];

        $colis = Colis::whereIn('etat1',$etats)->
        whereHas(
            'Client',function($query) {
                $query->where('wilaya',Auth::guard('admin')->user()->wilaya);
            })->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs',
            'Client'

        ])->get();
    
        $centre['nom'] = ['au bureau'];
        return Inertia::render('admin/dashboard/MesColis', [
            'colis'=>$colis,    
            'centre'=>$centre
        ]);
        
    }

    public function superAdminStats(){
        $totalColisLiv = ColisLivre::count();
        $totalColis = Colis::count()+ColisLivre::count()+ColisAnnule::count();

        $colis = Colis::get()->groupBy(function($d) {
            return Carbon::parse($d->created_at)->format('m');
        })->toArray();
        
        $colisLiv = ColisLivre::get()->groupBy(function($d) {
            return Carbon::parse($d->created_at)->format('m');
        })->toArray();
               
        $wilayas = Wilaya::pluck('nom');
        $colisWilaya= Colis::get()->groupBy('wilaya');
        $colisLivWilaya= ColisLivre::get()->groupBy('wilaya');
        $clients=Client::count();   
        
        return Inertia::render('admin/dashboard/Stats', [
            'totalColisLiv'=>$totalColisLiv,
            'totalColis'=>$totalColis,
            'colis'=>$colis,
            'colisLiv'=>$colisLiv,
            'colisWilaya'=>$colisWilaya,
            'colisLivWilaya'=>$colisLivWilaya,
            'wilayas'=>$wilayas,
            'totalClients'=>$clients

        ]);

        }


        public function AdminWilayaStats(){
            $totalColisLiv = ColisLivre::where('wilaya',Auth::guard('admin')->user()->wilaya)->count();
            $totalColis = Colis::where('wilaya',Auth::guard('admin')->user()->wilaya)->count()+
            $totalColisLiv+
            ColisAnnule::where('wilaya',Auth::guard('admin')->user()->wilaya)->count();
    
            $colis = Colis::where('wilaya',Auth::guard('admin')->user()->wilaya)->get()->groupBy(function($d) {
                return Carbon::parse($d->created_at)->format('m');
            })->toArray();
            
            $colisLiv = ColisLivre::where('wilaya',Auth::guard('admin')->user()->wilaya)->get()->groupBy(function($d) {
                return Carbon::parse($d->created_at)->format('m');
            })->toArray();
                   
            $wilayas = Wilaya::pluck('nom');

            $colisWilaya= Colis::whereHas(
                'Client',function($query) {
                    $query->where('wilaya',Auth::guard('admin')->user()->wilaya);
                })->get()->groupBy('wilaya');

            $colisLivWilaya= ColisLivre::whereHas(
            'Client',function($query) {
                $query->where('wilaya',Auth::guard('admin')->user()->wilaya);
            })->get()->groupBy('wilaya');

            $clients=Client::count();        
            return Inertia::render('admin/dashboard/Stats', [
                'totalColisLiv'=>$totalColisLiv,
                'totalColis'=>$totalColis,
                'colis'=>$colis,
                'colisLiv'=>$colisLiv,
                'colisWilaya'=>$colisWilaya,
                'colisLivWilaya'=>$colisLivWilaya,
                'wilayas'=>$wilayas,
                'totalClients'=>$clients
    
            ]);
    
            }
    
    public function updateInfo(Request $request){
        $livreur=Admin::where('id_admin',$request->id)->first();
        if($request->contactEmail==$livreur->email){
            Admin::where('id_admin',$request->id)->update([
                'nom'=>$request->firstName,
                'prenom'=>$request->lastName,
                'password'=>$request->password==""?$livreur->password:Hash::make($request->password)
            ]);
        }
        else {
            $validator=Validator::make($request->all(), [
                'email' => ['required', 'string', 'email', 'max:255', 'unique:livreurs'],
            ]);
            
            if ($validator->fails()) { 
                return redirect()->back()
                    ->withErrors($validator) // send back all errors to the login form
                    ->withInput();
            }
            else {
                Admin::where('id_admin',$request->id)->update([
                    'nom'=>$request->firstName,
                    'prenom'=>$request->lastName,
                    'email'=>$request->contactEmail,
                    'password'=>$request->password==""?$livreur->password:Hash::make($request->password)
                ]);

            }
    } 
}
    
    public function index()
    {
        $admins=Admin::where('role','admin-wilaya')->with(['wilaya'])->get();
        $wilayas = Wilaya::get();

        return Inertia::render('admin/dashboard/adminWilaya/admins', [
            'admins'=>$admins,
            'wilayas'=>$wilayas    
        ]);
    }

    public function indexBureaux()
    {
        $admins=Admin::where('role','agent-bureau')->with(['wilaya'])->get();
        $wilayas = Wilaya::get();

        return Inertia::render('admin/dashboard/agentBureau/agentBureau', [
            'admins'=>$admins,
            'wilayas'=>$wilayas    
        ]);
    }

    public function indexCentres()
    {
        $admins=Admin::where('role','agent-centre')->with(['centre'])->get();
        $centres = Centre::get();

        return Inertia::render('admin/dashboard/agentCentre/agentCentre', [
            'admins'=>$admins,
            'centres'=>$centres    
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
        $validator=Validator::make($request->all(), [
            'nom' => ['required', 'string', 'max:25'],
            'prenom' => ['required', 'string', 'max:25'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        if ($validator->fails()) {
            //dd('here');
            return back()
                ->withErrors($validator) // send back all errors to the login form
                ->withInput();
        } else {
        Admin::insertGetId([
            'nom'=>$request->nom,
            'prenom'=>$request->prenom,
            'email'=>$request->email,
            'wilaya'=>$request->wilaya,
            'role'=>"admin-wilaya",
            'password'=>bcrypt($request->password)
        ]);
        try{
            $data = ['email' => $request->email , 'password' => $request->password,'lien'=>"https://app.ziouane-express.com/admin/login" ];
        Mail::to($request->email)->send(new CredentialsMail($data));
        
        }catch(Exception $e){}
    }
        return redirect('/administration/admins-wilaya');
       
    }
    public function createAgentBureau(Request $request)
    {
        //dd($request->all());
        $validator=Validator::make($request->all(), [
            'nom' => ['required', 'string', 'max:25'],
            'prenom' => ['required', 'string', 'max:25'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        
        if ($validator->fails()) {
            //dd('here');
            return back()
                ->withErrors($validator) // send back all errors to the login form
                ->withInput();
        } else {
            Admin::insertGetId([
                'nom'=>$request->nom,
                'prenom'=>$request->prenom,
                'email'=>$request->email,
                'wilaya'=>$request->wilaya,
                'role'=>"agent-bureau",
                'password'=>bcrypt($request->password)
            ]);
            try{
                $data = ['email' => $request->email , 'password' => $request->password, 'lien'=>"https://app.ziouane-express.com/admin/login" ];
                Mail::to($request->email)->send(new CredentialsMail($data));

            }catch(Exception $e){}
        }
        return redirect('/administration/agents-bureaux');
   
    }

    public function createAgentCentre(Request $request)
    {
        
        $validator=Validator::make($request->all(), [
            'nom' => ['required', 'string', 'max:25'],
            'prenom' => ['required', 'string', 'max:25'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        if ($validator->fails()) {
            //dd('here');
            return back()
                ->withErrors($validator) // send back all errors to the login form
                ->withInput();
        } else {
        
        Admin::insertGetId([
            'nom'=>$request->nom,
            'prenom'=>$request->prenom,
            'email'=>$request->email,
            'wilaya'=>$request->wilaya,
            'role'=>"agent-centre",
            'password'=>bcrypt($request->password)
        ]);
        try{
            $data = ['email' => $request->email , 'password' => $request->password , 'lien'=>"https://app.ziouane-express.com/admin/login"];
            Mail::to($request->email)->send(new CredentialsMail($data));
        }catch(Exception $e){}
    } 
        return redirect('/administration/agents-centres');
   
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        
        $admin=Admin::where('id_admin',$request->id)->first();
        if($request->email==$admin->email){
            Admin::where('id_admin',$request->id)->update([
                'nom'=>$request->nom,
                'prenom'=>$request->prenom,
                'wilaya'=>is_string($request->wilaya)? $request->wilaya : $request->wilaya['id'],
                'password'=>$request->password==""?$admin->password:Hash::make($request->password)
            ]);
        }
        else {
            $validator=Validator::make($request->all(), [
                'email' => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            ]);
            
            if ($validator->fails()) { 
                return back()
                    ->withErrors($validator) // send back all errors to the login form
                    ->withInput();
            }
            else {
                Admin::where('id_admin',$request->id)->update([
                    'nom'=>$request->nom,
                    'prenom'=>$request->prenom,
                    'email'=>$request->email,
                    'wilaya'=>is_string($request->wilaya)? $request->wilaya : $request->wilaya['id'],
                    'password'=>$request->password==""?$admin->password:Hash::make($request->password)
                ]);

            }

    } 

    try{
        $data = ['email' => $request->email , 'password' => $request->password ,'nom'=>$request->nom,'prenom'=>$request->prenom  ,  'lien'=>"https://app.ziouane-express.com/admin/login"];
        Mail::to($request->email)->send(new InformationUpdatedMail($data));
    
    }catch(Exception $e){}
    
    return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Admin::where('id_admin',$request->id_admin)->delete();
        return redirect()->back();

    }
}
