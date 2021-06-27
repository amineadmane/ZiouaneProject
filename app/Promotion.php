<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    protected $guard = 'promotion';
    protected $table_name = 'promotions';
    public $timestamps = true;
    protected $primaryKey = 'promotion_id';
    protected $fillable = [
        'code',
        'debut_validite',
        'fin_validite',
        'valeur',
    ];

    public function clients()
    {
        return $this->belongsToMany(Client::class, 'client__promos', 'promotion_id', 'client_id')->using(Client_Promo::class);
    }
}
