<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPictureTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('livreur_exts', function (Blueprint $table) {
            $table->binary("photo")->nullable();
            $table->string("type_vehicule")->nullable();
            //
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('livreur_exts', function (Blueprint $table) {
            $table->dropColumn("photo");
            $table->string("type_vehicule");
        });
    }
}
