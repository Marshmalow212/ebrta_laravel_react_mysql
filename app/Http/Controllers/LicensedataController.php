<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\licensedata;
use App\Models\Userrequest;

class LicensedataController extends Controller
{
    //
    public function store(Request $request)
    {
        //

        $data = new licensedata($request->all());
        $data->save();
        $licid = $data->id;
        $reqinfo = Userrequest::create([
            'reqinfo_id'=>$licid
        ]);
        $reqinfo->save();

        return response()->json(['message'=>'Driving License Registration Added','data'=>$data,'reqinfo'=>$reqinfo]);
    }
}
