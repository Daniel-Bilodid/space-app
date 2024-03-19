
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Destination from './components/destination/Destination';
import Crew from './components/crew/Crew';
import Tech from './components/tech/Tech';
function App() {
  return (
    <div className="App">
     
    

        <Routes>
              <Route exact path='/' element={<Home></Home>} />
              <Route path='/destination' element={<Destination></Destination>} />
              <Route path='/crew' element={<Crew></Crew>} />
              <Route path='/tech' element={<Tech></Tech>} />
          </Routes>
    
    </div>
  );
}

export default App;
