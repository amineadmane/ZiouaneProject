<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Colis_externe;
use Faker\Generator as Faker;

$factory->define(Colis_externe::class, function (Faker $faker) {
    return [
        'ref' => $faker->ean8,
        'valeur' => $faker->randomNumber(5),
        'poids' => $faker->randomNumber(2),
        'etat' => $faker->randomElement(["annule", "livre"])
    ];
});
