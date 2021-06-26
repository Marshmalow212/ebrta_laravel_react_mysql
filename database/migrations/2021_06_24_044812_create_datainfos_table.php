<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDatainfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('datainfos', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('user_reg_id');
            $table->string('regno');
            $table->string('licno');
            $table->string('file');
            $table->string('remarks');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('datainfos');
    }
}
