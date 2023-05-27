import CerrarBtn from '../img/cerrar.svg';

const Modal = ({setModal, animarModal, setAnimarModal}) => {

  const ocultarModal = () => {
    
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
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

      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`}>
        <legend>Nuevo Gasto</legend>

        <div className='campo'>
          <label htmlFor='nombre'>Nombre Gasto:</label>

          <input 
            id="nombre"
            type='text'
            placeholder='Añade el Nombre del Gasto'
          />
        </div>

        <div className='campo'>
          <label htmlFor='nombre'>Cantidad:</label>

          <input 
            id="cantidad"
            type='number'
            placeholder='Añade la cantidad del gasto'
          />
        </div>

        <div className='campo'>
          <label htmlFor='categoria'>Categoria:</label>

          <select
            id='categoria'
          >
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="alimentos">Alimentos</option>
            <option value="alquiler">Alquiler o Deudas</option>
            <option value="hogar">Hogar</option>
            <option value="varios">Gastos varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
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