<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use App\Mail\CredentialsMail;
use Illuminate\Support\Facades\Mail;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/invoice', function () {
    return Inertia::render('Invoice', [
    ]);
});

// LOGIN ROUTES  
Route::group(['middleware'=>['guest:client','guest:livreur','guest:admin']], function(){
    
    Route::get('/admin/login', function () {
        return Inertia::render('admin/Login', [
        ]);
    });
    Route::get('/', function () {
        return Inertia::render('admin/Login', [
        ]);
    });

    Route::post('/admin/login','Auth\LoginController@adminLogin')->name('admin.login');
    
    Route::post('/login', 'Auth\LoginController@clientLogin')->name('client.login');
    
    Route::get('/login', function () {
        return Inertia::render('Auth/Login', [
        ]);
    });

    Route::get('/livreur/login', function () {
        return Inertia::render('livreur/Login', [
        ]);
    });
    Route::post('/livreur/login',"Auth\LoginController@livreurLogin")->name('livreur.login');
    

});

// END LOGIN ROUTES

Route::get('/logout','Auth\LoginController@logout')->name('logout');
// CLIENT ROUTES 
Route::group(['middleware'=>['auth:client']], function(){
    
    Route::get('/colis', 'ColisController@indexClient')->name('client.colis');
    Route::get('/mesfrais', 'ClientController@MesFrais')->name('client.frais');
    
    Route::get('/colis/paiements', 'ColisController@MesPaiements')->name('client.paiements');
    
    Route::get('/stats','ClientController@ClientStats')->name('client.stats');
    
    Route::get('/colis/history/{id}','ColisController@show')->name('client.history');
    Route::get('/colis/{id}/modifier', 'ColisController@editColisClient')->name('colis.clientedit');
    Route::post('/colis/modifier', 'ColisController@updateColisClient')->name('colis.clientupdate');
    Route::post('/colis/supprimer', 'ColisController@destroy')->name('colis.clientdestroy');
    Route::post('/colis/etat', 'ColisController@changerEtatClient')->name('client.changerEtat');
    Route::get('/colis/livres', 'ColisController@clientColisLivres')->name('client.livres');
    Route::get('/colis/annules', 'ColisController@clientColisAnnulées')->name('client.annules');
    Route::get('/colis/retours', 'ColisController@RetoursClient')->name('client.retours');

    Route::get('/colis/ramassages', 'ColisController@ramassagesClient')->name('client.ramassages');

    Route::get('/ajoutercolis','ColisController@create')->name('colis.create');
    Route::post('/ajoutercolis','ColisController@store')->name('colis.store');

    Route::get('/importercolis','ColisController@importData')->name('colis.import');
    Route::post('/importercolis','ColisController@storeData')->name('colis.storeData');
    Route::get('/colis/{id}/invoice','ColisController@invoiceColis')->name('colis.clientInvoice');
    Route::post('/colis/invoices','ColisController@invoicesColis')->name('colis.clientInvoices');
    Route::get('/monprofile', function () {
        return Inertia::render('client/dashboard/profile', [
        ]);
    });
    Route::post('/monprofile', 'ClientController@updateInfoClient')->name('client.update');
    

});

Route::group(['middleware'=>['auth:admin'],'prefix'=>'administration'], function(){
   
    Route::get('/statistiques','AdminController@StatistiquesAdmin');
    Route::get('/history/{id}','ColisController@show')->name('admin.history');
    Route::get('/mescolis/centre', 'ColisController@lesColisCentre')->name('colis.centre');
    Route::get('/clients','AdminController@MesClients')->name('admin.clients');
    Route::get('/clients/{id}/details','ClientController@AclientDetails')->name('admin.clientdetails');
    Route::get('/livreurs/{id}/details','LivreurController@AlivreurDetails')->name('admin.livreurdetails');
    Route::post('/livreurs/details/updateLiv','ColisController@ChangerEtatLivB')->name('admin.changerEtatLiv');
    Route::post('/livreurs/details/updateAnnu','ColisController@ChangerEtatAnnulesB')->name('admin.changerEtatAnnu');
    
    Route::post('/clients/details','ColisController@ChangerEtatPaiementClientAnn')->name('admin.changerEtatRetour');
    Route::post('/clients/details/1', 'ColisController@ChangerEtatPaiementClient')->name('admin.paiementsetatclient');
    
    Route::post('/clients/inserer','ClientController@createClient')->name('admin.nclient');
    Route::post('/clients/update','ClientController@updateInfo')->name('admin.uclient');
    Route::post('/clients/delete','ClientController@deleteClient')->name('admin.rclient');

    
    Route::get('/mescolis/retours/horswilaya','ColisController@AdminWilayaColisAretourner')->name('admin.aretourner');
    Route::post('/mescolis/retours/horswilaya','ColisController@ChangerEtatAdminRetour')->name('admin.changerEtataretourner');
    Route::get('/mescolis/retours','ColisController@AgentCentreColisAretourner')->name('admin.aretournercentre');
    Route::get('/bureau/mescolis/retours','ColisController@AgentBureauColisAretourner')->name('admin.aretournerbureau');
    Route::post('/bureau/mescolis/retours','ColisController@ChangerEtatRetourBureau')->name('admin.changerEtatRetourBureau');
    Route::get('/mescolis/retournes','ColisController@MesColisRetournesAdminWilaya')->name('admin.mesretournes');
    
    Route::get('/bureau/mescolis/retournes','ColisController@AdminWilayaColisAretourner')->name('admin.mesretournes');
    
    Route::get('/mescolis', 'ColisController@indexAdmin')->name('admin.index');
    Route::get('/livreurs', 'LivreurController@indexAdmin')->name('admin.livreurs');
    Route::get('/admins-wilaya', 'AdminController@index')->name('admin.adminwilayas');
    Route::get('/agents-bureaux', 'AdminController@indexBureaux')->name('admin.agentsBureaux');
    Route::get('/agents-centres', 'AdminController@indexCentres')->name('admin.agentsCentre');
    Route::get('/centres', 'CentreController@index')->name('admin.centres');
    Route::get('/ramassages', 'ColisController@ramassages')->name('admin.ramassages');
    Route::get('/paiements/livreurs', 'ColisController@MesPaiementsBureauLivreur')->name('admin.paiements');
    Route::get('/paiements/clients', 'ColisController@MesPaiementsBureauClient')->name('admin.paiementsclient');
    Route::post('/paiements/livreurs', 'ColisController@ChangerEtatPaiement')->name('admin.paiementsetat');
    
    Route::post('/admins-wilaya/inserer', 'AdminController@create')->name('admin.nadmin');
    Route::post('/agents-bureaux/inserer', 'AdminController@createAgentBureau')->name('admin.nagentB');
    Route::post('/agents-centres/inserer', 'AdminController@createAgentCentre')->name('admin.nagentC');
    Route::post('/centres/inserer', 'CentreController@create')->name('admin.ncentre');
    Route::post('/livreurs/inserer', 'LivreurController@create')->name('admin.nlivreur');
    
    Route::post('/livreurs/update', 'LivreurController@update')->name('admin.ulivreur');
    Route::post('/admins-wilaya/update', 'AdminController@update')->name('admin.uadmin');
    Route::post('/agents-bureaux/update', 'AdminController@update')->name('admin.uagentB');
    Route::post('/centres/update', 'CentreController@update')->name('admin.ucentre');
    Route::post('/agent-centre/update', 'AdminController@update')->name('admin.uagentC');
    
    Route::post('/livreurs/delete', 'LivreurController@destroy')->name('admin.rlivreur');
    Route::post('/admins-wilaya/delete', 'AdminController@destroy')->name('admin.radmin');
    Route::post('/agents-bureaux/delete', 'AdminController@destroy')->name('admin.ragentB');
    Route::post('/agents-centres/delete', 'AdminController@destroy')->name('admin.ragentC');
    Route::post('/centres/delete', 'CentreController@destroy')->name('admin.rcentre');
    
    
    Route::post('/mescolis/etat', 'ColisController@changerEtatAdmin')->name('admin.changerEtat');
    Route::post('/mescolis/livreur', 'ColisController@attribuerLivreur')->name('admin.attribuerLivreur');
    Route::post('/mescolis/livreur/retour', 'ColisController@attribuerLivreurRetour')->name('admin.attribuerLivreurRetour');
    
    Route::post('/mescolis/livreur/ramassage', 'ColisController@attribuerLivreurRamassage')->name('admin.attribuerLivreurRamassage');
    
    Route::get('/fraislivraison','FraisLivraisonController@index')->name('admin.livraison');
    Route::post('/fraisLivraison/ajouter', 'FraisLivraisonController@create')->name('fraisLivraison.ajouter');
    Route::post('/fraisLivraison/edit', 'FraisLivraisonController@update')->name('fraisLivraison.edit');
    Route::post('/fraisLivraison/remove', 'FraisLivraisonController@destroy')->name('fraisLivraison.destroy');
    Route::get('/mescolis/livres','ColisController@indexLivres')->name('admin.livres');
    Route::get('/mescolis/annules','ColisController@indexAnnules')->name('admin.annules');  

    Route::get('/profile', function () {
        return Inertia::render('admin/dashboard/profile', [
        ]);
    });
    Route::post('/profile', 'AdminController@updateInfo')->name('admin.update');
    

});

Route::get('/communes/{id}', 'WilayaController@communes')->name('wilaya.communes');
Route::get('/communes/nom/{nom}', 'WilayaController@communesNom')->name('wilaya.communesNom');



// END CLIENT ROUTES 
Route::group(['middleware'=>['auth:livreur']], function(){
    
    Route::get('/mescolis', 'ColisController@indexLivreur')->name('livreur.index');
    Route::post('/mescolis/etat', 'ColisController@changerEtatLivreur')->name('livreur.changerEtat');
    Route::get('/mesramassages', 'LivreurController@ramassages')->name('livreur.ramassages');
    Route::post('/mesramassages/etat', 'LivreurController@ChangerEtatRamassage')->name('livreur.changerEtatR');
    Route::get('/mescolis/livres', 'ColisController@LivreurLivres')->name('livreur.livres');
    Route::get('/mescolis/annules', 'ColisController@LivreurAnnules')->name('livreur.annules');

    Route::get('/profile', function () {
        return Inertia::render('livreur/dashboard/profile', [
        ]);
    });
    Route::post('/profile', 'LivreurController@updateInfo')->name('livreur.update');
    

    
});












