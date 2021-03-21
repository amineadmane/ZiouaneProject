<?php

namespace App\Http\Controllers;

use App\Livraison_externe;
Use \Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class Livraison_externeController extends Controller
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
        return $livraisonext = Livraison_externe::create(array(
            'id_client' => $request['id_client'],
            'id_colis' => $request['id_colis'],
            'id_livreur' => $request['id_livreur'],
            'nomclient' => $request['nomclient'],
            'telephone' => $request['telephone'],
            'wilaya' => $request['wilaya'],
            'commune' => $request['commune'],
            'codePostal' => $request['codePostal'],
            'adresse' => $request['adresse'],
            'prix' => $request['prix'],
            'ditance_parcourous' => $request['ditance_parcourous'],
            'note' => $request['note'],
            'commentaire' => $request['commentaire'],
        ));
    }

    public function Annuler($livreur){
        $livraison = Livraison_externe::where('id_livreur', '=', $livreur)->orderBy('id_livraison_externe', 'DESC')->first();
        Livraison_externe::destroy($livraison->id_livraison_externe);
        return "Operation reussie";
    }
    /**
     * Display the specified resource.
     *
     * @param  \App\Livraison_externe  $livraison_externe
     * @return \Illuminate\Http\Response
     */
    public function showlivraison($livreur,$client,$colis)
    {
        return Livraison_externe::where('id_livreur', '=', $livreur)->where('id_client','=',$client)
        ->where('id_colis','=',$colis)->first();
    }

    public function showlivraisonsaujourdhui($livreur)
    {
        return Livraison_externe::where('id_livreur', '=', $livreur)->select(DB::raw('count(*) as livraisons ,sum(ditance_parcourous) as distance_totale, sum(prix) as prix'))->whereDate('created_at','=',Carbon::today())->get()->first();
    }

    public function histoevaluation($livreur)
    {
        return Livraison_externe::where('id_livreur', '=', $livreur)
            ->join('clients', 'livraison_externes.id_client', '=', 'clients.id_client')
        ->select(DB::raw('livraison_externes.note as note ,livraison_externes.commentaire as commentaire,livraison_externes.created_at , clients.nom , clients.prenom'))->get();
    }

    public function histolivraisonmensuelle($livreur,$mois,$year){
        return Livraison_externe::where('id_livreur', '=', $livreur)->where(DB::raw("MONTH(livraison_externes.created_at)"),'=',$mois)->where(DB::raw("YEAR(livraison_externes.created_at)"),'=',$year)
        ->join('clients', 'livraison_externes.id_client', '=', 'clients.id_client')
        ->select(DB::raw('clients.nom as clientname ,clients.prenom as clientprenom ,livraison_externes.created_at as datelivraison,
        livraison_externes.adresse as dropoff,livraison_externes.prix as prix ,clients.adresse as pickup ,livraison_externes.note as note'))->get();
    }
    public function showderniereliv($livreur)
    {
        $livreur = Livraison_externe::where('id_livreur', '=', $livreur)->get();
        if($livreur->isEmpty()){
            return null;
        }else{
            return  $livreur->last();
        }
    }

    public function  showhistoriqueannuel($livreur,$year)
    {
        $livraisons =  DB::table('livraison_externes')->where('id_livreur', '=', $livreur)->
        select(DB::raw('MONTH(created_at) as mois , count(*) as nb_livraisons ,sum(ditance_parcourous) as distance_totale'))->whereYear('created_at', '=', $year)
        ->groupBy('mois')->get();
        return $livraisons;
    }
    public function showyears($livreur){
        $years = DB::table('livraison_externes')->where('id_livreur', '=', $livreur)->
        select(DB::raw('YEAR(created_at) as year'))->groupBy('year')->get();
        return $years;
    }
    public function showlivraisonsmensuels($livreur,$month)
    {
        return Livraison_externe::where('id_livreur', '=', $livreur)->whereMonth('created_at', '=', $month)->get();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Livraison_externe  $livraison_externe
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Livraison_externe $livraison_externe)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Livraison_externe  $livraison_externe
     * @return \Illuminate\Http\Response
     */
    public function destroy(Livraison_externe $livraison_externe)
    {
        
    }
}
