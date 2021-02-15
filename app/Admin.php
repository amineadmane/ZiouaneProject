<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Admin extends Authenticatable
{
    use Notifiable;
    protected $guard = 'admin';
    protected $primaryKey="id_admin";
    
    protected $fillable = [
        'nom', 'email', 'password','prenom','wilaya','created_at'
    ];

    public function Wilaya(){
        return $this->hasOne('App\Wilaya','code','wilaya');
    }

    public function Centre(){
        return $this->hasOne('App\Centre','id_centre','wilaya');
    }
}
