'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager')
const { create } = require('@adonisjs/lucid/src/Lucid/Model')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.get('showPelicula/:id','PeliculaController.showPelicula')
Route.get('show/Peliculas','PeliculaController.show')
Route.post('createPelicula','PeliculaController.create')
