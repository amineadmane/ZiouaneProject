<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colis_externe extends Model
{
    use HasFactory;
    public $timestamps = true;

    protected $fillable = ['ref', 'valeur', 'poids', 'etat'];

    public function Livraison_externe()
    {
        return $this->belongsTo(Livraison_externe::class);
    }
}
