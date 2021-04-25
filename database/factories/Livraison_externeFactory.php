<?php

namespace Database\Factories;

use App\Livraison_externe;
use Faker\Generator as Faker;


$factory->define(Livraison_externe::class, function (Faker $faker) {
    return [
        'id_client' => $this->faker->numberBetween(0, 30),
        'id_colis' => $this->faker->numberBetween(0, 30),
        'id_livreur' => $this->faker->numberBetween(0, 30),
        'nomclient' => $this->faker->name,
        'telephone' => $this->faker->phoneNumber,
        'wilaya' => $this->faker->numberBetween(0, 30),
        'commune' => $this->faker->numberBetween(0, 30),
        'codePostal' => $this->faker->postcode,
        'adresse' => $this->faker->address,
        'prix' => $this->faker->randomNumber(3),
        'ditance_parcourous' => $this->faker->randomNumber(2),
        'note' => $this->faker->numberBetween(0, 5),
        'commentaire' => $this->faker->paragraph(6, true),
    ];
});
