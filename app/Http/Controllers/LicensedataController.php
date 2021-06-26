<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\licensedata;

class LicensedataController extends Controller
{
    //
    public function store(Request $request)
    {
        //

        $data = new licensedata($request->all());
        $data->save();

        return response()->json(['message'=>'Driving License Registration Added','data'=>$data]);
    }
}
