<?php

namespace App\Http\Controllers;

use App\Colis_externe;
use App\Livraison_externe;
use \Carbon\Carbon;
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
        $colis = Colis_externe::create(array(
            "valeur" => $request['valeur'],
            "poids" => $request['poids'],
            "etat" => 'en cours',
            "fragilite" => $request['fragilite'],
            "dimensions" => $request['dimensions'],
        ));
        $livraisonext = Livraison_externe::create(array(
            'id_client' => $request['id_client'],
            'id_colis' => $colis->id,
            'id_livreur' => $request['id_livreur'],
            'nomclient' => $request['nomclient'],
            'telephone' => $request['telephone'],
            'adresse' => $request['adresse'],
            'note' => 0,
            'adresse_drop_off' => $request['adresse_drop_off'],
            'prix' => $request['prix'],
            'ditance_parcourous' => $request['ditance_parcourous'],
            'prix_promo' => $request['prix_promo']
        ));
        return "Operation reussie";
    }

    //fonction a refaire
    public function Annuler($livreur)
    {
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
    public function showlivraison($livreur, $client, $colis)
    {
        return Livraison_externe::where('id_livreur', '=', $livreur)->where('id_client', '=', $client)
            ->where('id_colis', '=', $colis)->first();
    }

    public function showlivraisonsaujourdhui($livreur)
    {
        return Livraison_externe::where('id_livreur', '=', $livreur)->select(DB::raw(
            'count(*) as livraisons
        ,sum(ditance_parcourous) as distance_totale
        , sum(prix) as prix,
        AVG (note) as evaluation'
        ))->whereDate('created_at', '=', Carbon::today())->get()->first();
    }

    public function histoevaluation($livreur)
    {
        return Livraison_externe::where('id_livreur', '=', $livreur)
            ->join('clients', 'livraison_externes.id_client', '=', 'clients.id_client')
            ->select(DB::raw('livraison_externes.note as note ,
            livraison_externes.commentaire as commentaire,livraison_externes.created_at ,
            clients.nom , clients.prenom'))->get();
    }

    public function histolivraisonmensuelle($livreur, $mois, $year)
    {
        return Livraison_externe::where('id_livreur', '=', $livreur)->where(DB::raw("MONTH(livraison_externes.created_at)"), '=', $mois)->where(DB::raw("YEAR(livraison_externes.created_at)"), '=', $year)
            ->join('clients', 'livraison_externes.id_client', '=', 'clients.id_client')
            ->select(DB::raw('clients.nom as clientname ,clients.prenom as clientprenom ,livraison_externes.created_at as datelivraison,
        livraison_externes.adresse_drop_off as dropoff,livraison_externes.prix as prix ,livraison_externes.adresse as pickup ,livraison_externes.note as note'))->get();
    }
    public function showderniereliv($livreur)
    {
        $livreur = Livraison_externe::where('id_livreur', '=', $livreur)->get();
        if ($livreur->isEmpty()) {
            return null;
        } else {
            return  $livreur->last();
        }
    }

    public function  showhistoriqueannuel($livreur, $year)
    {
        $livraisons =  DB::table('livraison_externes')->where('id_livreur', '=', $livreur)->select(DB::raw('MONTH(created_at) as mois , count(*) as nb_livraisons ,sum(ditance_parcourous) as distance_totale'))->whereYear('created_at', '=', $year)->groupBy('mois')->get();
        return $livraisons;
    }
    public function showyears($livreur)
    {
        $years = DB::table('livraison_externes')->where('id_livreur', '=', $livreur)->select(DB::raw('YEAR(created_at) as year'))->groupBy('year')->get();
        return $years;
    }
    public function showlivraisonsmensuels($livreur, $month)
    {
        return Livraison_externe::where('id_livreur', '=', $livreur)->whereMonth('created_at', '=', $month)->get();
    }

    public function Livraison(int $idLiv)
    {
        $livraison = Livraison_externe::where('id_livraison_externe', '=', $idLiv);
        $livraison->update([]);
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

    /**************************CLIENT***************************************/
    public function showHistorique($id)
    {
        return Livraison_externe::where('id_client', '=', $id)
            ->join('livreur_exts', 'livreur_exts.id_liv_ext', '=', 'livraison_externes.id_livreur')
            ->select(
                'livreur_exts.nom',
                'livreur_exts.prenom',
                'livraison_externes.id_livraison_externe',
                'livraison_externes.prix',
                'livraison_externes.created_at'
            )
            ->orderBy('livraison_externes.created_at', 'DESC')->get();
    }

    public function showHistoriqueDetail($id)
    {

        return Livraison_externe::where(
            "id_livraison_externe",
            "=",
            $id
        )
            ->join('livreur_exts', 'livreur_exts.id_liv_ext', '=', 'livraison_externes.id_livreur')
            ->select(
                'livreur_exts.nom',
                'livreur_exts.prenom',
                'livraison_externes.note',
                'livraison_externes.adresse',
                'livraison_externes.adresse_drop_off',
                'livraison_externes.prix',
                'livraison_externes.created_at'
            )
            ->first();
    }
}
