<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
class Logs extends Model
{
    public $timestamps = true;
    protected $fillable = ['created_at','etat2','etat1','id_produit','livreur','updated_at']; 
    public function getCreatedAtAttribute($date)
    {
        return Carbon::parse($date)->format('d-M-Y H:i:s');
    }

}
