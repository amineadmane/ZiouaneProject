<?php

use App\Metric;
use Illuminate\Database\Seeder;

class MetricTableSeedered extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Metric::class, 30)->create();
    }
}
