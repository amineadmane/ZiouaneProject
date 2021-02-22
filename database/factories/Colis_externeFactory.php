<?php

namespace Database\Factories;

use App\Colis_externe;
use Illuminate\Database\Eloquent\Factories\Factory;

class Colis_externeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Colis_externe::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'ref' => $this->faker->ean8,
            'valeur' => $this->faker->randomNumber(5),
            'poids' => $this->faker->randomNumber(2),
            'etat' => $this->faker->randomElement(["annule", "livre"])
        ];
    }
}
