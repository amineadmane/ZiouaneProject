<?php

namespace App\Http\Controllers;

use App\Wilaya;
use App\Commune;
use Illuminate\Http\Request;

class WilayaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    
    public function communes($id){
        $communes=Commune::where('wilaya_id',$id)->get();
        return response()->json(array('communes' => $communes));
    }

    public function communesNom($nom){
        $w = Wilaya::where('nom',$nom)->first();
        $communes=Commune::where('wilaya_id',$w->id)->get();
        return response()->json(array('communes' => $communes));
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Wilaya  $wilaya
     * @return \Illuminate\Http\Response
     */
    public function show(Wilaya $wilaya)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Wilaya  $wilaya
     * @return \Illuminate\Http\Response
     */
    public function edit(Wilaya $wilaya)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Wilaya  $wilaya
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Wilaya $wilaya)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Wilaya  $wilaya
     * @return \Illuminate\Http\Response
     */
    public function destroy(Wilaya $wilaya)
    {
        //
    }
}
