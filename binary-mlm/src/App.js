import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage/home';
import { Route, Routes } from 'react-router-dom';
import LoginSignup from './pages/signup/signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<LoginSignup/>}/>
      </Routes>
    </div>
  );
}

export default App;
