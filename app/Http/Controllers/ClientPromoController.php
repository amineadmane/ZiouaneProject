<?php

namespace App\Http\Controllers;

use App\Client_Promo;
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
        $promotions =  DB::select(
            DB::raw('SELECT * FROM promotions WHERE  code = :code'),
            array('code' => $code)
        );
        if ($promotions == null || $promotions[0]->fin_validite < Carbon::today()) {
            return "code non valide";
        } else {
            $client_Promo = DB::select(
                DB::raw('SELECT * FROM client__promos
                WHERE client_id = ? AND promotion_id = ?'),
                [
                    $request["client_id"],
                    $promotions[0]->id_promotion
                ]
            );
            if ($client_Promo == null) {
                DB::insert(
                    'insert into client__promos
                (client_id, promotion_id,created_at,updated_at,utilise) values (?, ?, ?, ?,?)',
                    [$request["client_id"], $promotions[0]->id_promotion, Carbon::now(), Carbon::now(),1]
                );
                return "operation reussite";
            } else {
                return "Code deja utilisé";
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
