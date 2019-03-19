<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Videos
Route::get('videos', 'VideosController@index');
Route::post('videos', 'VideosController@store');
Route::get('videos/{id}', 'VideosController@show');
Route::put('videos/{id}', 'VideosController@update');
Route::delete('videos/{id}', 'VideosController@destroy');

//Usuario
Route::get('usuarios', 'UsuariosController@index');
Route::post('usuarios', 'UsuariosController@store');
Route::get('usuarios/{id}', 'UsuariosController@show');
Route::put('usuarios/{id}', 'UsuariosController@update');
Route::delete('usuarios/{id}', 'UsuariosController@destroy');

//Contato
Route::post('/contact', ['as' => 'contact', 'uses' => 'ContactController@contact']);