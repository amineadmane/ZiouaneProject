<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Colis;
use App\Evaluation;
use App\Http\Controllers\EvaluationController;
use App\Http\Controllers\LivreurExtController;
use App\Livraison_externe;
use App\Livreur;
use App\LivreurExt;


use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Monolog\Handler\RotatingFileHandler;

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


Route::get('colis', function () {
    return Colis::all();
});



Route::post('/LivreurExt', function (Request $request) {
    $request->validate([
        'e_mail' => 'required|e_mail',
        'password' => 'required',
        'device_name' => 'required',
    ]);

    $user = LivreurExt::where('e_mail', $request->e_mail)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken($request->device_name)->plainTextToken;
});

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::middleware('auth:sanctum')->get('/LivreurExt', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('Evaluation', 'EvaluationController');

    Route::apiResource('Evaluation', 'EvaluationController');

    Route::apiResource('Metric', 'MetricController');

    Route::apiResource('livraison', 'Livraison_externeController');

    Route::middleware('auth:sanctum')->get('/LivreurExt/revoke', function (Request $request) {
        $user = $request->user();
        $user->tokens()->delete();
        return "token deleted";
    });

    Route::apiResource('Evaluation', 'EvaluationController');

    Route::apiResource('livreur', 'LivreurExtController');

    Route::get('livraison/{livreur}/{client}/{colis}', [
        'uses' => 'Livraison_externeController@showlivraison'
    ]);

    Route::get('livraisonaujourdui/{livreur}', [
        'uses' => 'Livraison_externeController@showlivraisonsaujourdhui'
    ]);

    Route::get('dernierelivraison/{livreur}', [
        'uses' => 'Livraison_externeController@showderniereliv'
    ]);

    Route::get('historiqueannuel/{livreur}/{year}', [
        'uses' => 'Livraison_externeController@showhistoriqueannuel'
    ]);
    Route::get('historiquemensuel/{livreur}/{month}', [
        'uses' => 'Livraison_externeController@showlivraisonsmensuels'
    ]);
    Route::get('parrainage/{livreur}', [
        'uses' => 'LivreurExtController@shownotenpoints'
    ]);

    Route::middleware('auth:sanctum')->get('/LivreurExt/revoke', function (Request $request) {
        $user = $request->user();
        $user->tokens()->delete();
        return "token deleted";
    });

    Route::post(
        '/Dispo/{id}',
        [LivreurExtController::class, "changeDispo"]
    );

    Route::post(
        '/Password/{id}',
        [LivreurExtController::class, "changePassword"]
    );

    Route::get('livraisonyears/{livreur}', [
        'uses' => 'Livraison_externeController@showyears'
    ]);

    Route::get('histolivraisonmensuelle/{livreur}/{mois}/{year}', [
        'uses' => 'Livraison_externeController@histolivraisonmensuelle'
    ]);

    Route::get('dernierelivraison/{livreur}', [
        'uses' => 'Livraison_externeController@showderniereliv'
    ]);

    Route::get('historiqueannuel/{livreur}/{year}', [
        'uses' => 'Livraison_externeController@showhistoriqueannuel'
    ]);
    Route::get('historiquemensuel/{livreur}/{month}', [
        'uses' => 'Livraison_externeController@showlivraisonsmensuels'
    ]);
    Route::get('parrainage/{livreur}', [
        'uses' => 'LivreurExtController@showcodenpoints'
    ]);
    Route::get('Evaluationtotal/{livreur}', [
        'uses' => 'LivreurExtController@Evaluationtotale'
    ]);
    Route::get('histoevaluation/{livreur}', [
        'uses' => 'Livraison_externeController@histoevaluation'
    ]);

    Route::post('switchstatus/{livreur}', [
        'uses' => 'LivreurExtController@switchstatus'
    ]);

    Route::post('send', [
        'uses' => 'PushNotificationController@bulksend'
    ]);
    Route::get('Annulerlivraison/{livreur}', [
        'uses' => 'Livraison_externeController@Annuler'
    ]);
});
