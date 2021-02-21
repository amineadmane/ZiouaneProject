<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Metric;
use Faker\Generator as Faker;

$factory->define(Metric::class, function (Faker $faker) {
    return [
        'id_liv_ext' => $faker->randomDigit,
        'CA_totale' => $faker->randomDigit,
        'benifice_totale' => $faker->randomDigit,
        'CA_today' => $faker->randomDigit,
        'benifice_today' => $faker->randomDigit,
        'CA_mensuel' => $faker->randomDigit,
        'benifice_mensuel' => $faker->randomDigit,
        'benifice_mois_1' => $faker->randomDigit,
        'benifice_mois_2' => $faker->randomDigit,
        'benifice_mois_3' => $faker->randomDigit,
        'benifice_mois_4' => $faker->randomDigit,
        'benifice_mois_5' => $faker->randomDigit,
    ];
});
