<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Metric extends Model
{
    public $timestamps = true;

    protected $fillable = ['id_metric','id_liv_ext','CA_totale','benifice_totale' , 'CA_today' , 'benifice_today' , 
'CA_mensuel' , 'benifice_mensuel' , 'benifice_mois_1' , 'benifice_mois_2' , 'benifice_mois_3' , 'benifice_mois_4' , 'benifice_mois_5'];

public function livreurExt(){
    return $this->hasOne(LivreurExt::class);
}
}
