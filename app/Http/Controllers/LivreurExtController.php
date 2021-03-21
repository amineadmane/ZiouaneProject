<?php

namespace App\Http\Controllers;

use App\LivreurExt;
use Faker\Generator as Faker;
use App\Http\Controllers\Controller;
use App\Livreur;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LivreurExtController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $faker = new Faker();
        $livreur = LivreurExt::create(array(
            'nom' => $request['nom'],
            'e_mail' => $request['e_mail'],
            'prenom' => $request['prenom'],
            'phone_number' => $request['phone_number'],
            'id_permis' => $request['id_permis'],
            'expire_date' => $request['expire_date'],
            'etat' => "bloque",
            'matricule_vehicule' => $request['matricule_vehicule'],
            'modele_Vehicule' => $request['modele_vehicule'],
            'couleur_vehicule' => $request['couleur_vehicule'],
            'note' => 0,
            'points' => 0,
            'code_parrainage' => $faker->ean8()->unique(),
            'password' => $request['password']
        ));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\LivreurExt  $livreurExt
     * @return \Illuminate\Http\Response
     */
    public function show(LivreurExt $livreurExt)
    {
        //
    }
    public function showcodenpoints($livreur)
    {
        return LivreurExt::select('code_parrainage', 'points')->
        where('id_liv_ext','=',$livreur)->first();
    }

    public function Evaluationtotale($livreur)
    {
        return  LivreurExt::where('id_liv_ext','=' ,$livreur)->select('note')->get()->first();
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\LivreurExt  $livreurExt
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $livreur = LivreurExt::where('id_liv_ext', '=', $id)->first();
        $livreur->update([
            'nom' => $request['nom'],
            'e_mail' => $request['e_mail'],
            'prenom' => $request['prenom'],
            'phone_number' => $request['phone_number'],
            'id_permis' => $request['id_permis'],
            'expire_date' => $request['expire_date'],
            'etat' => "active",
            'matricule_vehicule' => $request['matricule_vehicule'],
            'modele_Vehicule' => $request['modele_vehicule'],
            'couleur_vehicule' => $request['couleur_vehicule'],
            'note' => 0,
            'points' => 0,
            'code_parrainage' => $request['code_parrainage'],
            'password' => $request['password']
        ]);
    }
    public function switchstatus(Request $request, $id)
    {
        $livreur = LivreurExt::where('id_liv_ext', '=', $id)->first();    
        //return $request->etat;
        if($request->etat == "true")
        {

            $etat = "Connecte";
            printf($etat);
        }
        else{
           
            $etat = "disconnected";
            printf("2");
        }
        $livreur->update([
            'etat' => $etat,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\LivreurExt  $livreurExt
     * @return \Illuminate\Http\Response
     */
    public function destroy(LivreurExt $livreurExt)
    {
        //
    }
}
