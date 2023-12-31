import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import { Home } from './Components/Home/Home';

import {Contact1} from './Components/Contact1/Contact1';
import { Page } from './Components/Page/Page';

function App() {
  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}/> 
      <Route path='/page' element = {<Page/>}/>
      <Route path='/contact1' element = {<Contact1/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
