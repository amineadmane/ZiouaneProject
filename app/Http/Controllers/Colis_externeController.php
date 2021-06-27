<?php

namespace App\Http\Controllers;

use App\Colis_externe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class Colis_externeController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Colis_externe  $colis_externe
     * @return \Illuminate\Http\Response
     */
    public function show(int $colis_externe)
    {
        return DB::select(
            DB::raw('SELECT c.dimensions , c.fragilite, c.valeur, c.poids FROM livraison_externes as l JOIN colis_externes as C
            ON l.id_colis = c.id_colis_externe
            WHERE  l.id_livraison_externe = :code
            Limit 1'),
            array('code' => $colis_externe)
        );
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Colis_externe  $colis_externe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Colis_externe $colis_externe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Colis_externe  $colis_externe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Colis_externe $colis_externe)
    {
        //
    }
}
