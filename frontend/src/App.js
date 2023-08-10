import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Navbars from './components/Navbar/Navbars.js';
import Footer from './components/Footer/Footer.js';
import Home from './Webpages/Home/Home.js';
import About from './Webpages/About/About.js';
import Contact from './Webpages/ContactUs/Contact.js';
import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';
import CarbonCredits from './Webpages/CarbonCredits/CarbonCredits.js';
//ehyPirEdxjN6VF4q
function App() {
  return (
    <Router>
    <Navbars/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/about' element={<About/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/contactus' element={<Contact/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/signup' element={<Signup/>}></Route>
      </Routes>
      <Routes>
        <Route exact path='/carbon-credits' element={<CarbonCredits/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
