import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import generarId from './helpers/index.js'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {
  const [gastos, setGastos] = useState([]);

  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? ""
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);

  const [gastoEditar, setGastoEditar] = useState({});

  useEffect(() => {
   
    if(Object.keys(gastoEditar).length > 0) {
      setModal(true)
      
      setTimeout(() => {
        setAnimarModal(true)
      }, 400);
    }
  }, [gastoEditar])

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? "")
  }, [presupuesto])

  useEffect(() => {
    const presupuestoLS = localStorage.getItem("presupuesto") ? Number(localStorage.getItem("presupuesto")) : "";

    if(presupuestoLS > 0) {
      setIsValidPresupuesto(true)
    }
  }, []);
  

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})
    
    setTimeout(() => {
      setAnimarModal(true)
    }, 400);
  }

  //funcion que guarda un gasto:
  const guardarGasto = gasto => {
    console.log(gasto)
    if(gasto.id) {
      //Actualiza un gasto
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      
      setGastos(gastosActualizados)
    } else {
      //Guarda un nuevo gasto
      gasto.id = generarId();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto])
    }

    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 500);
    setGastoEditar({})
  }

  const eliminarGasto = id => {
    // console.log("eliminando", id)
    const gastosActualizados = gastos.filter( gasto => gasto.id !== id);
    setGastos(gastosActualizados)
  }

  return (
    <div className={modal ? "fijar" : ""}>
      
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto} 
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
      />

      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className='nuevo-gasto'>
            <img 
            src={IconoNuevoGasto}
            alt='icono nuevo gasto'
            onClick={handleNuevoGasto}
            />
          </div>
        </>
        
      )}

      {modal && <Modal 
                  setModal={setModal}
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  guardarGasto={guardarGasto}
                  gastoEditar={gastoEditar}
                  setGastoEditar={setGastoEditar}
                />}
      
    </div>
  )
}

export default App  
