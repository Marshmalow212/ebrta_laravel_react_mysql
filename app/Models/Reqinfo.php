<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reqinfo extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'user_reg_id',
        'brand',
        'model',
        'engine',
        'chasis',
        'year',
        'name',
        'dob',
        'address',
        'vtype',
        'ltype'


    ];
}
