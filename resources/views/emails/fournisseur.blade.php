@component('mail::message')
Nouveau message de  {{$data['name']}}.  Sur la page <strong>Devenez Fournisseur</strong>
<br>
Email :  {{$data['email']}}.
<br>
Telephone :  {{$data['phone']}}.
<br>
Categorie :  {{$data['categorie']}}.
<br>
Page Facebook : {{$data['facebook']}}
<br>
Site web : {{$data['site']}}
<br>
Page Facebook : {{$data['facebook']}}
<br>
Remarque :  {{$data['remarque']}}.


Thanks,<br>
{{ config('app.name') }}
@endcomponent
