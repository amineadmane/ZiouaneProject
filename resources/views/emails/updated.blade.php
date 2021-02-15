@component('mail::message')
Nouveau message de  Ziouane Express
<br>
Vos informations ont été modifiées
<br>
{{$data['nom']}} {{$data['prenom']}}
<br>
Email :  {{$data['email']}}.
@if($data['password']!="")
<br>
Password :  {{$data['password']}}.
<br>
@endif

Thanks,<br>
Ziouane Express
@endcomponent
