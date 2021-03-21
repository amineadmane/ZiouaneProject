<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css">
    <link rel="shortcut icon" href="{{asset('images/logo-ziouane.png')}}" type="image/x-icon">  
  
    <script src="{{ mix('/js/app.js') }}" defer></script>
  </head>
  <body >
    @routes
    @inertia
    
  </body>
  <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.10/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC10dTdJKvGn8IyB8kMbm4ZLEAUkegfsEs",
    authDomain: "ziouaneproject.firebaseapp.com",
    projectId: "ziouaneproject",
    storageBucket: "ziouaneproject.appspot.com",
    messagingSenderId: "676351222684",
    appId: "1:676351222684:web:670139d1d36175b2235e59"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
<script src="https://www.gstatic.com/firebasejs/5.5.9/firebase-messaging.js"></script>


<style>
  th {
    font-size: 15px !important;
    

}
td{
  font-size: 15px !important;
  

}
</style>
</html>