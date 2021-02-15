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
<style>
  th {
    font-size: 15px !important;
    

}
td{
  font-size: 15px !important;
  

}
</style>
</html>