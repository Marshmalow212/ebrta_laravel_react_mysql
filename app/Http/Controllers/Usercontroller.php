<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserReg;
use Illuminate\Support\Facades\Validator;

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
        // $data = UserReg::where('email',$request->get('email'))->where('password',$request->get('password'))->first();
        $data = new UserReg([
            'first_name'=>'Erfan',
            'last_name'=>'Taher',
            'phone'=>'011111',

            'email'=>$request->get('email')
        ]);

        // return response()->json(['message'=>'data retrieved','data'=>$data]);

        if(!is_null($data)){
            return response()->json(['message'=>'Login Successful!','status'=>'green','data'=>$data]);
        }
        else{
            return response()->json(['message'=>'Something Wrong! Please Try Again.','status'=>'red']);
        }
    }

    public function detail(){

        $userData = UserReg::all();


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

        $data = new UserReg([
            "first_name"=> $request->get('first_name'),
            "last_name"=> $request->get('last_name'),
            "niid" => $request->get('niid'),
            "phone" => $request->get('phone'),
            "email" => $request->get('email'),
            "password"=> $request->get('password')
    
        ]);
        $data->save();

        return response()->json(['message'=>'Registration Successful','data'=>$data]);
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

    // 
    public function upfile(Request $request){

    //    $name = $request->name;
       $file = $request->file('fileraw');

        if(is_null($file)){
        return response()->json(['message'=>'file is null']);
        }


        return response()->json(['message'=>'file uploaded','file'=>$image]);

    }
}
