<?php

namespace Database\Factories;

use App\Colis_externe;
use Faker\Generator as Faker;


$factory->define(Colis_externe::class, function (Faker $faker) {
    return [
        'ref' => $this->faker->ean8,
        'valeur' => $this->faker->randomNumber(5),
        'poids' => $this->faker->randomNumber(2),
        'etat' => $this->faker->randomElement(["annule", "livre"]),
        "hauteur" => $this->faker->randomNumber(3),
        "profondeur" => $this->faker->randomNumber(3),
        "largeur" => $this->faker->randomNumber(3),
    ];
});
