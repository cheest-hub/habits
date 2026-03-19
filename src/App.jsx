import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import BemVindo from './components/BemVindo'
import SecaoHabitos from './components/SecaoHabitos'
import HabitList from './components/HabitList'


function App() {

  return (
    <div className="body">
      <Header />
      <BemVindo nomeUsuario="Nelson" />
      <SecaoHabitos titulo="Meus Hábitos">
        <HabitList />
      </SecaoHabitos>
      <Footer />
    </div>

  )
}

import { useState } from 'react'

function Lampada() {
  const [ligado, setLigado] = useState(false)


  return (
    <div>
      <p>{ligado ? '💡 Ligada' : '🌑 Apagada'}</p>
      <button onClick={() => setLigado(prev => !prev)}>
        {ligado ? 'Desligar' : 'Ligar'}
      </button>
    </div>
  )
}
export default App
