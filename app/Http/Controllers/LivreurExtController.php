<?php

namespace App\Http\Controllers;

use App\LivreurExt;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


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

        $validator = Validator::make($request->all(), [
            'e_mail' => 'unique:livreur_exts',
            'phone_number' => 'unique:livreur_exts'
        ]);
        if ($validator->fails()) {
            return $validator->errors();
        }

        $livreur = LivreurExt::create(array(
            'nom' => $request['nom'],
            'e_mail' => $request['e_mail'],
            'prenom' => $request['prenom'],
            'phone_number' => $request['phone_number'],
            'id_permis' => $request['id_permis'],
            'expire_date' => $request['expire_date'],
            'etat' => "bloque",
            'matricule_vehicule' => $request['matricule_vehicule'],
            'modele_vehicule' => $request['modele_vehicule'],
            'couleur_vehicule' => $request['couleur_vehicule'],
            'note' => 0,
            'points' => 0,
            'code_parrainage' => $request['code_parrainage'],
            'password' => Hash::make($request['password'])
        ));
        return "inscrpition reussite";
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
    public function shownotenpoints($livreur)
    {
        return LivreurExt::select('note', 'points')->where('id_liv_ext', '=', $livreur)->first();
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
        if ($livreur->e_mail == $request['e_mail']  && $livreur->phone_number == $request['phone_number']) {
        } else if ($livreur->e_mail == $request['e_mail']) {
            $validator = Validator::make($request->all(), [
                'phone_number' => 'unique:livreur_exts'
            ]);
            if ($validator->fails()) {
                return $validator->errors();
            }
        } else if ($livreur->phone_number == $request['phone_number']) {
            $validator = Validator::make($request->all(), [
                'e_mail' => 'unique:livreur_exts',
            ]);
            if ($validator->fails()) {
                return $validator->errors();
            }
        } else {
            $validator = Validator::make($request->all(), [
                'e_mail' => 'unique:livreur_exts',
                'phone_number' => 'unique:livreur_exts'
            ]);
            if ($validator->fails()) {
                return $validator->errors();
            }
        }


        $livreur->update([
            'nom' => $request['nom'],
            'e_mail' => $request['e_mail'],
            'prenom' => $request['prenom'],
            'phone_number' => $request['phone_number'],
        ]);
        $livreur->save();
        return "Operation reussite";
    }

    public function changeDispo(Request $request, $id)
    {
        $livreur = LivreurExt::where('id_liv_ext', "=", $id)->first();
        $livreur->update([
            'etat' => $request["etat"]
        ]);
        return "Operation reussite";
    }

    public function changePassword(Request $request, int  $id)
    {
        $livreur = LivreurExt::where('id_liv_ext', '=', $id)->first();
        $livreur->update([
            'password' => Hash::make($request['password'])
        ]);
        return "Operation Reussite";
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
