@component('mail::message')

Nova mensagem do ConectaIdoso:

@component('mail::table')
| Input         | Details       |
| ------------- |---------------|
| Nome          | {{ $nome }}   |
| Email         | {{ $email }}  |
| Assunto         | {{ $assunto }}  |
| Mensagem      | {{ $mensagem }}|
@endcomponent

@endcomponent