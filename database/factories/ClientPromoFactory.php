<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Client_Promo;
use Faker\Generator as Faker;

$factory->define(Client_Promo::class, function (Faker $faker) {
    return [
        'client_id' => $faker->unique()->numberBetween(0, 32),
        'promotion_id' => $faker->numberBetween(0, 32),
    ];
});
