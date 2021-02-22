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
            $table->unsignedInteger('id_liv_ext')->nullable();
            $table->double('CA_totale')->nullable();
            $table->double('benifice_totale')->nullable();
            $table->double('CA_today')->nullable();
            $table->double('benifice_today')->nullable();
            $table->double('CA_mensuel')->nullable();
            $table->double('benifice_mensuel')->nullable();
            $table->double('benifice_mois_1')->nullable();
            $table->double('benifice_mois_2')->nullable();
            $table->double('benifice_mois_3')->nullable();
            $table->double('benifice_mois_4')->nullable();
            $table->double('benifice_mois_5')->nullable();
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
