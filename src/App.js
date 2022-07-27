import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './paginas/login';
import Home from './paginas/home';
import NotFound from "./paginas/notfound";

import { cliente } from "./backend/supabase.js";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
   cliente.auth.onAuthStateChange((event, session) =>{
      if (!session) {
        navigate('/login');
        console.log("logeado");
      }else{
        console.log("no logeado");
        navigate('/');
      }
   })
  }, []);

  return (

    <Routes  >
      <Route path="/" element={<Home />} />
      <Route path="/login"  element={<Login />} />
      <Route path="*"  element={<NotFound/>} />
    </Routes>
  );
}

export default App;


