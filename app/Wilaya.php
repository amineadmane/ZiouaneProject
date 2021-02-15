<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Wilaya extends Model
{
    public function Centre(){
        return $this->hasOne('App\Centre','id_centre','centre');
    }
    
}
