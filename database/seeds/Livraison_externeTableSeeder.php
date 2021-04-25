<?php

use App\Livraison_externe;
use Illuminate\Database\Seeder;

class Livraison_externeTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Livraison_externe::class, 30)->create();
    }
}
