<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserReg;
use App\Models\Userrequest;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class Usercontroller extends Controller
{

      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        // echo $request->get('email');
        $data = UserReg::where('email',$request->get('email'))->where('password',$request->get('password'))->first();
        // $data = new UserReg([
        //     'first_name'=>'Erfan',
        //     'last_name'=>'Taher',
        //     'phone'=>'011111',

        //     'email'=>$request->get('email')
        // ]);

        // return response()->json(['message'=>'data retrieved','data'=>$data]);

        if(!is_null($data)){
            return response()->json(['message'=>'Login Successful!','status'=>'green','data'=>$data]);
        }
        else{
            return response()->json(['message'=>'Something Wrong! Please Try Again.','status'=>'red']);
        }
    }

    public function getu($id){

        $userData = UserReg::find($id);


        return response()->json(['message'=>'User found','data'=>$userData]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        // $data = new UserReg([
        //     "first_name"=> $request->get('first_name'),
        //     "last_name"=> $request->get('last_name'),
        //     "niid" => $request->get('niid'),
        //     "phone" => $request->get('phone'),
        //     "email" => $request->get('email'),
        //     "password"=> $request->get('password')
    
        // ]);
        $filepath = '';
        $file = $request->file('propic');
        if(!is_null($file)){
            $filename = $file->getClientOriginalName();
            $fileexten = $file->getClientOriginalExtension();
            // $filepath = $file->path();

            $filerename = ($request->get('first_name')).'_'.($request->get('niid').'.jpg');
            $filepath = '/storage/img/profile/';
            $filesave = $file->storeAs('/public/img/profile/',$filerename);
            $filepath = $filepath . $filerename;

        }else{
            $filepath='no file found!';
        }

       

        $dataob = $request->except(['propic','con_pass']);
        $data = new UserReg($dataob);
        $data->propic = $filepath;
        $data->save();

        return response()->json(['message'=>'Registration Successful','data'=>$data,'file'=>$filepath]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $data = UserReg::find($id);
        $data->address = $request->get('address');
        $data->phone = $request->get('phone');
        $data->save();

        return response()->json(['message'=>'Data Updated!','data'=>$data]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


}
