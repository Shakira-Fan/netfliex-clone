import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Neflix from './pages/Neflix';
import { Player } from './pages/Player';
import Movies from './pages/Movies';

function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/player' element={<Player/>}/>
        <Route exact path='/movies' element={<Movies/>}/>
        <Route exact path='/' element={<Neflix/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App