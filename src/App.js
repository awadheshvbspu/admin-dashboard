import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Layout from './component/shared/Layout';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Products from './pages/Products';
function App() {
  return (
   <>
    <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />
                </Route>
                <Route path="/register" element={<Register />} />
            </Routes>
   </>
   
  );
}

export default App;
