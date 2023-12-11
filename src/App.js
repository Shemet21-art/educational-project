import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Page1 from './Components/Page1';
import Page2 from './Components/Page2';

function App() {
  return (
    
 <BrowserRouter>
 <Routes>
<Route path='/' element ={<Page1/>}/>
<Route path='two' element={<Page2/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
