<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use App\Http\Controllers\Usercontroller;
use App\Http\Controllers\Filecontroller;
use App\Http\Controllers\LicensedataController;
use App\Http\Controllers\VehicledataController;
use App\Http\Controllers\RecordController;
use App\Http\Controllers\DatainfoController;
use App\Http\Controllers\ReqinfoController;
use App\Http\Controllers\UserrequestController;


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
// Route::get("userdetail","App\Http\Controllers\Usercontroller@detail");
Route::get('userdetail/{id}',[Usercontroller::class,'getu']);
Route::post('userupdate/{id}',[Usercontroller::class,'update']);

Route::post("fileupload",[Filecontroller::class,'upfile']);
Route::get("fileview",[Filecontroller::class,'viewfile']);
Route::put('testout/{name}',[Filecontroller::class,'testupdate']); 

Route::post('addvehicle',[VehicledataController::class,'store']);

Route::post('addlicense',[LicensedataController::class,'store']);

Route::get('getvehicle/{id}',[VehicledataController::class,'index']);

Route::get('getlicense/{id}',[LicensedataController::class,'index']);

Route::post('addreq',[ReqinfoController::class,'store']);

Route::get('checkreq',[ReqinfoController::class,'chek']);

Route::get('resreq/{id}',[ReqinfoController::class,'respo']);

Route::get('urecord/{id}',[RecordController::class,'index']);

Route::get('getuserreq',[UserrequestController::class,'index']);

Route::post('updatereq/{id}',[UserrequestController::class,'update']);





