const Mensaje = ({children, tipo}) => {
  return (
    //alerta es una clase fija, tipo es una clase dinamica
    <div className={`alerta ${tipo}`}>{children}</div>
  )
}

export default Mensaje; 