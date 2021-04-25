<?php

namespace Database\Factories;

use App\Promotion;
use Faker\Generator as Faker;

$factory->define(Promotion::class, function (Faker $faker) {
    return [
        "code" => $this->faker->ean8,
        "debut_validite" => $this->faker->date,
        'fin_validite' => $this->faker->date,
        'valeur' => $this->faker->numberBetween(100, 10000)
    ];
});
