<?php

namespace App\Http\Controllers;
use App\Usuario;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    public function index(){
        $usuarios = Usuario::all();

        return $usuarios->toJson();
    }

    public function store(Request $request){
        $validatedData = $request->validate([
          'nome' => 'required',
          'senha' => 'required',
        ]);

        $usuario = Usuario::create([
          'nome' => $validatedData['nome'],
          'senha' => $validatedData['senha'],
        ]);

        return response()->json('Usuario adicionado ao banco de dados!');
    }

    public function show($id){
        $usuario = Usuario::find($id);

        if(!$usuario) {
            return response()->json([
                'message'   => 'Não encontrado',
            ], 404);
        }    

        return $usuario->toJson();
    }

    public function update(Request $request, $id)
    {
        $usuario = Usuario::find($id);

        if(!$usuario) {
            return response()->json([
                'message'   => 'Não encontrado',
            ], 404);
        }

        $usuario->fill($request->all());
        $usuario->save();

        return response()->json($usuario);
    }

    public function destroy($id)
    {
        $usuario = Usuario::find($id);

        if(!$usuario) {
            return response()->json([
                'message'   => 'Não encontrado',
            ], 404);
        }

        $usuario->delete();
        return response()->json('Usuario deletado do banco de dados!');
    }
}
