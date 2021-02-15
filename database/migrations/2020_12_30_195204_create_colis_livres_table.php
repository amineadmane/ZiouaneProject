<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateColisLivresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('colis_livres', function (Blueprint $table) {
            $table->bigIncrements('id_colisLivre');
            $table->unsignedbigInteger('client');
            $table->string('ref');
            $table->string('etat1')->default('en préparation');
            $table->string('etat2')->nullable();
            $table->string('codecolis');
            $table->string('nomclient');
            $table->string('telephone');
            $table->unsignedbigInteger('wilaya');
            $table->unsignedbigInteger('commune');
            $table->string('codePostal');
            $table->string('adresse');
            $table->integer('prix');
            $table->string('produits');
            $table->string('remarque')->nullable();
            
            $table->integer('livraison')->default(0);
            $table->integer('fraisLivraison')->default(0);
            
            $table->foreign('client')->references('id_client')
            ->on('clients')->onDelete('cascade');
            
            $table->unsignedbigInteger('livreur')->nullable();
            
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
        Schema::dropIfExists('colis_livres');
    }
}
