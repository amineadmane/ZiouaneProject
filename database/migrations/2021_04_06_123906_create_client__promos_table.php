<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientPromosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('client__promos', function (Blueprint $table) {
            $table->bigInteger("client_id",);
            $table->bigInteger("promotion_id");

            $table->primary(['client_id', "promotion_id"]);

            $table->foreign('client_id')->references('id_client')
                ->on('clients')->onDelete('cascade');

            $table->foreign('promotion_id')->references('id_promotion')
                ->on('promotions')->onDelete('cascade');

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
        Schema::dropIfExists('client__promos');
    }
}
