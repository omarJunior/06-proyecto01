import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('')


  const buscarPeli = (e)=>{
    //crear estado y actualizarlo
    setBusqueda(e.target.value)

    //filtrar para buscar coincidencias
    let pelis_encontradas = listadoState.filter(item => item.title.toLowerCase().includes(busqueda.toLowerCase()))

    //comprobar un resultado
    if(busqueda.length <= 1){
      pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))

    }
    //actualizar el estado del listado principal con lo que se filtra
    setListadoState(pelis_encontradas)
  }

  return (
    <div className="search">
        <h3 className="title">Buscador: {busqueda}</h3>
        <form>
            <input 
              type="text" 
              id="search_field" 
              name="search"
              autoComplete='off'
              value={busqueda}
              onChange={(e)=> buscarPeli(e)}
            />
            <button id="search">Buscar</button>
        </form>
    </div>
  )
}
