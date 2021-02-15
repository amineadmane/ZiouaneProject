<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Evaluation;
use Faker\Generator as Faker;

$factory->define(Evaluation::class, function (Faker $faker) {
    return [
        'id_client' => $faker->randomDigit,
        'id_liv_ext' => $faker->randomDigit,
        'Note' => 3.8,
        "Commentaire" => $faker->paragraph(6, true),
    ];
});
