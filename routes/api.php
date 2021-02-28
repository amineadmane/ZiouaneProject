<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Colis;
use App\Evaluation;
use App\Http\Controllers\EvaluationController;
use App\Livraison_externe;
use App\Livreur;
use App\LivreurExt;

Route::apiResource('Evaluation', 'EvaluationController');

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/LivreurExt', function (Request $request) {
    return $request->user();
});

Route::get('colis', function () {
    return Colis::all();
});

Route::apiResource('Evaluation', 'EvaluationController');

Route::apiResource('Metric', 'MetricController');

Route::apiResource('livraison', 'Livraison_externeController');

Route::apiResource('livreur', 'LivreurExtController');

Route::get('livraison/{livreur}/{client}/{colis}',[
    'uses'=>'Livraison_externeController@showlivraison'
]);

Route::get('livraisonaujourdui/{livreur}',[
    'uses'=>'Livraison_externeController@showlivraisonsaujourdhui'
]);

Route::get('dernierelivraison/{livreur}',[
    'uses'=>'Livraison_externeController@showderniereliv'
]);

Route::get('historiqueannuel/{livreur}/{year}',[
    'uses'=>'Livraison_externeController@showhistoriqueannuel'
]);
Route::get('historiquemensuel/{livreur}/{month}',[
    'uses'=>'Livraison_externeController@showlivraisonsmensuels'
]);
Route::get('parrainage/{livreur}',[
    'uses'=>'LivreurExtController@shownotenpoints'
]);

Route::middleware('auth:sanctum')->get('/LivreurExt/revoke', function (Request $request) {
    $user = $request->user();
    $user->tokens()->delete();
    return "token deleted";
});
