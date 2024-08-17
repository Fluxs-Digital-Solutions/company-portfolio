import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./assets/scss/style.scss"
import "./assets/css/materialdesignicons.min.css"


import IndexDigitalAgency from './pages/index-digital-agency';


function App() {
  // useEffect(() => {
  //   document.getElementById('theme-opt').href = './css/style.scss'
  // }, [])
  return (
    <>
    <Routes>
      <Route path='/' element={<IndexDigitalAgency/>}/>
    </Routes>
    </>
  );
}

export default App;
