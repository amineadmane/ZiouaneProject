<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
use App\Centre;
use App\Wilaya;
use DB;
use App\Admin;
use Illuminate\Http\Request;

class CentreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $wilayas = Wilaya::get();
        $centres = Centre::with(['wilayas'])->get();
        //dd($centres);
        return Inertia::render('admin/dashboard/centres/centre', [
            'wilayas'=>$wilayas,
            'centres'=>$centres    
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        
        try{
            DB::transaction(function () use($request) {
                $centre= Centre::insertGetId([
                    'nom'=>$request->nom,
                ]);
                foreach ($request->wilaya as $key) {
                    Wilaya::where('id',$key)->update(['centre'=>$centre]);
                }
                });
            }catch(Exception $e){DB::rollback();}
         
        return redirect('/administration/centres');
                        
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
     * @param  \App\Centre  $centre
     * @return \Illuminate\Http\Response
     */
    public function show(Centre $centre)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Centre  $centre
     * @return \Illuminate\Http\Response
     */
    public function edit(Centre $centre)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Centre  $centre
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        try{
            DB::transaction(function () use($request) {

                Wilaya::where('centre',$request->id)->update(['centre'=>null]);
                
                Centre::where('id_centre',$request->id)->update([
                    'nom'=>$request->nom,
                ]);

                foreach ($request->wilayas as $key) {
                    Wilaya::where('id',$key)->update(['centre'=>$request->id]);
                }
            });
        }catch(Exception $e){DB::rollback();}

        return redirect('/administration/centres');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Centre  $centre
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        try{
            DB::transaction(function () use($request) {

                Wilaya::where('centre',$request->id_centre)->update(['centre'=>null]);
                
                Centre::where('id_centre',$request->id)->delete();
                
                Admin::where('role','agent-centre')->where('wilaya',$request->id_centre)->update(['wilaya'=>null]);
            });
        }catch(Exception $e){DB::rollback();}

        return redirect('/administration/centres');
    }
}
