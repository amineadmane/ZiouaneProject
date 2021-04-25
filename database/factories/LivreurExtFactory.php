<?php

namespace Database\Factories;

use App\LivreurExt;
use Faker\Generator as Faker;


$factory->define(LivreurExt::class, function (Faker $faker) {
    return [
        'Nom' => $this->faker->name,
        'e_mail' => $this->faker->unique()->safeEmail,
        'prenom' => $this->faker->name,
        'phone_number' => $this->faker->phoneNumber,
        'id_permis' => $this->faker->unique()->randomNumber(),
        'expire_date' => $this->faker->date,
        'etat' => "bloque",
        'matricule_vehicule' => $this->faker->buildingNumber,
        'modele_Vehicule' => $this->faker->word(),
        'couleur_vehicule' => $this->faker->colorName(),
        'note' => 2.6,
        'points' => 105,
        'code_parrainage' => $this->faker->ean8(),
        'password' => $this->faker->md5
    ];
});
