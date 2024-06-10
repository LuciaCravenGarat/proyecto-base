import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './common/Footer';
import NavbarApp from "./common/NavbarApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import About from './views/About';
import Login from './views/Login';
import AddProduct from './views/AddProduct';
import ErrorScreen from './views/ErrorScreen';
import {crearProducto} from "./utils/index"

function App() {

  const cargarData=async(obj)=>{
    let product= await crearProducto(obj)
  }
  cargarData()

  return (
    <BrowserRouter>
      <NavbarApp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin/addProduct' element={<AddProduct cargarData={cargarData}/>}/>
        <Route path='*' element={<ErrorScreen/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
