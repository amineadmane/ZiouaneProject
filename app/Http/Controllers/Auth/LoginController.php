<?php

namespace App\Http\Controllers\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;
use Session;
use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    //protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
        $this->middleware('guest:admin')->except('logout');
        $this->middleware('guest:livreur')->except('logout');
        $this->middleware('guest:client')->except('logout');

    }
    public function logout()
    {
        
        Auth::logout();        
        Session::flush();
        return redirect('/login');
    }

    public function show() {
        return Inertia::render('Auth/Login');
    }

    public function adminLogin(Request $request)
    {
        
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);

        if (Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password], $request->get('remember'))) {
            if(Auth::guard('admin')->user()->role =="super-admin")
            return redirect()->to('/administration/statistiques');
            return redirect()->to('/administration/mescolis');
        }
        return back()->withInput($request->only('email', 'remember'))->withErrors('informations incorrectes fournies');
    }
    
    public function clientLogin(Request $request)
    {
        
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);

        if (Auth::guard('client')->attempt(['email' => $request->email, 'password' => $request->password], $request->get('remember'))) {
             
            return redirect('/colis');
        }
        return back()->withInput($request->only('email', 'remember'))->withErrors('informations incorrectes fournies');
    }
    

    
    public function livreurLogin(Request $request)
    {
        $this->validate($request, [
            'email'   => 'required|email',
            'password' => 'required|min:6'
        ]);

        if (Auth::guard('livreur')->attempt(['email' => $request->email, 'password' => $request->password], $request->get('remember'))) {

            return redirect()->intended('/mescolis');
        }
        return back()->withInput($request->only('email', 'remember'))->withErrors('informations incorrectes fournies');
    }
}
