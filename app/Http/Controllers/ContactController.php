<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendContact;

class ContactController extends Controller
{
    public function contact(Request $request) {
        $valid = \Validator::make($request -> json() -> all(), [
            'nome' => 'required|string',
            'email' => 'required|email',
            'assunto' => 'required|string',
            'mensagem' => 'required|string'
        ]);
        if ($valid -> fails()) {
            return\ Response::json($valid -> errors(), 400);
        }

        try {
            Mail::to('sidney@pet-si.ufrrj.br') -> send(new SendContact($request -> json() -> all()));
            return\ Response::json(['msg' => [0 => 'Obrigado por entrar em contato, responderemos assim que possível']], 200);
        } catch (\Exception $e) {
            return\ Response::json(['msg' => [0 => $e -> getMessage()]], 500);
        }

    }
}
