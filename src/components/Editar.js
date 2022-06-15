import React from 'react'

export const Editar = ({peli, conseguirPelicula, setEditar, setListadoState}) => {

    const title_component = "Editar pelicula"

    const guardarEdicion = (e, peli_id)=>{
        e.preventDefault()
        
        //buscar indice del objeto de la pelicula a actualizar
        const peliculas_almacenadas = conseguirPelicula()
        const indice = peliculas_almacenadas.findIndex(item => item.id === peli_id)

        //Crear objeto con ese indice
        let peli_actualizada = {
            id: peli_id,
            title: e.target.title.value,
            description: e.target.description.value
        }
        
        //actualizar el elemento con ese indice
        peliculas_almacenadas[indice] = peli_actualizada

        //guardar datos localStorage
       localStorage.setItem("pelis", JSON.stringify(peliculas_almacenadas))

        //actualizar estados
        setListadoState(peliculas_almacenadas)
        setEditar(0)
    }
    
  return (
    <div className='edit_form'>
        <h3 className='title'>{title_component}</h3>
        <form onSubmit={(e)=> guardarEdicion(e, peli.id)}>
            <input 
                type="text"
                name="title"
                className="title_edit"
                defaultValue={peli.title}
            />
            <textarea 
                name="description" 
                defaultValue={peli.description}
                className='description_edit' />
            
            <input type="submit" className="edit" value="Actualizar" />
        </form>
    </div>
  )
}
