<?php

use App\LivreurExt;
use Illuminate\Database\Seeder;

class LivreurExtTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        LivreurExt::factory()->count(30)->create();
    }
}
