<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Client extends Authenticatable
{
    use Notifiable, HasApiTokens;
    protected $guard = 'client';
    protected $primaryKey = "id_client";
    protected $table_name = "clients";
    public $timestamps = true;
    protected $fillable = [
        'nom', 'telephone', 'created_at', 'updated_at', 'email', 'email_verified_at', 'password',
        'prenom', 'wilaya', 'commune', 'adresse', 'code', 'nb_points'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    public function Wilaya()
    {
        return $this->hasOne('App\Wilaya', 'code', 'wilaya');
    }

    public function Commune()
    {
        return $this->hasOne('App\Commune', 'id', 'commune');
    }

    public function FraisL()
    {
        return $this->hasMany('App\FraisLivraison', 'from', 'wilaya');
    }

    public function Livraison_externe()
    {
        return $this->belongsTo(Livraison_externe::class);
    }

    public function LivreurExts()
    {
        return $this->belongsToMany(LivreurExt::class, 'evaluation', 'id_client', 'id_liv_ext')->withPivot('note', 'commentaire')->withTimestamps();;
    }
    public function promotions()
    {
        return $this->belongsToMany(Promotion::class, 'client__promos', 'client_id', 'promotion_id')->using(Client_Promo::class);
    }
}
