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
            $table->string('Nom', 255);
            $table->string('email')->unique();
            $table->string('prenom', 255);
            $table->string('phone_number')->unique();
            $table->string('id_permis');
            $table->date('expire_date');
            $table->boolean('etat');
            $table->string('matricule_vehicule');
            $table->string('modele_vehicule');
            $table->string('couleur_vehicule');
            $table->float('note');
            $table->smallInteger('points');
            $table->string('code_parrainage');
            $table->string('password');
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
