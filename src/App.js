
import './App.css';
import CardComparison from './components/CardComparison';
import CardProvider from './components/CardProvider';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LandingPage from './pages/LandingPage';






function App() {

  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<LandingPage/>}/>
      <Route exact path='/compare-card' element={<CardComparison/>}/>
    </Routes>
   </Router>
  


  
  

  );
}

export default App;

