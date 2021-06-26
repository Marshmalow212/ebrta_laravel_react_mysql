<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Userrequest;
use App\Models\Reqinfo;

class UserrequestController extends Controller
{
    //
    public function index(Request $request)
    {
        //

        $reqdata = Userrequest::all();

        return response()->json(['message'=>'All Requests','data'=>$reqdata]);
    }
}
