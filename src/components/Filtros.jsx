import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
      <form>
        <div className='campo'>
          <label>Filtrar Gastos</label>
          <select
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
          >
            <option value="">--Todas las Categorias--</option>
            <option value="ahorro">Ahorro</option>
            <option value="alimentos">Alimentos</option>
            <option value="alquiler">Alquiler o Deudas</option>
            <option value="varios">Gastos Varios</option>
            <option value="hogar">Hogar</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="transporte o vehiculo">Transporte o Vehiculo</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filtros;