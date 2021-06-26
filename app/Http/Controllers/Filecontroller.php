<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class Filecontroller extends Controller
{
    //

    public function upfile(Request $request){

        //    $name = $request->name;
        // dd($request->file('files'));
        


            try {
               
           $Files = $request->file('fileraw');
           
    
            if(is_null($Files)){
            return response()->json(['message'=>'file is null']);
            }

            $filep = $Files ->path();
            $filen = $Files->getClientOriginalName();
            $fext = $Files ->getClientOriginalExtension();

            if($fext == 'pdf'){
                $save = $Files->storeAs('public/pdf',$filen);
            }
            else{
                $save = $Files->storeAs('public/img',$filen);
            }
            $fulls ='file uploaded'.'path '.$filen ;
            
            
            return response()->json(['message'=>$fulls,'file'=>$save]);
            } catch (\Throwable $th) {
                throw $th;
            }
    
        }

        public function viewfile(Request $request){

            // $fileloc = $request->get('fileloc');

            if(($myfile = Storage::get('imgs/soldering.jpg'))){
                $file = [
                    "file"=>$myfile
                ];
                return response()->json(['message'=>'file found','file'=>$file]);
            }
            else return response()->json(['message'=>'file not found']);

        }

        public function testupdate(Request $request,$name){
            if($name == 'erfan'){
                return response()->json(['message'=>'This is erfan','arr'=>$request->all()]);
            }
            else{
                return response()->json(['message'=>'no parameters','arr'=>$request->all()]);
            }
        }


       
}
