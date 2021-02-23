<?php

namespace Database\Factories;

use App\LivreurExt;
use Illuminate\Database\Eloquent\Factories\Factory;

class LivreurExtFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = LivreurExt::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
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
    }
}
