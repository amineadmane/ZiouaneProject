<?php

namespace Database\Factories;

use App\Metric;
use Illuminate\Database\Eloquent\Factories\Factory;

class MetricFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Metric::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'id_liv_ext' => $this->faker->randomDigit,
            'CA_totale' => $this->faker->randomDigit,
            'benifice_totale' => $this->faker->randomDigit,
            'CA_today' => $this->faker->randomDigit,
            'benifice_today' => $this->faker->randomDigit,
            'CA_mensuel' => $this->faker->randomDigit,
            'benifice_mensuel' => $this->faker->randomDigit,
            'benifice_mois_1' => $this->faker->randomDigit,
            'benifice_mois_2' => $this->faker->randomDigit,
            'benifice_mois_3' => $this->faker->randomDigit,
            'benifice_mois_4' => $this->faker->randomDigit,
            'benifice_mois_5' => $this->faker->randomDigit,
        ];
    }
}
