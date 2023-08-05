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
      <Footer/>
    </Router>
  );
}

export default App;
