import './App.scss'
import PrivateRouteLogin from './new_modules/PrivateRouteLogic/PrivateRouteLogin';
import Forgot from './new_modules/Public/forgot/Forgot';
import Login from './new_modules/Public/login/Login';
import Signup from './new_modules/Public/signup/Signup';
import Home from './pages/home/Home'
import { Route, BrowserRouter, Routes } from "react-router-dom";




function App() {

  return (
    

<div className='app'>
  <BrowserRouter>
  <Routes>
<Route path='/' element={<Login/>} />
<Route path='/signup' element={<Signup/>} />
{/* <Route path='/forgot' element={<Forgot/>} /> */}
<Route path='/home' element = {<PrivateRouteLogin Component={Home}/>}/>  
  </Routes>
  </BrowserRouter>
</div>
    
  )
}

export default App
