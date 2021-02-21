<?php

use App\Colis_externe;
use Illuminate\Database\Seeder;

class Colis_externeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Colis_externe::class, 30)->create();
    }
}
