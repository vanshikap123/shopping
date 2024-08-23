
import './App.css';
import Home from './page/Home';
import Login from './page/Login';
import {BrowserRouter, Routes ,Route, Navigate} from 'react-router-dom'
import Cart from './page/Cart';
import Signup from './page/Signup';
import Single from './page/Single';
import { useContext } from 'react';
import Authocontext from './context/Authocontext';
import Navbar from './component/Navbar';

function App() {
 
 let authstore = useContext(Authocontext)
 let loginValue = authstore.user.login
console.log(loginValue)
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
         {loginValue===true && <Route path='/' element={<Home />}/>}
         {loginValue===false && <Route path='/' element={<Navigate to={'/logout'}/>}/>}
          {loginValue===true && <Route path='/cart' element={<Cart/>}/>}
          {loginValue===false && <Route path='/cart' element={<Navigate to={'/login'}/>}/>}
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
         {loginValue===true && <Route path='/single' element={<Single/>}/>}
         {loginValue===false && <Route path='/single' element={<Navigate to={'/login'}/>}/>}
        
      

      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;