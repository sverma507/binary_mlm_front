import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage/home';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import CryptoNews from './components/CryptoNews/CryptoNews';
import SignUp from './pages/signUp/signUp.js';
import Login from './pages/login/login.js';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/news' element={<CryptoNews/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;