<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Livraison_externe extends Model
{
    public $timestamps = true;

    protected $fillable = ['id_client', 'id_colis', 'id_livreur', 'nomclient', 'telephone', 'wilaya', 'commune', 'codePostal', 'adresse', 'prix', 'ditance_parcourus', 'created_at'];
    public function Wilaya()
    {
        return $this->hasOne(Wilaya::class);
    }
    public function Client()
    {
        return $this->hasOne(Client::class);
    }
    public function livreurExt()
    {
        return $this->hasOne(LivreurExt::class);
    }
    public function Commune()
    {
        return $this->hasOne(Commune::class);
    }
    public function Colis_externes()
    {
        return $this->hasMany(Colis_externe::class);
    }
}
