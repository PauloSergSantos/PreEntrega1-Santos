import { Header } from './components/Header/Header'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  

  return (
    
      <div>
        <Header/>
      
        <ItemListContainer nombre="Planta Carnívora Venus Atrapamoscas" id={1} precio={2900}/>
        <ItemListContainer nombre="Jazmín Del Cabo" id={2} precio={6500}/>
        <ItemListContainer nombre="Palmera Chamaedorea Elegans" id={3} precio={8500}/>
      </div>

      

    
  )
}

export default App

