<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Colis;
use App\Evaluation;
use App\Http\Controllers\EvaluationController;
use App\Livreur;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('colis', function () {
    return Colis::all();
});

Route::get('livreurs', function () {

    return Livreur::all();
});

Route::apiResource('Evaluation', 'EvaluationController');
