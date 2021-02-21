<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\LivreurExt;
use Faker\Generator as Faker;

$factory->define(LivreurExt::class, function (Faker $faker) {
    return [
        'Nom' => $faker->name,
        'e_mail' => $faker->unique()->safeEmail,
        'prenom' => $faker->name,
        'phone_number' => $faker->phoneNumber,
        'id_permis' => $faker->unique()->randomNumber(),
        'expire_date' => $faker->date,
        'etat' => "bloque",
        'matricule_vehicule' => $faker->buildingNumber,
        'modele_Vehicule' => $faker->word(),
        'couleur_vehicule' => $faker->colorName(),
        'note' => 2.6,
        'points' => 105,
        'code_parrainage' => $faker->ean8(),
        'password' => $faker->md5
    ];
});
