<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Metric extends Model
{

    public $timestamps = true;

    protected $fillable = [
        'id_metric', 'id_liv_ext', 'CA_totale', 'Benifice_totale', 'CA_today', 'Benifice_today',
        'CA_mensuel', 'Benifice_mensuel', 'Benifice_mois_1', 'Benifice_mois_2', 'Benifice_mois_3', 'Benifice_mois_4', 'Benifice_mois_5'
    ];

    public function livreurExt()
    {
        return $this->hasOne(LivreurExt::class);
    }
}
