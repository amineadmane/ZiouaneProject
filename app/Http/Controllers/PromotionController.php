<?php

namespace App\Http\Controllers;

use App\Client;
use App\Client_Promo;
use App\Promotion;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class PromotionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
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
        DB::insert(
            'INSERT into promotions (code, debut_validite,fin_validite,valeur,created_at,updated_at)
            values (?, ?, ? , ? , ? , ?)',
            [
                $request["code"],
                $request["debut_validite"],
                $request["fin_validite"],
                $request["valeur"],
                Carbon::now(),
                Carbon::now()
            ]
        );

        return "operation reussite";
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Promotion  $promotion
     * @return \Illuminate\Http\Response
     */
    public function show(int $id_client)
    {
        return DB::select(
            DB::raw(
                'SELECT p.valeur, p.fin_validite, p.debut_validite, p.code , cp.utilise
        FROM client__promos as cp join promotions as p
        on cp.promotion_id = p.id_promotion
        where cp.client_id = ?
        ORDER BY p.fin_validite DESC'
            ),
            [
                $id_client
            ]
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Promotion  $promotion
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Promotion $promotion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Promotion  $promotion
     * @return \Illuminate\Http\Response
     */
    public function destroy(Promotion $promotion)
    {
        //
    }
}
