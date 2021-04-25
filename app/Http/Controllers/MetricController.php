<?php

namespace App\Http\Controllers;

use App\Metric;
use Illuminate\Http\Request;
use \Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class MetricController extends Controller
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
        $metric = Metric::create(array(
            'id_liv_ext' => 2,
            'CA_totale' => $request['CA_totale'],
            'benifice_totale' => $request['benifice_totale'],
            'CA_today' => $request['CA_today'],
            'benifice_today' => $request['benifice_today'],
            'CA_mensuel' => $request['CA_mensuel'],
            'benifice_mensuel' => $request['benifice_mensuel'],
            'benifice_mois_1' => $request['benifice_mois_1'],
            'benifice_mois_2' => $request['benifice_mois_2'],
            'benifice_mois_3' => $request['benifice_mois_3'],
            'benifice_mois_4' => $request['benifice_mois_4'],
            'benifice_mois_5' => $request['benifice_mois_5'],
        ));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Metric  $metric
     * @return \Illuminate\Http\Response
     */
    public function show(int $id_liv_ext)
    {
        return Metric::where('id_liv_ext', '=', $id_liv_ext)->first();
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Metric  $metric
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, int $id_liv_ext)
    {
        $metric = Metric::where('id_liv_ext', '=', $id_liv_ext)->first();
        $metric->update([
            'CA_totale' => $request['Ca_totale'],
            'benifice_totale' => $request['benefice_totale'],
            'CA_today' => $request['CA_today'],
            'benefice_today' => $request['benefice_today'],
            'CA_mensuel' => $request['CA_mensuel'],
            'benifice_mensuel' => $request['benefice_mensuel'],
            'benifice_mois_1' => $request['benefice_mois_1'],
            'benifice_mois_2' => $request['benefice_mois_2'],
            'benifice_mois_3' => $request['benefice_mois_3'],
            'benifice_mois_4' => $request['benefice_mois_4'],
            'benifice_mois_5' => $request['benefice_mois_5'],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Metric  $metric
     * @return \Illuminate\Http\Response
     */
    public function destroy(Metric $metric)
    {
        //
    }
}
