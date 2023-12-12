import {BrowserRouter, Routes, Route} from 'react-router-dom'

import PageOne from './Components/PageOne';
import PageTwo from './Components/PageTwo';

function App() {
  return (
    
 <BrowserRouter>
 <Routes>
<Route path='/' element ={<PageOne/>}/>
<Route path='two' element={<PageTwo/>}/>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
