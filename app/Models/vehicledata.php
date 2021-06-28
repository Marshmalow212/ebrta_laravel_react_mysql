<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class vehicledata extends Model
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
        'rdate'

    ];
}
