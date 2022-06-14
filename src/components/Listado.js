import React, { useEffect} from 'react'

export const Listado = ({listadoState, setListadoState}) => {

  useEffect(() => {
    conseguirPelicula()
  }, [])
  
  const conseguirPelicula = ()=>{
    let peliculas = JSON.parse(localStorage.getItem("pelis"))
    setListadoState(peliculas)
    return peliculas
  }

  const borrarPelicula = (peli_id)=>{
    let peliculas_almacenadas = conseguirPelicula()
    const filtro = peliculas_almacenadas.filter(item => item.id !== parseInt(peli_id))
    setListadoState(filtro)
    localStorage.setItem("pelis", JSON.stringify(filtro))
  }
  
  return (
    <>
    {
      (listadoState !== null) ? (
        listadoState.map((peli)=> (
        <article className="peli-item" key={peli.id}>
            <h3 className="title">{peli.title}</h3>
            <p className="description">{peli.description}</p>
  
            <button className="edit">Editar</button>
            <button className="delete" onClick={()=> borrarPelicula(peli.id)}>Borrar</button>
        </article>
        ))
      )
      :
      <h3>No hay peliculas para mostrar</h3>
    }
    </>
  )
}
