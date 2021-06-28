<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class licensedata extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'user_reg_id',
        'name',
        'dob',
        'address',
        'vtype',
        'ltype',
        'rdate'

    ];
}
