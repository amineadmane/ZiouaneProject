<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMetricsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('metrics', function (Blueprint $table) {
            $table->id('id_metric');
            $table->unsignedInteger('id_liv_ext');
            $table->double('CA_totale');
            $table->double('Benifice_totale');
            $table->double('CA_today');
            $table->double('Benifice_today');
            $table->double('CA_mensuel');
            $table->double('Benifice_mensuel');
            $table->double('Benifice_mois_1');
            $table->double('Benifice_mois_2');
            $table->double('Benifice_mois_3');
            $table->double('Benifice_mois_4');
            $table->double('Benifice_mois_5');
            $table->timestamps();
            $table->foreign('id_liv_ext')->references('id_liv_ext')->on('livreur_exts');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('metrics');
    }
}
