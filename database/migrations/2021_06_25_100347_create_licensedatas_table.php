<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

class CreateLicensedatasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('licensedatas', function (Blueprint $table) {
            $table->increments('id');
            $table->foreignId('user_reg_id');
            $table->string('name')->nullable();
            $table->date('dob')->nullable();
            $table->string('address')->nullable();
            $table->string('vtype')->nullable();
            $table->string('ltype')->nullable();
            $table->date('rdate')->nullable();
            
        });

        DB::statement("ALTER TABLE licensedatas AUTO_INCREMENT = 200001;");        
    }



    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('licensedatas');
    }
}
