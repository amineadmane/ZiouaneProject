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
            $table->unsignedInteger('id_client');
            $table->unsignedInteger('id_liv_ext');
            $table->float('note')->nullable();
            $table->text('commentaire')->nullable();
            $table->timestamps();
            $table->foreign('id_client')->references('id_client')->on('clients')->onDelete('cascade');
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
        Schema::dropIfExists('evaluations');
    }
}
