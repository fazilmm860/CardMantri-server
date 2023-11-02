
import './App.css';
import CardComparison from './components/CardComparison';
import CardProvider from './components/CardProvider';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import CallToAction from './components/CallToAction';
import ContactPage from './components/ContactPage';






function App() {

  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/compare-card' element={<CardComparison/>}/>
      <Route exact path='/nav' element={<Navbar/>}/>
      <Route exact path='/contact' element={<ContactPage/>}/>
    </Routes>
   </Router>



  
  

  );
}

export default App;

