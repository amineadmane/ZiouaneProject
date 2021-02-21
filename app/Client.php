<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Client extends Authenticatable
{
    use Notifiable;
    protected $guard = 'client';
    protected $primaryKey="id_client";
    public $timestamps = true;
    protected $fillable = [
        'type','nom','telephone','created_at','updated_at', 'email', 'password','prenom','wilaya','commune','adresse','remise','TypeRemise'
    ];

    public function Wilaya(){
        return $this->hasOne('App\Wilaya','code','wilaya');
    }

    public function Commune(){
        return $this->hasOne('App\Commune','id','commune');
    }

    public function FraisL(){
        return $this->hasMany('App\FraisLivraison','from','wilaya');
    }

    public function Livraison_externe()
    {
        return $this->belongsTo(Livraison_externe::class);
    }

    public function LivreurExts()
    {
        return $this->belongsToMany(LivreurExt::class,'evaluation','id_client', 'id_liv_ext')->withPivot('note','commentaire')->withTimestamps();;
    }
    
}
