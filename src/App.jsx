
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { useMyContext } from './Context'
import Modal from './components/Modal'

function App() {
  const {modal} = useMyContext()
  return (
    <div style={modal?{
      overflow: "hidden",
      height:"100vh",
    }:{
      overflow:"auto"
    }}>
    <Navbar/>
    {modal?<Modal/>:null}
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
