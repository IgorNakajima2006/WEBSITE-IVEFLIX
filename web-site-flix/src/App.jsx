import React, { useEffect } from 'react';
import Home from './pages/Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';


const App = () => {
  const navigate = useNavigate();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logado em");
        navigate('/');
      } else {
        console.log("Logado fora");
        navigate('/login');
      }
    });

    // Limpeza do listener de autenticação
    return () => unsubscribe();
  }, [auth, navigate]; // Inclua auth e navigate na lista de dependências

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
      </Routes>
    </div>
  );

export default App;