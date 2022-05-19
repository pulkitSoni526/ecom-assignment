import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Log from './loggin';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Cards from './cards'
function App() {

 
  return (
    <div >
    <Routes >
    <Route path="/" element={<Navbar />}/>
    <Route path="/logIn" element={<Log/>}/>
    </Routes>
      
    </div>
  );
}

export default App;
