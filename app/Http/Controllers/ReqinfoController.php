<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reqinfo;
use App\Models\vehicledata;
use App\Models\licensedata;
use App\Models\Userrequest;

class ReqinfoController extends Controller
{
    //
    public function store(Request $request)
    {
        //
        // echo ($request->all());
        $data = Reqinfo::create($request->all());
        $data->save();
        $dataid = $data->id;

        $req = new Userrequest([
            'reqinfo_id'=>$dataid
        ]);
        $req->save();
            

        return response()->json(['message'=>'Request Successful!','data'=>$data,'req'=>$req]);
    }

    public function chek(){
        $data = Userrequest::all();
        // echo $data;
        // foreach ($data as $i) {
        //     echo $i->reqinfo_id.'\n';
        // }

        $datainfo = Reqinfo::all();

        return response()->json(['message'=>'Data Retrieved','data'=>$data,'datainfo'=>$datainfo]);
    }

    public function respo($id){

        $res = Reqinfo::find($id);

        return response()->json(['message'=>'Data Retrieved','data'=>$res]);
    }
}
