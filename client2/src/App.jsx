import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import socketIO from "socket.io-client"
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Hello from './component/Hello'
import Home from './component/Home'
function App() {
  const [count, setCount] = useState(0)
  const socket = socketIO.connect("http://localhost:8000")
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/game' element={<Hello socket = {socket}></Hello>}></Route>
        <Route path='/' element = {<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
