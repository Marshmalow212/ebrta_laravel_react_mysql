<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;
use App\Models\datainfo;

class RecordController extends Controller
{
    //
    public function index($id){

        $datarecord = Record::where('user_reg_id',$id)->get();
        $datainfo = datainfo::where('user_reg_id',$id)->get();

        return response()->json(['message'=>'Data found','datar'=>$datarecord,'datai'=>$datainfo]);

    }
}
