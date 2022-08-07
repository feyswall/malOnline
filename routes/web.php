<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');


Route::view('/contactUs', 'contactUs')->name('contactUs');

Route::view('/aboutUs', 'aboutUs')->name('aboutUs');

Route::view('/ourWork', 'ourWork')->name('ourWork');

Route::view('/features', 'features')->name('features');

Route::view('/features', 'features')->name('features');

Route::view('/services', 'services')->name('services');


require __DIR__.'/auth.php';
