import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Page1 from './Components/PageOne';
import Page2 from './Components/PageTwo';

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
