<?php

namespace Database\Factories;

use App\Livraison_externe;
use Illuminate\Database\Eloquent\Factories\Factory;

class Livraison_externeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Livraison_externe::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
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
            'ditance_parcourous' => $this->faker->randomNumber(2)
        ];
    }
}
