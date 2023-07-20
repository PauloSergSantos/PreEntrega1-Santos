import { Header } from './components/Header/Header'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Contacto} from './components/Contacto/Contacto'
import {SobreNosotros} from './components/SobreNosotros/SobreNosotros'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  

  return (
    
    <BrowserRouter> 
      <Header/>

      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/productos/:categoryId' element={<ItemListContainer />}/>
        <Route path='/detail/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/sobrenosotros' element={<SobreNosotros />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='*' element={<Navigate to={"/"}/>}/>
      </Routes>

      {/* <Footer/> */}
  </BrowserRouter>
  

      

    
  )
}

export default App

