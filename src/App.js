import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUp from './components/SignUp'; 
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contactus from './components/Contactus';
import Aboutus from './components/Aboutus';
import Services from './components/Services';
import Footer from './components/Footer';
import BirthdayPage from './components/BirthdayPage';
import { Home } from '@mui/icons-material';
// import Serviceses from './Serviceses';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/add' element={ < Aboutus/>}/>
          {/* <Route path='/update' element={<h1>update component</h1>} /> */}
          <Route path='/SignUp' element={<SignUp />} />
         
          <Route path="/contactus" element={<Contactus />}/>
         
          {/* <Route path="/home" element={<Aboutus to='Aboutus'/>} /> */}
          <Route path="/birthday" element={<BirthdayPage />}/>

        </Routes>
      </BrowserRouter>
      {/* <Services /> */}
      
      <Footer />
    </div>
  );
}

export default App;
