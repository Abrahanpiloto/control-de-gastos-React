import {useState, useEffect} from "react";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ControlPresupuesto = ({
  gastos, 
  setGastos,
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto
}) => {
  
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState();

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0);
    
    const totalDisponible = presupuesto - totalGastado;

    //Calcular porcentaje gastado(regla de tres simple):
    const nuevoPorcentaje = (( (presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2);
   
    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje);
    }, 1200);
    
    setGastado(totalGastado);
    setDisponible(totalDisponible);
   }, [gastos])

  const formatearCantidad = (cantidad) => {
    return cantidad.toLocaleString( 'en-US', {
      style: 'currency',
      currency: 'USD'})
  }

  const handleResetApp = () => {
    const resultado = confirm("¿Estas seguro de resetear presupuesto y gastos?")
    if(resultado) {
      setGastos([])
      setPresupuesto(0)
      setIsValidPresupuesto(false)
    } 
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra    dos-columnas'>
      <div>
        <CircularProgressbar 
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
          styles={buildStyles({
            trailColor: "#F5F5F5",
            pathColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
            textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6"

          })}
        />
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
        </p>

        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible: </span>{formatearCantidad(disponible)}
        </p>

        <p>
          <span>Gastado: </span>{formatearCantidad(gastado)}
        </p>

        <button 
        className="reset-app"
        type="button"
        onClick={handleResetApp}
        
        >
          Resetear App
        </button>
      </div>
    </div>
  )
}

export default ControlPresupuesto;