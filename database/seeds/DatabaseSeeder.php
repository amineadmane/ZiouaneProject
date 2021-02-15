<?php

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
    }
}
