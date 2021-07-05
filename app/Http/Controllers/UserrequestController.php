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

        $reqdata = Userrequest::orderByDesc('status')->get();

        return response()->json(['message'=>'All Requests','data'=>$reqdata]);
    }

    public function update(Request $req,$id){
        $statusdata = $req->get('status');
        $data = Userrequest::find($id);
        $data->status = $req->get('status');
        $data->save();

        return response()->json(['message'=>'Request Updated','data'=>$data]);

    }
}
