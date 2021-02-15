<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Livreur extends Authenticatable
{
    use Notifiable;
    protected $guard = 'livreur';
    protected $primaryKey="id_livreur";
    protected $casts = [
        'communes' => 'array'
    ];

    protected $fillable = [
        'nom', 'email', 'password','prenom','wilaya','communes'
    ];

    public function Centre(){
        return $this->hasOne('App\Centre','id_centre','centre');
    }

    public function Wilaya(){
        return $this->hasOne('App\Wilaya','code','wilaya');
    }
    public function Commune(){
        return $this->hasOne('App\Commune','id','commune');
    }

    public function getCommunes(){
        $coms = [];
        if($this->communes != null )
        foreach ($this->communes as $key) {
            
            return $key=$this->hasOne('App\Commune','id',$key)->pluck('nom')->first(); 
        }
        return $this->communes;
    }
    
}
