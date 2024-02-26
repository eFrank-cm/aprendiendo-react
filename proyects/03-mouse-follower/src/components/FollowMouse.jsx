import { useState, useEffect } from "react"


export const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })
  
    useEffect(() => {
      console.log('efecto', {enabled})
      const handleMove = (event) => {
        const { clientX, clientY } = event
        // console.log('handleMove', { clientX, clientY }, enabled)
        setPosition({ x: clientX, y: clientY })
  
      }
      if (enabled) {
        // Suscribirse a evento
        addEventListener('pointermove', handleMove)
      }
  
      // PARA DEJAR QUE EL EVENTO SIGA EJECUTANDOSE, DEBEMOS LIMPAR LA SUSCRIPCION
      // esto se ejecuta cuando:
      //      el componente se desmonta
      //      cuando cambian las dependencias, antes de ejecutar el nuevo efecto 
      return () => {
        console.log('cleanup')
        removeEventListener('pointermove', handleMove)
      }
    }, [enabled])
  
    return (
      <>
        <div style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`
        }} />
  
        <h3>Proyecto 3</h3>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Desactivar' : 'Activar'} seguir cursor
        </button>
      </>
  
    )
  }