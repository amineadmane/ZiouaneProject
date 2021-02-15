<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEvaluationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('evaluations', function (Blueprint $table) {
            $table->id('id_evaluation');
            $table->unsignedInteger('id_client');
            $table->unsignedInteger('id_liv_ext');
            $table->float('Note');
            $table->text('Commentaire');
            $table->timestamps();
            $table->foreign('id_client')->references('id_client')->on('clients');
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
        Schema::dropIfExists('evaluations');
    }
}
