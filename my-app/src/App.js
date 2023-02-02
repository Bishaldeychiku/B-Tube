import './app.scss'
import Layyout from './Layyout';
import LoginScreen from './screen/loginscreen/LoginScreen';
import {  Routes, Route, useNavigate } from 'react-router-dom'
import HomeScreen from './screen/HomeScreen/HomeScreen';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';




function App() {
  const {accessToken,loading}=useSelector(state=>state.auth);
  const navigate=useNavigate()
  
useEffect(()=>{
if(!loading && !accessToken){
  navigate('/auth')
}
},[accessToken,loading,navigate])  

  return (
    <>
    
        <Routes>
          <Route path='/'  element={<Layyout><HomeScreen /></Layyout>} />
          <Route path='/auth' element={<LoginScreen />} />
          <Route path='/search' element={<h2>search</h2>} />
          <Route path='*' element={<h2>404 error</h2>} />
        </Routes>

    </>
  );
}

export default App;
