<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class LivreurExt extends Authenticatable
{
    use Notifiable, HasApiTokens , HasFactory;
    protected $guard = 'livreur_ext';
    protected $primaryKey = 'id_liv_ext';
    protected $fillable = [
        'id_liv_ext', 'nom', 'email', 'prenom', 'phone_number', 'id_permis', 'expire_date', 'etat', 'matricule_vehicule', 'modele_vehicule', 'couleur_vehicule', 'note', 'points', 'code_parrainage', 'password'
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function Livraison_externe()
    {
        return $this->belongsTo(Livraison_externe::class);
    }

    public function Metric()
    {
        return $this->belongsTo(Metric::class);
    }

    public function Clients()
    {
        return $this->belongsToMany(Client::class, 'evaluation', 'id_client', 'id_liv_ext')->withPivot('note', 'commentaire',)->withTimestamps();
    }
}
