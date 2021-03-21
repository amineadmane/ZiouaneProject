<?php

namespace App\Http\Controllers;
use App\PushNotification;
use App\cr;
use Illuminate\Http\Request;

class PushNotificationController extends Controller
{

    public function bulksend()
    {
        $notification = [    'title' => 'This is notification title',    'body' =>'This is notification text',    
        'alert' => 'Test Push Message',    'sound' => 'default'];
        $data = [  'nom' => "Boutouili",  "prenom" => "Djillali" , "pickup" => "Babezzouar" , "dropoff" => "Oran","tel" => "0561403441" , "prix"=>"1500",
          'priority' => 'high',"click_action" => "FLUTTER_NOTIFICATION_CLICK",    'content_available' => true];
        


        $fcmNotification = [    'to' => '/topics/all', 'notification' => $notification,    'data' => $data,    'priority' => 10];
   
        
        $headers = array (
            'Authorization: key=' . 'AAAAnXmso5w:APA91bEVFEWzsV71F8JPNQU86cC6eMe6z3tkK769tu5Ay0xjTybu0rkv9mIIE8fTrdsxJ6HzdxM1vTgPdfBlJfc7REwLSK4cJWp-blX-Judz2BM4C_anlX099zYvZtrWUiUMR6XA2ELU',
            'Content-Type: application/json'
        );

        $fcmUrl = 'https://fcm.googleapis.com/fcm/send';
        $cRequest = curl_init();
        curl_setopt($cRequest, CURLOPT_URL, $fcmUrl);
        curl_setopt($cRequest, CURLOPT_POST, true);
        curl_setopt($cRequest, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($cRequest, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($cRequest, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($cRequest, CURLOPT_POSTFIELDS, json_encode($fcmNotification));
        $result = curl_exec($cRequest);
        curl_close($cRequest);
        echo $result;

    }
    public function bulksenf(Request $req)
    {

        $comment = new PushNotification();
        $comment->id = $req->input('id');
        $comment->title = $req->input('title');
        $comment->body = $req->input('body');
        $comment->image = $req->input('image');
        $comment->save();


    
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('notification.create');
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\PushNotification  $pushNotification
     * @return \Illuminate\Http\Response
     */
    public function destroy(PushNotification $pushNotification)
    {
        //
    }
}
