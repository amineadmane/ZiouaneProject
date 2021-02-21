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
            $table->double('benifice_totale');
            $table->double('CA_today');
            $table->double('benifice_today');
            $table->double('CA_mensuel');
            $table->double('benifice_mensuel');
            $table->double('benifice_mois_1');
            $table->double('benifice_mois_2');
            $table->double('benifice_mois_3');
            $table->double('benifice_mois_4');
            $table->double('benifice_mois_5');
            $table->timestamps();
            $table->foreign('id_liv_ext')->references('id_liv_ext')->on('livreur_exts')->onDelete('cascade');
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
