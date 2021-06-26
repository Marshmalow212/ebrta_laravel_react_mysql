<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReqinfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reqinfos', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('user_reg_id');
            $table->string('brand')->nullable();
            $table->string('model')->nullable();
            $table->string('engine')->nullable();
            $table->string('chasis')->nullable();
            $table->year('year')->nullable();
            $table->string('name')->nullable();
            $table->date('dob')->nullable();
            $table->string('address')->nullable();
            $table->string('vtype')->nullable();
            $table->string('ltype')->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('reqinfos');
    }
}
