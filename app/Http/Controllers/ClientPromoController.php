<?php

namespace App\Http\Controllers;

use App\Client_Promo;
use App\Client;
use App\Promotion;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClientPromoController extends Controller
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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $code = $request["code"];
        $client = Client::where('code', '=', $request["code"])->first();
        $promotions =  DB::select(
            DB::raw('SELECT * FROM promotions WHERE  code = :code'),
            array('code' => $code)
        );
        //si le code est pour parrainer
        if ($client != null) {
            #si le code est utiliser pour lui meme
            $selfClient =  Client::where('id_client', '=', $request["client_id"])->first();
            if ($selfClient->code == $request["code"]) {
                return "code non valide";
            }
            #si le code est deja utilise
            $client_Promo = DB::select(
                DB::raw('SELECT * FROM client__promos
                WHERE client_id = ? AND promotion_id = ?'),
                [
                    $request["client_id"],
                    $promotions[0]->id_promotion,
                ]
            );
            if ($client_Promo == null) {
                #code valide
                DB::insert(
                    'insert into client__promos
                (client_id, promotion_id,created_at,updated_at) values (?, ?, ?, ?)',
                    [$request["client_id"], $promotions[0]->id_promotion, Carbon::now(), Carbon::now()]
                );
                #ajouter des points
                $client->update([
                    'nb_points' => $client->nb_points + 50,
                ]);
                $client->save();
                return "operation reussite";
            } else {
                return  "Code deja utilisé";
            }
        }
        #code de promotion
        if ($promotions == null || $promotions[0]->fin_validite < Carbon::today()) {
            return "code non valide";
        } else {
            #si code deja utilise
            $client_Promo = DB::select(
                DB::raw('SELECT * FROM client__promos
                WHERE client_id = ? AND promotion_id = ?'),
                [
                    $request["client_id"],
                    $promotions[0]->id_promotion
                ]
            );
            if ($client_Promo == null) {
                #code valide
                DB::insert(
                    'insert into client__promos
                (client_id, promotion_id,created_at,updated_at) values (?, ?, ?, ?)',
                    [$request["client_id"], $promotions[0]->id_promotion, Carbon::now(), Carbon::now()]
                );
                return "operation reussite";
            } else {
                return  "Code deja utilisé";
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Client_Promo  $client_Promo
     * @return \Illuminate\Http\Response
     */
    public function show(Client_Promo $client_Promo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Client_Promo  $client_Promo
     * @return \Illuminate\Http\Response
     */
    public function edit(Client_Promo $client_Promo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Client_Promo  $client_Promo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Client_Promo $client_Promo)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Client_Promo  $client_Promo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client_Promo $client_Promo)
    {
        //
    }
}
