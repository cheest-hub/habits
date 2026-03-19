import { useState } from 'react'

export default function Contador() {
  const [contador, setContador] = useState(0)

  const aumentar = () => setContador(contador + 1)
  const diminuir = () => {
    if (contador > 0) setContador(contador - 1)
  }
  const zerar = () => setContador(0)
const aumentarTres = () => {
  setContador(prev => prev + 1)
  setContador(prev => prev + 1)
  setContador(prev => prev + 1)
}


  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={aumentar}>+1</button>
      <button onClick={diminuir}>-1</button>
      <button onClick={zerar}>Zerar</button>
      <button onClick={aumentarTres}>+3</button>
    </div>
  )
}