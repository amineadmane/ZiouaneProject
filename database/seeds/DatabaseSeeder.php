<?php

use App\Client;
use App\Promotion;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(LivreurExtTableSeeder::class);
        $this->call(EvaluationTableSeeder::class);
        $this->call(MetricTableSeedered::class);
        $this->call(Colis_externeTableSeeder::class);
        $this->call(Livraison_externeTableSeeder::class);
        $this->call(ClientTableSeeder::class);
        $this->call(PromotionTableSeeder::class);
        $this->call(ClientPromoSeeder::class);
    }
}
