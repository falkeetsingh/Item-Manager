import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AddItem from './Pages/AddItem/AddItem';
import ViewItem from './Pages/ViewItem/ViewItem';

const App = () => {
  return (
    <Router>
      <nav className="bg-gray-800 text-white p-4 flex gap-4">
        <Link to="/" className="hover:underline">View Items</Link>
        <Link to="/add" className="hover:underline">Add Item</Link>
      </nav>
      <Routes>
        <Route path='/' element={<ViewItem/>}/>
        <Route path='/add' element={<AddItem/>}/>
      </Routes>
    </Router>
  )
}

export default App
