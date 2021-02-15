<?php

namespace App\Http\Controllers;

use App\FraisLivraison;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Wilaya;
use Auth;


class FraisLivraisonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { 
        if(Auth::guard('admin')->user()->role=='agent-centre'){
            $wilayasF = Wilaya::where('centre',Auth::guard('admin')->user()->wilaya)->pluck('id')->toArray();
            
            $frais = FraisLivraison::whereIn('from',$wilayasF)->with(['wilayaF','wilayaT'])->get();
            $wilayasF = Wilaya::where('centre',Auth::guard('admin')->user()->wilaya)->get();  
        }
        else 
            if(Auth::guard('admin')->user()->role=='super-admin'){
            $frais = FraisLivraison::with(['wilayaF','wilayaT'])->get();
            $wilayasF = Wilaya::get();
            }
            else {$wilayasF = Wilaya::where('id',Auth::guard('admin')->user()->wilaya)->get();
            $frais = FraisLivraison::whereIn('from',$wilayasF)->with(['wilayaF','wilayaT'])->get();
            }
        
        $wilayasT = Wilaya::get();
        return Inertia::render('admin/dashboard/livraison/FraisLivraison', [
            'frais'=>$frais,
            'wilayasF'=>$wilayasF,
            'wilayasT'=>$wilayasT
           
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create(Request $request)
    {
        
        foreach($request->selected as $req) {
            FraisLivraison::create([
               'from'=>$request->wilaya,
               'to'=>intval($req),
               'prix'=>$request->prix,
               'agence'=>$request->agence
            ]);
            
        }
        return redirect('/administration/fraislivraison');

        
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
     * @param  \App\FraisLivraison  $fraisLivraison
     * @return \Illuminate\Http\Response
     */
    public function show(FraisLivraison $fraisLivraison)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\FraisLivraison  $fraisLivraison
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        
        FraisLivraison::where('id_frais',$request->id)->update(['prix'=>$request->prix,'agence'=>$request->agence]);
        return redirect('/administration/fraislivraison');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\FraisLivraison  $fraisLivraison
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)

    {
        
        FraisLivraison::where('id_frais',$request->id_frais)->update(['prix'=>$request->prix,'agence'=>$request->agence]);
        return redirect('/administration/fraislivraison');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FraisLivraison  $fraisLivraison
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
       FraisLivraison::where('id_frais',$request->id_frais)->delete();
       return redirect('/administration/fraislivraison');      
    }
}
