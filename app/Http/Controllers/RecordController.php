<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Record;
use App\Models\datainfo;
use App\Models\licensedata;
use App\Models\Userrequest;
use Illuminate\Support\Facades\Storage;

class RecordController extends Controller
{
    //
    public function index($id){
        $cdate = date('Y-m-d'); 
        $datarecord = Record::where('user_reg_id',$id)->get();
        $datainfo = datainfo::where('user_reg_id',$id)->get();
        
        $licdata = licensedata::where('user_reg_id',$id)->orderByDesc('rdate')->first();
        $licinfo = null;
        if($licdata){
            $litype = $licdata->ltype;
        $vitype = $licdata->vtype;
        $lictype = $vitype.'_'.$litype;
        $regdate = $licdata->rdate;
        $licinfo = Record::where('user_reg_id',$id)->where('name',$lictype)->where('issued',$regdate)->where('expires','>',$cdate)->orderByDesc('issued')->first();
        }
        

        return response()->json(['message'=>'Data found','datar'=>$datarecord,'datai'=>$datainfo,'lic'=>$licinfo,'date'=>$cdate]);

    }

    public function update(Request $req){
        $Files = $req->file('file');
        $edate = date('Y-m-d',strtotime('+1 year'.$req->rdate));
        $name = '';
        
        $filen='';
        $filee='';
        $fileloc='';
        if(!is_null($Files)){
           $filen = ($req->get('id')).'.pdf';
           $files = $Files ->storeAs('public/pdf/doc/',$filen);
           $fileloc= '/storage/pdf/doc/'.$filen;
        }
        if(($req->id)<200001){
            $name = ($req->brand).'_'.($req->model).'_'.($req->year);
        }
        else if(($req->id)>=200001){
            $name = ($req->vtype).'_'.($req->ltype);
        }
        $arr = [
            'user_reg_id' => $req->user_reg_id,
            'name'=>$name,
            'issued' => $req->rdate,
            'expires'=> $edate,
            'renewal'=>'Renewal Should be done within 2 weeks of expiration',
            'remarks'=>'Careful about renewal delay fine'
        ];
        $data = new Record($arr);
        $data->save();

        $reqdata = Userrequest::where('reqinfo_id',($req->id))->first();
        $reqdata->status = 'approved';
        $reqdata->save();
        $iarr = [
            'user_reg_id'=>$req->user_reg_id,
            'regtype'=>$name,
            'licno'=>$req->id,
            'file'=>$fileloc,
            'remarks'=> 'Download the license Softcopy'
        ];
        $info = new datainfo($iarr);
        $info->save();
        // $info = $iarr;


        return response()->json(['message'=>'Data Approved and send', 'data'=>$data,'reqdata'=>$reqdata,'info'=>$info]);

    }

    
}
