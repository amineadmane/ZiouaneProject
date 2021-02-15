<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Livreur;
use App\Wilaya;
use App\Commune;
use App\ColisLivre;
use App\ColisAnnule;
use Illuminate\Http\Request;
use Auth;
use App\Colis;
use Inertia\Inertia;
use Illuminate\Support\Facades\Mail;
use App\Mail\CredentialsMail;
use App\Mail\InformationUpdatedMail;

class LivreurController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function updateInfo(Request $request){
        $livreur=Livreur::where('id_livreur',$request->id)->first();
        if($request->email==$livreur->email){
            Livreur::where('id_livreur',$request->id)->update([
                'nom'=>$request->nom,
                'prenom'=>$request->prenom,
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
                Livreur::where('id_livreur',$request->id)->update([
                    'nom'=>$request->nom,
                    'prenom'=>$request->prenom,
                    'email'=>$request->contactEmail,
                    'password'=>$request->password==""?$livreur->password:Hash::make($request->password)
                ]);

            }
    } 
    return redirect()->back();
}


    public function ramassages(){

        $colis = Colis::where('livreur',Auth::guard('livreur')->user()->id_livreur)
        ->where('etat1','pret a ramasser')
        ->orWhere('etat1','ramassé')->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Client'
        ])->get()->groupBy('client');
        
        return Inertia::render('livreur/dashboard/MesRamassages', [
            'colis'=>$colis                
        ]);


    }

    public function ChangerEtatRamassage(Request $request){
        //dd($request->all());
        foreach ($request->selected as $key) {
            //dd($key[0]['client']['id_client']);
            Colis::where('client',$key[0]['client']['id_client'])->where('etat1','pret a ramasser')->where('livreur',Auth::guard('livreur')->user()->id_livreur)->update(['etat1'=>$request->etat]);
        }
        return redirect()->back();

    }


    public function AlivreurDetails($id){
        
        $client=Livreur::where('id_livreur',$id)->first();
        if(Auth::guard('admin')->user()->role!="agent-bureau" && Auth::guard('admin')->user()->role!="admin-wilaya" &&  Auth::guard('admin')->user()->role!="super-admin") return abort(403);
        if(Auth::guard('admin')->user()->wilaya!=$client->wilaya && Auth::guard('admin')->user()->role!='super-admin') return abort(403);
        
        $colisLiv = ColisLivre::where('livreur',$id)->with([
            'Wilaya',
            'Commune',
            'Logs',
            'Livreur'
        ])->orderBy('id_colisLivre','DESC')->get();

        $colisAnnu = ColisAnnule::where('livreur',$id)->with([
            'Wilaya',
            'Commune',
            'Logs',
            'Livreur'
        ])->orderBy('id_colisannule','DESC')->get();


        $colis = Colis::where('livreur',$id)
        ->where('etat1','pret a ramasser')
        ->orWhere('etat1','ramassé')->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Client'
        ])->get()->groupBy('client');
        

        return Inertia::render('admin/dashboard/livreurs/DetailsLivreur', [
            'livres'=>$colisLiv ,
            'annules'=>$colisAnnu,   
            'ramassages'=>$colis,
        ]);

    }




    public function indexAdmin(){
        $transporteurs=null;
        if(Auth::guard('admin')->user()->role=="super-admin") {
            $livreurs = Livreur::where('centre',null)->with(['Wilaya'])->get();
            $transporteurs = Livreurs::where('centre','!=',null)->with(['Centre'])->get(); 
            $wilayas = Wilaya::get();
            $communes = Commune::where('wilaya_id',1)->get();
        
        }
            
        else 
            if(Auth::guard('admin')->user()->role=="agent-centre"){
                $livreurs = Livreur::where('centre',Auth::guard('admin')->user()->wilaya)->with(['Wilaya','Centre'])->get();
                $wilayas = Wilaya::get();
                $communes = Commune::where('wilaya_id',1)->get();
            }
                
            else {
                $livreurs = Livreur::where('wilaya',Auth::guard('admin')->user()->wilaya)->with(['Wilaya'])->get();
                $wilayas = Wilaya::where('id',Auth::guard('admin')->user()->wilaya)->get()->toArray();
                $communes = Commune::where('wilaya_id',Auth::guard('admin')->user()->wilaya)->get();
            }
            
            
        
        return Inertia::render('admin/dashboard/livreurs/livreurs', [
            'livreurs'=>$livreurs,
            'wilayas'=>$wilayas,
            'transporteurs'=>$transporteurs,
            'communes'=>$communes    
        ]); 
    
    }

    public function create(Request $request)
    {
        //dd($request->all());
        $validator=Validator::make($request->all(), [
            'nom' => ['required', 'string', 'max:25'],
            'prenom' => ['required', 'string', 'max:25'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:livreurs'],
            'password' => ['required', 'string', 'min:8'],
        ]);
        
        if ($validator->fails()) { 
            return redirect()->back()
                ->withErrors($validator) // send back all errors to the login form
                ->withInput();
        } else {
        
        if($request->wilaya != null)
            Livreur::insertGetId([
                'nom'=>$request->nom,
                'prenom'=>$request->prenom,
                'email'=>$request->email,
                'telephone'=>$request->telephone,
                'wilaya'=>$request->wilaya,
                'communes'=>$request->communes,
                'password'=>Hash::make($request->password)
            ]);
        else 
            Livreur::insertGetId([
                'nom'=>$request->nom,
                'prenom'=>$request->prenom,
                'email'=>$request->email,
                'telephone'=>$request->telephone,
                'centre'=>$request->centre,
                'password'=>Hash::make($request->password)
            ]);
        
        }
        try{
            $data = ['email' => $request->email , 'password' => $request->password , 'lien'=>"https://express.orcloudproject.com/livreur/login"];
        Mail::to($request->email)->send(new CredentialsMail($data));
        
        }catch(Exception $e){}

        return redirect('/administration/livreurs/');
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
     * @param  \App\Livreur  $livreur
     * @return \Illuminate\Http\Response
     */
    public function show(Livreur $livreur)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Livreur  $livreur
     * @return \Illuminate\Http\Response
     */
    public function edit(Livreur $livreur)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Livreur  $livreur
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $livreur=Livreur::where('id_livreur',$request->id)->first();
        if($request->email==$livreur->email){
        Livreur::where('id_livreur',$request->id)->update([
            'nom'=>$request->nom,
            'prenom'=>$request->prenom,
            
            'telephone'=>$request->telephone,
            'wilaya'=>is_string($request->wilaya)? $request->wilaya : $request->wilaya['id'],
            'communes'=>$request->communes,
            'password'=>$request->password==""?$livreur->password:Hash::make($request->password)
        ]);
        }else {
            $validator=Validator::make($request->all(), [
                'email' => ['required', 'string', 'email', 'max:255', 'unique:livreurs'],
            ]);
            
            if ($validator->fails()) { 
                return redirect()->back()
                    ->withErrors($validator) // send back all errors to the login form
                    ->withInput();
            }
            else {
                Livreur::where('id_livreur',$request->id)->update([
                    'nom'=>$request->nom,
                    'prenom'=>$request->prenom,
                    'email'=>$request->email,
                    'communes'=>$request->communes,
                    'wilaya'=>is_string($request->wilaya)? $request->wilaya : $request->wilaya['id'],
                    'password'=>$request->password==""?$livreur->password:Hash::make($request->password)
                ]);

            }
        }
        try{
            $data = ['email' => $request->email,'nom'=>$request->nom,'prenom'=>$request->prenom,'password'=>$request->password];
            Mail::to($request->email)->send(new InformationUpdatedMail($data));
        
        }catch(Exception $e){}     
        
        return redirect('/administration/livreurs');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Livreur  $livreur
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Livreur::where('id_livreur',$request->id_livreur)->delete();
        return redirect('/administration/livreurs/');

    }
}
