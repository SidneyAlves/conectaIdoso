<?php

namespace App\Http\Controllers;
use App\Video;
use Illuminate\Http\Request;

class VideosController extends Controller
{
    public function index(){
        $videos = Video::all();

        return $videos->toJson();
    }

    public function store(Request $request){
        $validatedData = $request->validate([
          'nome' => 'required',
          'url' => 'required',
          'descricao' => 'required',
          'palavras-chave' => 'required',
        ]);

        $video = Video::create([
          'nome' => $validatedData['nome'],
          'url' => $validatedData['url'],
          'descricao' => $validatedData['descricao'],
          'palavras-chave' => $validatedData['palavras-chave'],
        ]);

        return response()->json('Video Adicionado ao banco de dados!');
    }

    public function show($id){
        $video = Video::find($id);

        if(!$video) {
            return response()->json([
                'message'   => 'Não encontrado',
            ], 404);
        }    

        return $video->toJson();
    }

    public function update(Request $request, $id)
    {
        $video = Video::find($id);

        if(!$video) {
            return response()->json([
                'message'   => 'Não encontrado',
            ], 404);
        }

        $video->fill($request->all());
        $video->save();

        return response()->json($video);
    }

    public function destroy($id)
    {
        $video = Video::find($id);

        if(!$video) {
            return response()->json([
                'message'   => 'Não encontrado',
            ], 404);
        }

        $video->delete();

        return response()->json('Video deletado do banco de dados!');
    }


}
