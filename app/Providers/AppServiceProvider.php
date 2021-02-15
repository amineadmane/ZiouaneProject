<?php

namespace App\Providers;
use Inertia\Inertia;
use Auth;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Session;
use Config;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Inertia::share([
            
            'success' => Session::get('success'),
            'errors' => Session::get('errors'),
            'errors' => function () {
                return Session::get('errors')
                    ? Session::get('errors')->getBag('default')->getMessages()
                    : (object) [];
            },

            'Message'=> function(){
                return[
                'success' => Session::get('success'),
                'error' => Session::get('error'),
                ];
            },
            'app' => [
                'name' => Config::get('app.name')
            ],

            
            'auth'=>function(){
                if (Auth::guard('admin')->check()) {
                return [
                    'id' => Auth::guard('admin')->user()->id_admin,
                    'nom' => Auth::guard('admin')->user()->nom,
                    'prenom' => Auth::guard('admin')->user()->prenom,
                    'wilaya' => Auth::guard('admin')->user()->Wilaya,
                    'role' => Auth::guard('admin')->user()->role,
                    'centre'=>Auth::guard('admin')->user()->Centre,
                    'email' => Auth::guard('admin')->user()->email,
                ];
            }
            if (Auth::guard('client')->check()) {
                return [
                    'id' => Auth::guard('client')->user()->id_client,
                    'nom' => Auth::guard('client')->user()->nom,
                    'prenom' => Auth::guard('client')->user()->prenom,
                    'telephone' => Auth::guard('client')->user()->telephone,
                    'wilaya' => Auth::guard('client')->user()->wilaya,
                    'wil' => Auth::guard('client')->user()->Wilaya,
                    'commune' => Auth::guard('client')->user()->commune,
                    'email' => Auth::guard('client')->user()->email,
                    'adresse' => Auth::guard('client')->user()->adresse,
                    'type'=>Auth::guard('client')->user()->type,
                    'remise'=>Auth::guard('client')->user()->remise,
                    'TypeRemise'=>Auth::guard('client')->user()->TypeRemise
                ];
            }

        if (Auth::guard('livreur')->check()) {
            return [
                'id' => Auth::guard('livreur')->user()->id_livreur,
                'nom' => Auth::guard('livreur')->user()->nom,
                'prenom' => Auth::guard('livreur')->user()->prenom,
                'telephone' => Auth::guard('livreur')->user()->telephone,
                'wilaya' => Auth::guard('livreur')->user()->wilaya,
                'communes' => Auth::guard('livreur')->user()->communes,
                'email' => Auth::guard('livreur')->user()->email,
                'centre' => Auth::guard('livreur')->user()->centre,
            ];
        }

        }
        ]);

    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
