import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Coffee, Egg, CookingPot, Cookie, Pizza } from '@phosphor-icons/react'
import { Form } from './components/Form'
import { useState } from 'react'
import { FormWeight } from './components/FormWeight'
function App() {
  const [showResults, setShowResults] = useState(true);
  function handleContagemClick() {
    if (showResults == false) {
        setShowResults(true)
    } else if (showResults == true) {
        setShowResults(false)
    }
}


  return (
    <div>
      <Header />
      <main>
        <div>
          <div className={styles.buttonContainer}>
        <button onClick={handleContagemClick}> {showResults ? 'Contagem KG' : 'Contagem pessoas'} </button>
        </div>
          <div>
            {showResults && (<Form/>)}
            {!showResults &&(<FormWeight/>)}
           
          </div>
        
          <div>

          </div>
        </div>

      </main>
    </div>
  )
}

export default App
