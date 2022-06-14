import React, { useState } from 'react'
import { guardarEnStorage } from '../helpers/guardarEnStorage'

export const Crear = ({setListadoState}) => {

    const title  = "Añadir pelicula"

    const state = {
        id: "",
        title: "",
        description: "",
    }

    const [peliState, setPeliState] = useState(state)

    const conseguirDatosForm = (e)=>{
        e.preventDefault()

        //conseguir datos del formulario
        let title = e.target.title.value
        let description = e.target.description.value
        
        
        const peli = {
            id: new Date().getTime(),
            title,
            description
        }
        setPeliState(peli)

        //actualizar el estado del listado principal
        setListadoState(elementos => {
            return [...elementos, peli]
        })

        //guardar en el localstorage
        guardarEnStorage("pelis", peli)


        

    }

  return (
    <>
    <div className="add">
        <h3 className="title">{title}</h3>
        {(peliState.title && peliState.description) && (<strong>Has creado la pelicula: {peliState.title}</strong>)}

        <form onSubmit={conseguirDatosForm}>
            <input type="text" id="title" placeholder="Titulo" />
            <textarea id="description" placeholder="Descripción"></textarea>
            <input type="submit" id="save" value="Guardar" />
        </form>
    </div>
    </>
  )
}
