<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Colis_externe extends Model
{

    public $timestamps = true;
    protected $table_name = "colis_externes";


    protected $fillable = ['ref', 'valeur', 'poids', 'etat', 'fragilite', 'dimensions'];

    public function Livraison_externe()
    {
        return $this->belongsTo(Livraison_externe::class);
    }
}
