<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLivraisonExternesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('livraison_externes', function (Blueprint $table) {
            $table->id('id_livraison_externe');
            $table->unsignedbigInteger('id_client')->nullable();
            $table->unsignedbigInteger('id_colis')->nullable();
            $table->unsignedbigInteger('id_livreur')->nullable();
            $table->string('nomclient')->nullable();
            $table->string('telephone')->nullable();
            $table->unsignedbigInteger('wilaya')->nullable();
            $table->unsignedbigInteger('commune')->nullable();
            $table->string('codePostal')->nullable();
            $table->string('adresse')->nullable();
            $table->integer('prix')->nullable();
            $table->float('ditance_parcourous')->nullable();
            $table->float('note')->nullable();
            $table->mediumText('commentaire')->nullable();
            $table->foreign('id_client')->references('id_client')
                ->on('clients')->onDelete('cascade');

            $table->foreign('id_colis')->references('id_colis_externe')
                ->on('colis_externe')->onDelete('cascade');

            $table->foreign('id_livreur')->references('id_liv_ext')
                ->on('livreur_exts')->onDelete('cascade');
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
        Schema::dropIfExists('livraison_externes');
    }
}
