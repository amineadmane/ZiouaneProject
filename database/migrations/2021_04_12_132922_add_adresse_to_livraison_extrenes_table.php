<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddAdresseToLivraisonExtrenesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('livraison_externes', function (Blueprint $table) {
            $table->string('adresse_drop_off');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('livraison_externes', function (Blueprint $table) {
            $table->dropColumn('adresse_drop_off');
        });
    }
}
