<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\LivreurExt;
use Faker\Generator as Faker;

$factory->define(LivreurExt::class, function (Faker $faker) {
    return [
        'Nom' => $faker->name,
        'E-mail' => $faker->unique()->safeEmail,
        'Prenom' => $faker->name,
        'Phone_number' => $faker->phoneNumber,
        'id_permis' => $faker->unique()->randomNumber(),
        'Expire_date' => $faker->date,
        'Etat' => "bloque",
        'Matricule_vehicule' => $faker->buildingNumber,
        'Modele_Vehicule' => $faker->word(),
        'Couleur_vehicule' => $faker->colorName(),
        'Note' => 2.6,
        'Points' => 105,
        'Code_parrainage' => $faker->ean8(),
        'password' => $faker->md5
    ];
});
