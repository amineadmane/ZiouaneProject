<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLivreurExtsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('livreur_exts', function (Blueprint $table) {
            $table->bigIncrements('id_liv_ext');
            $table->string('nom', 255)->nullable();
            $table->string('e_mail')->unique()->nullable();
            $table->string('prenom', 255)->nullable();
            $table->string('phone_number')->unique()->nullable();
            $table->string('id_permis')->nullable();
            $table->date('expire_date')->nullable();
            $table->string('etat')->default('Bloqué');
            $table->string('matricule_vehicule')->nullable();
            $table->string('modele_vehicule')->nullable();
            $table->string('couleur_vehicule')->nullable();
            $table->float('note')->nullable();
            $table->smallInteger('points')->nullable();
            $table->string('code_parrainage')->nullable();
            $table->string('password')->nullable();
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
        Schema::dropIfExists('livreur_exts');
    }
}
