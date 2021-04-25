<?php

namespace App\Http\Controllers;

use App\Client;
use App\Mail\SendPasswordMail;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Faker\Generator as Faker;
use Illuminate\Validation\ValidationException;


class MailController extends Controller
{
    public function SendMail(Request $request, Faker $faker)

    {
        $existe = DB::select(DB::raw('SELECT * from clients where email = ?'), [$request['email']]);
        if ($existe == null) {
            return 'Email incorrect';
        } else {
            $client =  DB::select(DB::raw('SELECT * from emails where email = ?'), [$request['email']]);
            if ($client == null) {
                $code =  $faker->numberBetween(10000000, 99999999);
                DB::insert(
                    'INSERT into emails (email, code,created_at,updated_at) values (?, ?, ? , ?)',
                    [$request['email'], $code, Carbon::now(), Carbon::now()]
                );
                $details = [
                    'title' => '[ZIOUANE] Rénitialisation de mot de passe',
                    'body' => strval($code)
                ];
                Mail::to($request['email'])->send(new SendPasswordMail($details));
                return "Opetation reussite";
            } else {
                $code =  $faker->numberBetween(10000000, 99999999);
                DB::update(
                    'update emails set code = ? , updated_at = ? where email = ? ',
                    [$code, Carbon::now(), $request['email']]
                );
                $details = [
                    'title' => '[ZIOUANE] Rénitialisation de mot de passe',
                    'body' => strval($code)
                ];
                Mail::to($request['email'])->send(new SendPasswordMail($details));
                return "Opetation reussite";
            }
        }
    }

    public function ResetPassword(Request $request)
    {
        $email = DB::select(DB::raw('SELECT * from emails where email = ?'), [
            $request['email']
        ]);
        if ($email[0]->code == $request['code']) {
            $user = Client::where('email', $request['email'])->first();
            return $user->createToken($request->device_name)->plainTextToken;
        } else {
            return "code invalide";
        }
    }
}
