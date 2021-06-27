<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Colis;
use App\Wilaya;
use App\Admin;
use App\Commune;
use Auth;
use App\Centre;
use App\Livreur;
use App\ColisLivre;
use App\FraisLivraison;
use App\Client;
use App\ColisAnnule;
use App\ColisPaye;
use Carbon\Carbon;

use App\Logs;
use DB;
use Illuminate\Http\Request;

class ColisController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function indexClient()
    {

        $client = Client::where('id_client', Auth::guard('client')->user()->id_client)->with(['FraisL'])->first();
        $colis = Colis::where('client', Auth::guard('client')->user()->id_client)->with([
            'Wilaya',
            'Commune',
            'Logs',
            'Livreur',
            'Client.Wilaya',
            'Client.Commune',

        ])->get();

        return Inertia::render('client/dashboard/MesColis', [
            'colis' => $colis,
            'frais' => $client->FraisL
        ]);
    }
    public function clientColisLivres()
    {
        $colis = ColisLivre::where('client', Auth::guard('client')->user()->id_client)->with([
            'Wilaya',
            'Commune',
            'Logs',
            'Livreur'
        ])->get();

        return Inertia::render('client/dashboard/MesColisEtat', [
            'colis' => $colis,
        ]);
    }

    public function clientColisAnnulées()
    {
        $colis = ColisAnnule::where('client', Auth::guard('client')->user()->id_client)->with([
            'Wilaya',
            'Commune',
            'Logs',
            'Livreur'
        ])->get();

        return Inertia::render('client/dashboard/MesColisEtat', [
            'colis' => $colis,
        ]);
    }


    public function ChangerEtat(Request $request)
    {

        $wilayasN = Wilaya::where('fraisLivraison', null)->get();
        $wilayas = Wilaya::where('fraisLivraison', '!=', null)->get();


        return Inertia::render('admin/dashboard/FraisLivraison', [
            'wilayasN' => $wilayasN,
            'wilayas' => $wilayas
        ]);
    }
    public function lesColisCentre()
    {
        $admin = Admin::where('id_admin', Auth::guard('admin')->user()->id_admin)->with(['Wilaya'])->first();

        $etats = ['pret', 'ramassé', 'pret a ramasser', 'en preparation'];
        $livreurs = Livreur::where('wilaya', Auth::guard('admin')->user()->wilaya)->with(['Wilaya'])->get();
        $e = 'bureau ' . $admin['Wilaya']['nom'];

        $colis = Colis::where(function ($query) use ($etats) {
            $query
                ->WhereHas(
                    'Client',
                    function ($query) {
                        $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                    }
                )->WhereHas(
                    'Wilaya',
                    function ($query) {
                        $query->where('code', '!=', Auth::guard('admin')->user()->wilaya);
                    }
                )->whereNotIn('etat1', $etats);
        })->orwhere(function ($query) use ($e, $admin) {
            $query
                ->WhereHas(
                    'Client',
                    function ($query) {
                        $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                    }
                )->WhereHas(
                    'Wilaya',
                    function ($query) {
                        $query->where('code', '!=', Auth::guard('admin')->user()->wilaya);
                    }
                )
                ->where('etat1', $e)
                ->where('etat2', $admin['Wilaya']['Centre']['nom']);
        })->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs',
            'Client'

        ])->orderBy('id_colis', 'DESC')->get();








        Colis::whereNotIn('etat1', $etats)->where('etat1', '!=', 'bureau ' . $admin->Wilaya['nom'])->where('etat2', '!=', 'au bureau')

            ->whereHas(
                'Client',
                function ($query) {
                    $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                }
            )->whereHas('Wilaya', function ($query) {
                $query->where('code', '!=', Auth::guard('admin')->user()->wilaya);
            })->with([
                'Client',
                'Wilaya',
                'Commune',
                'Livreur',
                'Logs'

            ])->get();

        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();

        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();
        $centre = $wilaya->Centre;

        return Inertia::render('admin/dashboard/MesColisCentre', [
            'colis' => $colis,
            'livreurs' => $livreurs,
            'centre' => $centre

        ]);
    }


    public function ChangerEtatAdmin(Request $request)
    {
        //dd($request->all());
        $etats = ['au bureau', 'en cours de livraison', 'ramassé', 'livré', 'retourné', 'annulé'];

        if ($request->etat2 == null) {
            if ($request->etat == "en transport")
                foreach ($request->selected as $req) {
                    # code...
                    Logs::insertGetId([
                        'id_produit' => $req['id_colis'],
                        'etat1' => $request->etat,
                        'etat2' => $req['etat2'],
                        'created_at' => Carbon::now(),
                        'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom,

                    ]);
                    Colis::where('id_colis', $req['id_colis'])->update(['etat1' => $request->etat]);
                }
            else

                foreach ($request->selected as $req) {
                    # code...
                    Logs::insertGetId([
                        'id_produit' => $req['id_colis'],
                        'etat1' => $request->etat,
                        'created_at' => Carbon::now(),
                        'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom,

                    ]);
                    Colis::where('id_colis', $req['id_colis'])->update(['etat1' => $request->etat, 'etat2' => null]);
                }

            return redirect()->back();
        } else
        if ($request->etat != null && $request->etat2 == null)
            foreach ($request->selected as $req) {
                # code...
                Logs::insertGetId([
                    'id_produit' => $req['id_colis'],
                    'etat1' => $request->etat,
                    'etat2' => 'non recuperer',
                    'created_at' => Carbon::now(),
                    'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom,

                ]);
                Colis::where('id_colis', $req['id_colis'])->update(['etat1' => $request->etat, 'etat2' => "non recuperer"]);
            }

        else
        if ($request->etat != null && $request->etat2 != null)
            foreach ($request->selected as $req) {
                # code...
                Logs::insertGetId([
                    'id_produit' => $req['id_colis'],
                    'etat1' => $request->etat,
                    'etat2' => $request->etat2,
                    'created_at' => Carbon::now(),
                    'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom,

                ]);
                Colis::where('id_colis', $req['id_colis'])->update(['etat1' => $request->etat, 'etat2' => $request->etat2]);
            }


        foreach ($request->selected as $req) {
            # code...
            Logs::insertGetId([
                'id_produit' => $req['id_colis'],
                'etat1' => $req['etat1'],
                'etat2' => $request->etat2,
                'created_at' => Carbon::now(),
                'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom,

            ]);
            Colis::where('id_colis', $req['id_colis'])->update(['etat2' => $request->etat2]);
        }


        return redirect()->back();
    }

    public function ChangerEtatAdminRetour(Request $request)
    {

        if ($request->etat == null) {
            foreach ($request->selected as $req) {
                Logs::insertGetId([
                    'id_produit' => $req['id_colisannule'],
                    'etat1' => $req['etat1'],
                    'etat2' => $request->etat2,
                    'created_at' => Carbon::now(),
                    'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
                ]);
                ColisAnnule::where('id_colisannule', $req['id_colisannule'])->update(['etat2' => $request->etat2]);
            }
        } else
            if ($request->etat != null && $request->etat2 == null)
            foreach ($request->selected as $req) {
                # code...
                Logs::insertGetId([
                    'id_produit' => $req['id_colisannule'],
                    'etat1' => $request->etat,
                    'etat2' => $req['etat2'],
                    'created_at' => Carbon::now(),
                    'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
                ]);
                ColisAnnule::where('id_colisannule', $req['id_colisannule'])->update(['etat1' => $request->etat]);
            }
        else
            foreach ($request->selected as $req) {
                Logs::insertGetId([
                    'id_produit' => $req['id_colisannule'],
                    'etat1' => $request->etat,
                    'created_at' => Carbon::now(),
                    'etat2' => $request->etat2,
                    'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
                ]);
                ColisAnnule::where('id_colisannule', $req['id_colisannule'])->update(['etat1' => $request->etat, 'etat2' => $request->etat2]);
            }

        return redirect()->back();
    }



    public function ChangerEtatPaiement(Request $request)
    {
        //dd('hdcc');
        foreach ($request->selected as $req) {
            foreach ($req as $key) {
                # code...
                if (is_array($key)) {
                    Logs::insertGetId([
                        'id_produit' => $key['id_colisLivre'],
                        'etat2' => $request->etat,
                        'etat1' => $key['etat1'],
                        'created_at' => Carbon::now(),
                        'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
                    ]);
                    ColisLivre::where('id_colisLivre', $key['id_colisLivre'])->update(['etat2' => $request->etat]);
                }
            }
        }

        return redirect('/administration/paiements/livreurs');
    }

    public function ChangerEtatRetourBureau(Request $request)
    {

        foreach ($request->selected as $req) {
            foreach ($req as $key) {
                # code...
                if (is_array($key)) {
                    Logs::insertGetId([
                        'id_produit' => $key['id_colisannule'],
                        'etat1' => $key['motifRetour'],
                        'etat2' => $request->etat,
                        'created_at' => Carbon::now(),
                        'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
                    ]);
                    ColisAnnule::where('id_colisannule', $key['id_colisannule'])->update(['etat2' => $request->etat, 'etat1' => $key['motifRetour']]);
                }
            }
        }

        return redirect('/administration/bureau/mescolis/retours');
    }

    public function ChangerEtatAnnulesB(Request $request)
    {

        if ($request->etat == null)
            foreach ($request->selected as $key) {

                # code...

                Logs::insertGetId([
                    'id_produit' => $key['id_colisannule'],
                    'etat1' => $key['motifRetour'] . " " . $key['etat1'],
                    'etat2' => $request->etat2,
                    'created_at' => Carbon::now(),
                    'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
                ]);

                ColisAnnule::where('id_colisannule', $key['id_colisannule'])->update(['etat2' => $request->etat2]);
            }
        else {
            if ($request->etat == "motif")
                foreach ($request->selected as $key) {

                    # code...

                    Logs::insertGetId([
                        'id_produit' => $key['id_colisannule'],
                        'etat1' => $key['motifRetour'] . " " . $key['etat1'],
                        'etat2' => $request->etat2,
                        'created_at' => Carbon::now(),
                        'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
                    ]);

                    ColisAnnule::where('id_colisannule', $key['id_colisannule'])->update(['etat2' => $request->etat2, 'etat1' => $key['motifRetour']]);
                }
            else {
                foreach ($request->selected as $key) {

                    # code...

                    Logs::insertGetId([
                        'id_produit' => $key['id_colisannule'],
                        'etat1' => $request->etat,
                        'etat2' => $request->etat2,
                        'created_at' => Carbon::now(),
                        'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
                    ]);

                    ColisAnnule::where('id_colisannule', $key['id_colisannule'])->update(['etat2' => $request->etat2, "etat1" => $request->etat]);
                }
            }
        }

        return redirect()->back();
    }

    public function ChangerEtatLivB(Request $request)
    {
        //dd('hdcc');

        foreach ($request->selected as $key) {

            # code...

            Logs::insertGetId([
                'id_produit' => $key['id_colisLivre'],
                'etat1' => 'livré',
                'etat2' => $request->etat2,
                'created_at' => Carbon::now(),
                'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
            ]);
            ColisLivre::where('id_colisLivre', $key['id_colisLivre'])->update(['etat2' => $request->etat2]);
        }




        return redirect()->back();
    }

    public function ChangerEtatPaiementClient(Request $request)
    {

        foreach ($request->selected as $req) {

            # code...

            //$req=ColisLivre::where('id_colisLivre',$key['id_colisLivre'])->first();
            $id = ColisPaye::insertGetId([
                'client' => $req['client'],
                'ref' => $req['ref'],
                'codecolis' => $req['codecolis'],
                'nomclient' => $req['nomclient'],
                'telephone' => $req['telephone'],
                'wilaya' => $req['wilaya']['code'],
                'commune' => $req['commune']['id'],
                'codePostal' => $req['commune']['code_postal'],
                'adresse' => $req['adresse'],
                'produits' => $req['produits'],
                'livraison' => $req['livraison'],
                'remarque' => $req['remarque'],
                'prix' => $req['prix'],
                'poids' => $req['poids'],
                'etat1' => 'livré',
                'fraisLivraison' => $req['fraisLivraison'],
                'livreur' => $req['livreur']['id_livreur']

            ]);
            Logs::insertGetId([
                'id_produit' => $id,
                'etat1' => $request->etat,
                'etat2' => $req['etat2'],
                'created_at' => Carbon::now(),
                'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
            ]);
            ColisLivre::where('id_colisLivre', $req['id_colisLivre'])->delete();
        }

        return redirect()->back();
    }
    public function ChangerEtatPaiementClientAnn(Request $request)
    {
        //dd('hdcc');
        foreach ($request->selected as $req) {
            # code...
            //$req=ColisAnnule::where('id_colisannule',$key['id_colisannule'])->first();
            $id = ColisPaye::insertGetId([
                'client' => $req['client'],
                'ref' => $req['ref'],
                'codecolis' => $req['codecolis'],
                'nomclient' => $req['nomclient'],
                'telephone' => $req['telephone'],
                'wilaya' => $req['wilaya']['code'],
                'commune' => $req['commune']['id'],
                'codePostal' => $req['commune']['code_postal'],
                'adresse' => $req['adresse'],
                'produits' => $req['produits'],
                'livraison' => $req['livraison'],
                'remarque' => $req['remarque'],
                'prix' => $req['prix'],
                'fraisLivraison' => $req['fraisLivraison'],
                'etat1' => $req['motifRetour'],
                'livreur' => $req['livreur']['id_livreur']

            ]);
            Logs::insertGetId([
                'id_produit' => $id,
                'etat1' => $request->etat,
                'etat2' => $req['etat2'],
                'created_at' => Carbon::now(),
                'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom
            ]);
            ColisAnnule::where('id_colisannule', $req['id_colisannule'])->delete();
        }

        return redirect()->back();
    }
    public function ChangerEtatClient(Request $request)
    {

        foreach ($request->selected as $req) {
            Logs::insertGetId([
                'id_produit' => $req['id_colis'],
                'etat1' => $request->etat,
                'etat2' => $req['etat2'],
                'created_at' => Carbon::now(),
                'user' => "client " . Auth::guard('client')->user()->nom . " " . Auth::guard('client')->user()->prenom
            ]);
            Colis::where('id_colis', $req['id_colis'])->update(['etat1' => $request->etat]);
        }

        return redirect('/colis');
    }
    public function ChangerEtatLivreur(Request $request)
    {
        $etat2 = null;
        if ($request->etat == "livré") {
            $etat2 = "pas pret";
            foreach ($request->selected as $req) {
                $req['etat2'] = $etat2;
                $id = ColisLivre::insertGetId([
                    'client' => $req['client'],
                    'ref' => $req['ref'],
                    'poids' => $req['poids'],
                    'codecolis' => $req['codecolis'],
                    'nomclient' => $req['nomclient'],
                    'telephone' => $req['telephone'],
                    'wilaya' => $req['wilaya']['code'],
                    'commune' => $req['commune']['id'],
                    'codePostal' => $req['commune']['code_postal'],
                    'adresse' => $req['adresse'],
                    'produits' => $req['produits'],
                    'livraison' => $req['livraison'],
                    'remarque' => $req['remarque'],
                    'prix' => $req['prix'],
                    'etat1' => $request->etat,
                    'etat2' => $etat2,
                    'fraisLivraison' => $req['fraisLivraison'],
                    'livreur' => $req['livreur']['id_livreur']

                ]);
                Logs::insertGetId([
                    'id_produit' => $id,
                    'etat1' => $request->etat,
                    'etat2' => $etat2,
                    'created_at' => Carbon::now(),

                    'user' => "livreur " . Auth::guard('livreur')->user()->nom . " " . Auth::guard('livreur')->user()->prenom
                ]);
                Colis::where('id_colis', $req['id_colis'])->delete();
            }
        } else
        if ($request->etat == 'annulé' || $request->etat == 'retourné') {
            $etat2 = "pas pret";
            foreach ($request->selected as $req) {
                $req['etat2'] = $etat2;
                $id = ColisAnnule::insertGetId([
                    'client' => $req['client'],
                    'ref' => $req['ref'],
                    'poids' => $req['poids'],
                    'codecolis' => $req['codecolis'],
                    'nomclient' => $req['nomclient'],
                    'telephone' => $req['telephone'],
                    'wilaya' => $req['wilaya']['code'],
                    'commune' => $req['commune']['id'],
                    'codePostal' => $req['commune']['code_postal'],
                    'adresse' => $req['adresse'],
                    'produits' => $req['produits'],
                    'livraison' => $req['livraison'],
                    'remarque' => $req['remarque'],
                    'prix' => $req['prix'],
                    'etat1' => $request->etat,
                    'fraisLivraison' => $req['fraisLivraison'],
                    'etat2' => $etat2,
                    'motifRetour' => $request->etat,
                    'livreur' => $req['livreur']['id_livreur']

                ]);
                Logs::insertGetId([
                    'id_produit' => $id,
                    'etat1' => $request->etat,
                    'etat2' => $etat2,
                    'created_at' => Carbon::now(),
                    'user' => "livreur " . Auth::guard('livreur')->user()->nom . " " . Auth::guard('livreur')->user()->prenom
                ]);
                Colis::where('id_colis', $req['id_colis'])->delete();
            }
        } else {
            foreach ($request->selected as $req) {
                Logs::insertGetId([
                    'id_produit' => $req['id_colis'],
                    'etat1' => $request->etat,
                    'etat2' => $etat2,
                    'created_at' => Carbon::now(),
                    'user' => "livreur " . Auth::guard('livreur')->user()->nom . " " . Auth::guard('livreur')->user()->prenom
                ]);
                $req['etat2'] = $etat2;
                Colis::where('id_colis', $req['id_colis'])->update(['etat1' => $request->etat, 'etat2' => $etat2]);
            }
        }
        return redirect('/mescolis');
    }


    public function attribuerLivreurRetour(Request $request)
    {

        foreach ($request->selected as $req) {
            # code...
            ColisAnnule::where('id_colisannule', $req['id_colisannule'])->update(['livreur' => $request->livreur]);
            $colis = ColisAnnule::where('id_colisannule', $req['id_colisannule'])->first();
            $livreur = Livreur::where('id_livreur', $request->livreur)->first();
            if ($request->livreur != null)
                Logs::insertGetId([
                    'id_produit' => $req['id_colisannule'],
                    'created_at' => Carbon::now(),
                    'livreur' => $livreur->nom . " " . $livreur->prenom,
                    'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom

                ]);
            else
                Logs::insertGetId([
                    'id_produit' => $req['id_colis'],
                    'created_at' => Carbon::now(),
                    'livreur' => "aucun",
                    'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom

                ]);
        }

        return redirect()->back();
    }

    public function attribuerLivreur(Request $request)
    {

        foreach ($request->selected as $req) {
            # code...
            Colis::where('id_colis', $req['id_colis'])->update(['livreur' => $request->livreur]);
            $colis = Colis::where('id_colis', $req['id_colis'])->first();
            $livreur = Livreur::where('id_livreur', $request->livreur)->first();
            if ($request->livreur != null)
                Logs::insertGetId([
                    'id_produit' => $req['id_colis'],
                    'created_at' => Carbon::now(),
                    'livreur' => $livreur->nom . " " . $livreur->prenom,
                    'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom

                ]);
            else
                Logs::insertGetId([
                    'id_produit' => $req['id_colis'],
                    'created_at' => Carbon::now(),
                    'livreur' => "aucun",
                    'user' => Auth::guard('admin')->user()->role . " " . Auth::guard('admin')->user()->nom . " " . Auth::guard('admin')->user()->prenom

                ]);
        }

        return redirect()->back();
    }

    public function indexLivres()
    {

        if (Auth::guard('admin')->user()->role == "super-admin")  return $this->SuperAdminColisLivres();

        else
        if (Auth::guard('admin')->user()->role == "admin-wilaya") return $this->AdminWilayaColisLivres();
        else
                if (Auth::guard('admin')->user()->role == "agent-bureau") return $this->indexAgentBureauLivres();

        else return abort(403);
    }

    public function indexAnnules()
    {

        if (Auth::guard('admin')->user()->role == "super-admin")  return $this->SuperAdminColisAnnules();

        else
            if (Auth::guard('admin')->user()->role == "admin-wilaya") return $this->AdminWilayaColisAnnulés();
        else
                if (Auth::guard('admin')->user()->role == "agent-bureau") return $this->indexAgentBureauAnnules();
        else return abort(403);
    }

    public function MesPaiements()
    {

        $colisLiv = ColisLivre::where('client', Auth::guard('client')->user()->id_client)->where('etat1', 'livré')->with([
            'Wilaya',
            'Commune',
            'Logs'
        ])->get();

        $colisP = ColisPaye::where('client', Auth::guard('client')->user()->id_client)->with([
            'Wilaya',
            'Commune',
            'Logs'
        ])->get();


        return Inertia::render('client/dashboard/MesPaiements', [
            'payes' => $colisP,
            'livres' => $colisLiv,

        ]);
    }

    public function RetoursClient()
    {

        $colisP = ColisPaye::where('client', Auth::guard('client')->user()->id_client)->where('etat1', 'retourné')->orWhere('etat1', 'annulé')->with([
            'Wilaya',
            'Commune',
            'Logs'
        ])->get();

        $colisAnnu = ColisAnnule::where('client', Auth::guard('client')->user()->id_client)->with([
            'Wilaya',
            'Commune',
            'Logs'
        ])->get();



        return Inertia::render('client/dashboard/LesRetours', [
            'payes' => $colisP,
            'annules' => $colisAnnu
        ]);
    }


    public function MesPaiementsBureauLivreur()
    {

        $colisnonPret = ColisLivre::where('etat2', null)->orWhere('etat2', 'pas pret')->whereHas(
                'Client',
                function ($query) {
                    $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                }
            )->with([
                'Wilaya',
                'Commune',
                'Logs',
                'Livreur',
                'Client'
            ])->get()->groupBy('livreur');

        $etats = ['pret', 'pas pret'];

        return Inertia::render('admin/dashboard/MesPaiements', [

            'nonprets' => $colisnonPret,
            'etats' => $etats
        ]);
    }
    public function MesPaiementsBureauClient()
    {

        $colisnonPret = ColisLivre::where('etat2', 'pret')->whereHas(
                'Client',
                function ($query) {
                    $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                }
            )->with([
                'Wilaya',
                'Commune',
                'Logs',
                'Livreur',
                'Client'
            ])->get()->groupBy('client');
        $etats = ['paye'];
        return Inertia::render('admin/dashboard/MesPaiements', [

            'nonprets' => $colisnonPret,
            'etats' => $paye
        ]);
    }

    public function indexAdmin()
    {

        if (Auth::guard('admin')->user()->role == "super-admin")  return $this->indexSuperAdmin();

        else
        if (Auth::guard('admin')->user()->role == "admin-wilaya") return $this->indexAdminWilaya();

        else
                if (Auth::guard('admin')->user()->role == "agent-centre") return $this->indexAgentCentre();
        else
                    if (Auth::guard('admin')->user()->role == "agent-bureau") return $this->indexAgentBureau();
    }

    public function indexAgentBureau()
    {
        $admin = Admin::where('id_admin', Auth::guard('admin')->user()->id_admin)->with(['Wilaya.Centre'])->first();
        $etats = ['pret', 'ramassé', 'au bureau', 'bureau ' . $admin['Wilaya']['nom']];
        $etats2 = ['bureau ' . $admin['Wilaya']['nom'], 'au bureau'];

        $etats11 = ['en transport', 'bureau ' . $admin['Wilaya']['nom'], 'en cours de livraison', $admin['Wilaya']['Centre']['nom']];




        $colis = Colis::where(function ($query) use ($etats) {
            $query->whereIn('etat1', $etats)
                ->WhereHas(
                    'Client',
                    function ($query) {
                        $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                    }
                );
        })->orwhere(function ($query) use ($etats11, $etats2) {
            $query
                ->WhereHas(
                    'Wilaya',
                    function ($query) {
                        $query->where('code', Auth::guard('admin')->user()->wilaya);
                    }
                )->whereIn('etat1', $etats11)->whereIn('etat2', $etats2);
        })->orwhere(function ($query) use ($etats11, $etats2) {
            $query->whereIn('etat1', $etats11)->whereIn('etat2', $etats2);
        })->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs',
            'Client'

        ])->orderBy('id_colis', 'DESC')->get();


        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();
        $centre = $wilaya->Centre;

        return Inertia::render('admin/dashboard/MesColis', [
            'colis' => $colis,
            'centre' => $centre
        ]);
    }
    public function indexAgentBureauLivres()
    {

        $livreurs = Livreur::where('wilaya', Auth::guard('admin')->user()->wilaya)->with(['Wilaya'])->pluck('id_livreur');
        $colis = ColisLivre::whereIn('livreur', $livreurs)->whereHas(
                'Client',
                function ($query) {
                    $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                }
            )->orwhereHas(
                'Wilaya',
                function ($query) {
                    $query->where('code', Auth::guard('admin')->user()->wilaya);
                }
            )->with([
                'Client',
                'Wilaya',
                'Commune',
                'Livreur',
                'Logs'

            ])->get();
        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();
        $centre = $wilaya->Centre;


        return Inertia::render('admin/dashboard/MesColisEtat', [
            'colis' => $colis,
            'centre' => $centre

        ]);
    }

    public function indexAgentBureauAnnules()
    {

        $etats = ['au bureau', 'pas pret'];
        $colis = ColisAnnule::whereHas(
                'Client',
                function ($query) {
                    $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                }
            )
            ->orwhereHas(
                'Wilaya',
                function ($query) {
                    $query->where('code', Auth::guard('admin')->user()->wilaya);
                }
            )->with([
                'Client',
                'Wilaya',
                'Commune',
                'Livreur',
                'Logs'

            ])->get();

        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();
        $centre = $wilaya->Centre;


        return Inertia::render('admin/dashboard/MesColisEtat', [
            'colis' => $colis,
            'centre' => $centre
        ]);
    }

    public function indexAdminWilaya()
    {

        //$centres = Centre::pluck('nom');
        $admin = Admin::where('id_admin', Auth::guard('admin')->user()->id_admin)->with(['Wilaya.Centre'])->first();

        $etats = ['pret', 'en cours de livraison', 'au bureau', 'ramassé', 'bureau ' . $admin['Wilaya']['nom']];
        $etats2 = ['bureau ' . $admin['Wilaya']['nom'], 'au bureau'];

        $etats11 = ['en transport', 'bureau ' . $admin['Wilaya']['nom'], 'en cours de livraison', $admin['Wilaya']['Centre']['nom']];

        $livreurs = Livreur::where('wilaya', Auth::guard('admin')->user()->wilaya)->with(['Wilaya'])->get();

        $colis = Colis::where(function ($query) use ($etats) {
            $query->whereIn('etat1', $etats)
                ->WhereHas(
                    'Client',
                    function ($query) {
                        $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                    }
                );
        })->orwhere(function ($query) use ($etats11, $etats2) {
            $query
                ->WhereHas(
                    'Wilaya',
                    function ($query) {
                        $query->where('code', Auth::guard('admin')->user()->wilaya);
                    }
                )->whereIn('etat1', $etats11)->whereIn('etat2', $etats2);
        })->orwhere(function ($query) use ($etats11, $etats2) {
            $query->whereIn('etat1', $etats11)->whereIn('etat2', $etats2);
        })->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs',
            'Client'

        ])->orderBy('id_colis', 'DESC')->get();



        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();
        $centre = $wilaya->Centre;

        return Inertia::render('admin/dashboard/MesColis', [
            'colis' => $colis,
            'livreurs' => $livreurs,
            'centre' => $centre
        ]);
    }

    public function AdminWilayaColisLivres()
    {

        $livreurs = Livreur::where('wilaya', Auth::guard('admin')->user()->wilaya)->with(['Wilaya'])->pluck('id_livreur');
        $colis = ColisLivre::whereIn('livreur', $livreurs)->orwhereHas(
                'Client',
                function ($query) {
                    $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                }
            )->orwhereHas(
                'Wilaya',
                function ($query) {
                    $query->where('code', Auth::guard('admin')->user()->wilaya);
                }
            )->with([

                'Client',
                'Wilaya',
                'Commune',
                'Livreur',
                'Logs'

            ])->get();
        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();
        $centre = $wilaya->Centre;


        return Inertia::render('admin/dashboard/MesColisEtat', [
            'colis' => $colis,
            'centre' => $centre


        ]);
    }

    public function AdminWilayaColisAnnulés()
    {

        $admin = Admin::where('id_admin', Auth::guard('admin')->user()->id_admin)->with(['Wilaya'])->first();
        $etats2 = ['bureau ' . $admin['Wilaya']['nom'], 'en transport',];
        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();
        $centre = $wilaya->Centre;

        $livreurs = Livreur::where('wilaya', Auth::guard('admin')->user()->wilaya)->with(['Wilaya'])->pluck('id_livreur');
        $colis = ColisAnnule::whereHas(
                'Client',
                function ($query) {
                    $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                }
            )
            ->orwhereHas(
                'Wilaya',
                function ($query) {
                    $query->where('code', Auth::guard('admin')->user()->wilaya);
                }
            )

            ->with([
                'Client',
                'Wilaya',
                'Commune',
                'Livreur',
                'Logs'

            ])->get();

        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();
        $centre = $wilaya->Centre;

        return Inertia::render('admin/dashboard/MesColisEtat', [
            'colis' => $colis,
            'centre' => $centre
        ]);
    }
    // les retours hors wilaya
    public function AdminWilayaColisAretourner()
    {

        $admin = Admin::where('id_admin', Auth::guard('admin')->user()->id_admin)->with(['Wilaya.Centre'])->first();
        $etats = [$admin['Wilaya']['Centre']['nom']];
        $colis = ColisAnnule::where('wilaya', Auth::guard('admin')->user()->wilaya)
            ->whereIn('etat2', $etats)
            ->whereHas(
                'Client',
                function ($query) {
                    $query->where('wilaya', '!=', Auth::guard('admin')->user()->wilaya);
                }
            )->with([
                'Client.Wilaya',
                'Wilaya',
                'Commune',
                'Livreur',
                'Logs'

            ])->get();
        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();
        $centre = $wilaya->Centre;
        $livreurs = Livreur::where('wilaya', Auth::guard('admin')->user()->wilaya)->with(['Wilaya'])->get();
        return Inertia::render('admin/dashboard/LesRetours', [
            'colis' => $colis,
            'centre' => $centre,
            'livreurs' => $livreurs

        ]);
    }

    public function MesColisRetournesAdminWilaya()
    {
        $admin = Admin::where('id_admin', Auth::guard('admin')->user()->id_admin)->with(['Wilaya'])->first();
        $etats = ['annulé', 'retourné', 'au bureau', 'bureau ' . $admin['Wilaya']['nom']];
        $colis = ColisAnnule::whereIn('etat1', $etats)
            ->whereHas(
                'Client',
                function ($query) {
                    $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                }
            )->with([
                'Client.Wilaya',
                'Wilaya',
                'Commune',
                'Livreur',
                'Logs'

            ])->get();
        //$wilaya=Wilaya::where('id',Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();

        //$livreurs = Livreur::where('wilaya',Auth::guard('admin')->user()->wilaya)->with(['Wilaya'])->get();
        return Inertia::render('admin/dashboard/LesRetours', [
            'colis' => $colis,

            //'livreurs'=>$livreurs

        ]);
    }

    public function AgentCentreColisAretourner()
    {
        $admin = Admin::where('id_admin', Auth::guard('admin')->user()->id_admin)->with(['Centre'])->first();
        $livreurs = Livreur::where('centre', Auth::guard('admin')->user()->wilaya)->pluck('id_livreur');
        $colis = ColisAnnule::where('etat1', $admin->Centre['nom'])->orwhere('etat2', $admin->Centre['nom'])->orWhereIn('livreur', $livreurs)->with([
            'Client.Wilaya',
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs'

        ])->get();
        $wilayas = Wilaya::where('centre', $admin->Centre['id_centre'])->pluck('nom');

        $centres = Centre::where('id_centre', '!=', $admin->Centre['id_centre'])->pluck('nom');
        $livreurs = Livreur::where('centre', Auth::guard('admin')->user()->wilaya)->get();

        return Inertia::render('admin/dashboard/LesRetours', [
            'colis' => $colis,
            'centres' => $centres,
            'livreurs' => $livreurs,
            'wilayas' => $wilayas

        ]);
    }

    public function AgentBureauColisAretourner()
    {
        dd('here');
        $colis = ColisAnnule::whereHas(
            'Client',
            function ($query) {
                $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
            }
        )->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs'

        ])->get()->groupBy('livreur');

        $wilaya = Wilaya::where('id', Auth::guard('admin')->user()->wilaya)->with(['centre'])->first();
        $centre = $wilaya->Centre;

        return Inertia::render('admin/dashboard/LesRetoursBureau', [
            'colis' => $colis,
            'centre' => $centre,
        ]);
    }



    public function indexSuperAdmin()
    {
        $livreurs = Livreur::with(['Wilaya'])->get();
        $colis = Colis::with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs'
        ])->get();

        $livreurs = Livreur::with(['Wilaya'])->get();

        return Inertia::render('admin/dashboard/MesColis', [
            'colis' => $colis,

        ]);
    }

    public function SuperAdminColisLivres()
    {

        $colis = ColisLivre::where('etat1', 'livré')->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs'
        ])->get();


        return Inertia::render('admin/dashboard/MesColisEtat', [
            'colis' => $colis,
            'livreurs' => null
        ]);
    }

    public function SuperAdminColisAnnules()
    {

        $colis = ColisAnnule::with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs'
        ])->get();


        return Inertia::render('admin/dashboard/MesColisEtat', [
            'colis' => $colis,
            'livreurs' => null
        ]);
    }
    public function indexAgentCentre()
    {
        $admin = Admin::where('id_admin', Auth::guard('admin')->user()->id_admin)->with(['Centre'])->first();
        $livreurs = Livreur::where('centre', Auth::guard('admin')->user()->wilaya)->pluck('id_livreur');
        $colis = Colis::where('etat1', $admin->Centre['nom'])->orWhere('etat2', $admin->Centre['nom'])->orWhereIn('livreur', $livreurs)->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs'
        ])->orderBy('id_colis', 'DESC')->get();

        $livreurs = Livreur::where('centre', Auth::guard('admin')->user()->wilaya)->get();
        $centres = Centre::where('id_centre', '!=', Auth::guard('admin')->user()->wilaya)->get();
        $wilayas = Wilaya::where('centre', $admin->wilaya)->pluck('nom');
        return Inertia::render('admin/dashboard/MesColis', [
            'colis' => $colis,
            'livreurs' => $livreurs,
            'centres' => $centres,
            'wilayas' => $wilayas

        ]);
    }


    public function indexLivreur()
    {
        $etats = ['livré', 'annulé', 'retourné', 'pret a ramasser', 'ramassé'];
        $colis = Colis::where('livreur', Auth::guard('livreur')->user()->id_livreur)->whereNotIn('etat1', $etats)->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs'
        ])->get();

        $colisR = null;
        if (Auth::guard('livreur')->user()->wilaya == null)
            $colisR = ColisAnnule::where('livreur', Auth::guard('livreur')->user()->id_livreur)->whereNotIn('etat1', $etats)->with([
                'Wilaya',
                'Commune',
                'Livreur',
                'Logs'
            ])->get();
        return Inertia::render('livreur/dashboard/MesColis', [
            'colis' => $colis,
            'colisR' => $colisR
        ]);
    }

    public function LivreurLivres()
    {
        $colis = ColisLivre::where('livreur', Auth::guard('livreur')->user()->id_livreur)->where('etat1', 'livré')->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs'
        ])->get();
        return Inertia::render('livreur/dashboard/MesColisEtat', [
            'colis' => $colis,
        ]);
    }

    public function LivreurAnnules()
    {
        $colis = ColisAnnule::where('livreur', Auth::guard('livreur')->user()->id_livreur)->with([
            'Wilaya',
            'Commune',
            'Livreur',
            'Logs'
        ])->get();
        return Inertia::render('livreur/dashboard/MesColisEtat', [
            'colis' => $colis,
        ]);
    }

    public function ramassages()
    {
        $etats = ['pret a ramasser', 'ramassé'];

        $livreurs = Livreur::where('wilaya', Auth::guard('admin')->user()->wilaya)->with(['Wilaya'])->get();

        if (Auth::guard('admin')->user()->role != 'super-admin')
            $colis = Colis::whereIn('etat1', $etats)->whereHas(
                    'Client',
                    function ($query) {
                        $query->where('wilaya', Auth::guard('admin')->user()->wilaya);
                    }
                )->with([
                    'Wilaya',
                    'Commune',
                    'Livreur',
                    'Client',

                ])->get()->groupBy('client')->toArray();
        else
            $colis = Colis::whereIn('etat1', $etats)->with([
                'Wilaya',
                'Commune',
                'Livreur',
                'Client',

            ])->get()->groupBy('client')->toArray();
        return Inertia::render('admin/dashboard/MesRamassages', [
            'colis' => $colis,
            'livreurs' => $livreurs,
        ]);
    }

    public function ramassagesClient()
    {
        $etats = ['pret a ramasser', 'ramassé'];
        $colis = Colis::where('client', Auth::guard('client')->user()->id_client)->whereIn('etat1', $etats)->with([
                'Wilaya',
                'Commune',
                'Livreur',
                'Client',

            ])->get();

        return Inertia::render('client/dashboard/MesColisEtat', [
            'colis' => $colis,

        ]);
    }

    public function attribuerLivreurRamassage(Request $request)
    {

        foreach ($request->selected as $key) {
            Colis::where('client', $key['id'])->where('etat1', 'pret a ramasser')->update(['livreur' => $request->livreur]);
        }
        return redirect()->back();
    }

    public function editColisClient($id)
    {


        $communes = Commune::where('wilaya_id', 1)->get();
        $frais = FraisLivraison::where('from', Auth::guard('client')->user()->wilaya)->with(['wilayaF', 'wilayaT'])->get();
        $colis = Colis::where('id_colis', $id)->with(['Wilaya', 'Commune', 'Livreur'])->first();

        $communes = Commune::where('wilaya_id', $colis->wilaya)->get();

        if ($colis->client != Auth::guard('client')->user()->id_client) return abort(403);

        return Inertia::render('client/dashboard/colis/EditColis', [
            'colis' => $colis,
            'wilayas' => $frais,
            'communes' => $communes
        ]);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function invoiceColis($id)
    {
        $colis = Colis::where('id_colis', $id)->with(['Wilaya', 'Commune', 'Client'])->get();
        if ($colis[0]->client != Auth::guard('client')->user()->id_client) return abort(403);

        return Inertia::render('Invoice', [
            'colis' => $colis
        ]);
    }

    public function invoicesColis(Request $request)
    {

        return Inertia::render('Invoice', [
            'colis' => $request->all()
        ]);
    }


    public function importData(Request $request)
    {
        $wilayas =  FraisLivraison::where('from', Auth::guard('client')->user()->wilaya)->with(['wilayaF', 'wilayaT'])->get();

        //Wilaya::orderBy('id')->pluck('nom');
        $wilayas_ids = Wilaya::orderBy('id')->pluck('id');
        $communes = Commune::get()->groupBy('wilaya_id');

        return Inertia::render('client/dashboard/colis/ImporterColis', [
            'wilayas' => $wilayas,
            'communes' => $communes,
            'ids' => $wilayas_ids
        ]);
    }
    public function storeData(Request $request)
    {

        try {
            DB::transaction(function () use ($request) {
                foreach ($request->all() as $key) {

                    $commune = Commune::where('wilaya_id', $key['wil'])->where('nom', $key['commune'])->first();

                    if ($commune != null) {
                        //no livraison gratuite


                        $colis = Colis::insertGetId([
                            'client' => Auth::guard('client')->user()->id_client,
                            'ref' => 'reference',
                            'codecolis' => $key['codeCommande'],
                            'nomclient' => $key['nomclient'],
                            'telephone' => $key['telephone'],
                            'wilaya' => $key['wil'],
                            'commune' => $commune['id'],
                            'poids' => $key['poids'],
                            'codePostal' => $key['codePostal'],
                            'adresse' => $key['adresse'],
                            'produits' => $key['produits'],
                            'livraison' => $key['livraison'] == 'Non' ? 0 : 1,
                            'remarque' => $key['remarque'],
                            'prix' => $key['prix'],
                            'fraisLivraison' => $key['fraisLivraison'],

                        ]);
                        $id = str_pad($colis, 5, '0', STR_PAD_LEFT);

                        $ref = "EXP-" . Auth::guard('client')->user()->wilaya . "-" . $id . "-" . $key['wil'];
                        Colis::where('id_colis', $colis)->update(['ref' => $ref]);
                    }
                }
            });
        } catch (Exception $e) {
            DB::rollback();
        }

        return redirect()->to(route('client.colis'));
    }

    public function show($colis)
    {

        //dd($colis);

        //if(Auth::guard('client')->user()->id_client != $colisD->client) return abort('403');
        $logs = Logs::where('id_produit', $colis)->orderBy('created_at', 'asc')->get();
        //dd($logs);
        return Inertia::render('client/dashboard/colis/DetailsColis', [
            'logs' => $logs,
        ]);
    }

    public function create()
    {


        $communes = Commune::where('wilaya_id', 1)->get();

        $frais = FraisLivraison::where('from', Auth::guard('client')->user()->wilaya)->with(['wilayaF', 'wilayaT'])->get();

        //dd($frais);
        return Inertia::render('client/dashboard/colis/AjouterColis', [
            'wilayas' => $frais,
            'communes' => $communes
        ]);
    }




    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        //dd(Auth::guard('client')->user());
        $colis = Colis::insertGetId([
            'client' => Auth::guard('client')->user()->id_client,
            'ref' => 'reference',
            'codecolis' => $request->codecolis,
            'nomclient' => $request->nomclient,
            'telephone' => $request->telephone,
            'wilaya' => $request->wilaya,
            'commune' => $request->commune,
            'codePostal' => $request->codePostal,
            'adresse' => $request->adresse,
            'produits' => $request->produits,
            'livraison' => $request->livraison,
            'poids' => $request->poids,
            'prix' => $request->prix,
            'remarque' => $request->remarque,
            'fraisLivraison' => $request->fraisLivraison

        ]);
        $id = str_pad($colis, 5, '0', STR_PAD_LEFT);

        $ref = "EXP-" . Auth::guard('client')->user()->wilaya . "-" . $id . "-" . $request->wilaya;
        Colis::where('id_colis', $colis)->update(['ref' => $ref]);

        return redirect()->to(route('client.colis'));
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Colis  $colis
     * @return \Illuminate\Http\Response
     */


    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Colis  $colis
     * @return \Illuminate\Http\Response
     */
    public function edit(Colis $colis)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Colis  $colis
     * @return \Illuminate\Http\Response
     */
    public function updateColisClient(Request $request)
    {

        Colis::where('id_colis', $request->id_colis)->update([
            'codecolis' => $request->codecolis,
            'nomclient' => $request->nomclient,
            'telephone' => $request->telephone,
            'wilaya' => $request->wilaya,
            'commune' => $request->commune['id'],
            'codePostal' => $request->codePostal,
            'poids' => $request->poids,
            'adresse' => $request->adresse,
            'produits' => $request->produits,
            'livraison' => $request->livraison,
            'remarque' => $request->remarque,
            'prix' => $request->prix,
        ]);

        return redirect()->to(route('client.colis'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Colis  $colis
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Colis::where('id_colis', $request->id)->delete();
        return redirect()->to(route('client.colis'));
    }
}
