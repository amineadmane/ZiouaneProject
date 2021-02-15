<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ColisLivre extends Model
{
    public $timestamps = true;

    protected $fillable = ['ref','client','poids','codecolis','nomclient','telephone','wilaya','commune','adresse','codePostal','produits','livraison','remarque','prix', 'created_at']; 
    public function Wilaya(){
        return $this->hasOne('App\Wilaya','code','wilaya');
    }
    public function Client(){
        return $this->hasOne('App\Client','id_client','client');
    }
    public function Logs(){
        return $this->hasMany('App\Logs','id_produit','id_colis');
    }
    public function Livreur(){
        return $this->hasOne('App\Livreur','id_livreur','livreur');
    }
    public function Commune(){
        return $this->hasOne('App\Commune','id','commune');
    }
    
}
