import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage/home';
import { Route, Routes } from 'react-router-dom';
import LoginSignup from './pages/signup/signup';
import ContactUs from './components/ContactUs/ContactUs';
import AboutUs from './components/AboutUs/AboutUs';
import CryptoNews from './components/CryptoNews/CryptoNews';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<LoginSignup/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/news' element={<CryptoNews/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
      </Routes>
    </div>
  );
}

export default App;
