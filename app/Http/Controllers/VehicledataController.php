<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\vehicledata;
use App\Models\Userrequest;

class VehicledataController extends Controller
{
    //
    public function store(Request $request)
    {
        //

        $data = new vehicledata($request->all());
        $data->save();
        $licid = $data->id;
        $reqinfo = Userrequest::create([
            'reqinfo_id'=>$licid
        ]);
        $reqinfo->save();

        return response()->json(['message'=>'Vehicle Registration Added','data'=>$data,'reqinfo'=>$reqinfo]);
    }

    
    
}

// [
//     "first_name"=> $request->get('first_name'),
//     "last_name"=> $request->get('last_name'),
//     "niid" => $request->get('niid'),
//     "phone" => $request->get('phone'),
//     "email" => $request->get('email'),
//     "password"=> $request->get('password')

// ]
