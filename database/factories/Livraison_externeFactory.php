<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Livraison_externe;
use Faker\Generator as Faker;

$factory->define(Livraison_externe::class, function (Faker $faker) {
    return [
        'id_client' => $faker->numberBetween(0, 30),
        'id_colis' => $faker->numberBetween(0, 30),
        'id_livreur' => $faker->numberBetween(0, 30),
        'nomclient' => $faker->name,
        'telephone' => $faker->phoneNumber,
        'wilaya' => $faker->numberBetween(0, 30),
        'commune' => $faker->numberBetween(0, 30),
        'codePostal' => $faker->postcode,
        'adresse' => $faker->address,
        'prix' => $faker->randomNumber(3),
        'ditance_parcourous' => $faker->randomNumber(2)
    ];
});
