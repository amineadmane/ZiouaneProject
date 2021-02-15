<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFraisLivraisonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('frais_livraisons', function (Blueprint $table) {
            $table->bigIncrements('id_frais');
            $table->unsignedbigInteger('from');
            $table->unsignedbigInteger('to');
            
            $table->foreign('from')->references('id')
            ->on('wilayas')->onDelete('cascade');

            $table->foreign('to')->references('id')
            ->on('wilayas')->onDelete('cascade');

            $table->integer('prix');

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
        Schema::dropIfExists('frais_livraisons');
    }
}
