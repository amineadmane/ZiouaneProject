<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateColisExterne extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('colis_externe', function (Blueprint $table) {
            $table->bigIncrements('id_colis_externe');
            $table->string('ref');
            $table->float('valeur');
            $table->float('poids');
            $table->boolean('etat');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('colis_externe');
    }
}
