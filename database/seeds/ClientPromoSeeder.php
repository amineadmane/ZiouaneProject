<?php

use App\Client_Promo;
use Illuminate\Database\Seeder;

class ClientPromoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Client_Promo::class, 30)->create();
    }
}
