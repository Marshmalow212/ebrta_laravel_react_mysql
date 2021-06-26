<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVehicledatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vehicledatas', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('user_reg_id');
            $table->string('brand')->nullable();
            $table->string('model')->nullable();
            $table->string('engine')->nullable();
            $table->string('chasis')->nullable();
            $table->year('year')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vehicledatas');
    }
}
