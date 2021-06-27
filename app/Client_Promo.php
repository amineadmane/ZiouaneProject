<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\Pivot;

class Client_Promo extends Model
{
    protected $table_name = "client__promos";
    protected $fillable = [
        'client_id', 'promotion_id'
    ];
}
