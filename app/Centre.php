<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Centre extends Model
{
    public function wilayas(){
        return $this->hasMany('App\Wilaya','centre','id_centre');
    }
}
