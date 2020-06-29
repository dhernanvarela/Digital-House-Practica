
//let express = require('express')
const fs = require ('fs')

// Leyendo y parseando (en array) el contenido de heroes.json
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));


let heroesController = {
    listado : function(req,res){
        res.send(heroes);
        //res.send('Hola manola');
    },  
    detalle : function(req,res){
        let heroe = heroes.find(function(heroe){
            return heroe.id == req.params.id
        })
        //Si NO se encuentra se envía el mensaje de no encontrado
	    if (heroe == undefined)
        res.status(404).send('404 not found. <br> ¡No encontre ese heroe, vuelva a intentarlo!');

        //Si se encuentra al héroe se envía el nombre y su profesión
        res.send('Hola, mi nombre es '+ heroe.nombre + ' y soy '+ heroe.profesion )
    },

    detalleBio : function(req,res){
        let heroe = heroes.find(function(heroe){
            return heroe.id == req.params.id
        })
        // Si NO se encuentra al héroe se envía un mensaje
        if (heroe == undefined)
            res.send('No encontramos un héroe para mostrarte su biografía')
        
        // Si se encuentra al héroe:
        // Se pregunta si vino el parámetro Y el valor esperado y se envía la información
        if (req.params.ok==undefined || req.params.ok!='ok')
            res.send('Hola, mi nombre es '+ heroe.nombre +'.Lamento que no desees saber más de mi :(')
    
        else
            res.send('Hola, mi nombre es '+ heroe.nombre + ' y mi resenia es: '+ heroe.resenia)
    
            
            // Si nó vino el parámetro se envía el mensaje de error
    
    }
}

module.exports = heroesController;