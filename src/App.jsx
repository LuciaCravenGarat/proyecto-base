import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './common/Footer';
import NavbarApp from "./common/NavbarApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from './views/About';
import Login from './views/Login';
import ErrorScreen from './views/ErrorScreen';
import {crearProducto} from "./utils/index"

function App() {

  const traerData=async()=>{
    let product= await crearProducto({
      "category": "cafetería",
      "name": "capuchino",
      "description": "cafe con chocolate y leche",
      "price": 1800,
      "src": "35435v4sdwfñieh"
    },
  console.log(product))
  }

  return (
    <BrowserRouter>
      <NavbarApp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<ErrorScreen/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
