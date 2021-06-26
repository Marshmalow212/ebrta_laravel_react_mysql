<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Illuminate\Http\Request;
use App\Models\Userrequest;
use App\Models\Reqinfo;

class UserrequestController extends Controller
{
    //
    public function index()
    {
        //

        $reqdata = Userrequest::all();

        return response()->json(['message'=>'All Requests','data'=>$reqdata]);
    }

    public function renew($id,$no){

    }
}
