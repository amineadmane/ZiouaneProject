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
            $table->string('E_mail')->unique();
            $table->string('Prenom', 255);
            $table->string('Phone_number')->unique();
            $table->string('id_permis');
            $table->date('Expire_date');
            $table->boolean('Etat');
            $table->string('Matricule_vehicule');
            $table->string('Modele_vehicule');
            $table->string('Couleur_vehicule');
            $table->float('Note');
            $table->smallInteger('Points');
            $table->string('Code_parrainage');
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
