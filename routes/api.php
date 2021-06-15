<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use App\Http\Controllers\Usercontroller;
use App\Http\Controllers\Filecontroller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("userregistration","App\Http\Controllers\Usercontroller@store");
Route::post("userlogin","App\Http\Controllers\Usercontroller@index");
Route::get("userdetail","App\Http\Controllers\Usercontroller@detail");

Route::post("fileupload",[Filecontroller::class,'upfile']);
Route::get("fileview",[Filecontroller::class,'viewfile']);
Route::put('testout/{name}',[Filecontroller::class,'testupdate']); 
