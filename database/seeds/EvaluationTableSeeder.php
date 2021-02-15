<?php

use App\Evaluation;
use Illuminate\Database\Seeder;

class EvaluationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Evaluation::class, 30)->create();
    }
}
