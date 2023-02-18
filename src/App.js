import './App.css';
import Navbar  from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import Singup from './components/pages/SingUp';


function App() {
  return (
    <>
      <Router>        
          <Navbar />
          <Routes>
            <Route exact path="/"  element={<Home />} />
            <Route path="/products"  element={<Products />} />
            <Route path="/services"  element={<Services />} />
            <Route path="/sign-up"  element={<Singup />} />            
          </Routes>
      </Router>
      </>
  );
}

export default App;
