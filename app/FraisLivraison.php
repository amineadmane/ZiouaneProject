<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FraisLivraison extends Model
{
    protected $primaryKey="id_frais";
    public $timestamps = true;
    
    protected $casts = [
        'to' => 'array'
    ];

    protected $fillable = [
        'from', 'to','created_at','updated_at','prix','agence'
    ];

    public function WilayaF(){
        return $this->hasOne('App\Wilaya','code','from');
    }
    public function WilayaT(){
        return $this->hasOne('App\Wilaya','code','to');
    }



}
