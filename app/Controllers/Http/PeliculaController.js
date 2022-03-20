'use strict'

const Database = use('Database')
//const Pelicula = require("app/models/Pelicula.js")
const Pelicula = use('App/Models/Pelicula')
//const Pelicula = require("../App/Models/Pelicula")
//const validate = use('@adonisjs/validator/providers/ValidatorProvider')
const validate = use('@adonisjs/validator/providers/ValidatorProvider')

class PeliculaController {

     async ver(request,response){
         return await Database
         .select('*').from('peliculas')

     }

     async show(request,response){

        const peliculas = await Pelicula.all()
        return peliculas
        

    }
    async showPelicula({request,response:{id}}){

        const peliculas = await Pelicula.find(id)
        if(peliculas)
        {
            response.status(200).json({
                message:'accion exitiosa',
                data: peliculas
            })

        }
        else{
            response.status(406).json({
                message:'pelicula no encontrada',
                id
            })
        }

    }

    async create(request,response){

        const rules={
            Nombre:'required',
            Descripcion:'required',
            Calificacion:'required'
        }
        const{Nombre,Descripcion,Calificacion}=request.post()
        const peliculas = request.all()

        const validation =await new validate(peliculas,rules)
        const newpeli= await Pelicula.create({Nombre,Descripcion,Calificacion})
        response.status(200).json({
            message:'registro guardado exitosamente',
            data:newpeli
        })

    }





}

module.exports = PeliculaController
