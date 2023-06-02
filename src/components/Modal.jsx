import {useState} from "react";
import Mensaje from "./Mensaje";
import CerrarBtn from "../img/cerrar.svg";

const Modal = ({
  setModal, 
  animarModal, 
  setAnimarModal, 
  guardarGasto
}) => {

  const [mensaje, setMensaje] = useState("")
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  const ocultarModal = () => {
    
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    //Validacion del formulario:
    if([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios")
      
      setTimeout(() => {
        setMensaje("")
      }, 3000);
      
      return;
    }

    guardarGasto({nombre, cantidad, categoria})
  }
 
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img 
          src={CerrarBtn}
          alt='icono cerrar'
          onClick={ocultarModal}
        />
      </div>

      <form 
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>

        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto:</label>

          <input 
            id="nombre"
            type='text'
            placeholder='Añade el Nombre del Gasto'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='nombre'>Cantidad:</label>

          <input 
            id="cantidad"
            type='number'
            placeholder='Añade la cantidad del gasto'
            value={cantidad}
            onChange={ e => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
          <label htmlFor='categoria'>Categoria:</label>

          <select
            id='categoria'
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value="">--Seleccione--</option>
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

        <input 
          type="submit"
          value="Añadir Gasto"
        />
      </form> 
    </div>
  )
}

export default Modal;