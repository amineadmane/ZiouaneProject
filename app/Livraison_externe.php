<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Livraison_externe extends Model
{
    public $timestamps = true;
    protected $primaryKey = "id_livraison_externe";

    protected $fillable = [
        'id_client', 'id_colis', 'id_livreur', 'nomclient', 'telephone', 'wilaya', 'commune',
        'codePostal', 'adresse', 'prix', 'ditance_parcourous', 'note', 'commentaire', 'created_at',
        'prix_promo', 'adresse_drop_off'
    ];
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
