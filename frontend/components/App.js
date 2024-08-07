import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home'
import Form from './Form'

function App() {
  return (
      <div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/order">
            Order
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Form />} />
        </Routes>
      </div>

  )}

export default App;
