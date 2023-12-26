import {BrowserRouter, Routes, Route} from 'react-router-dom'

import PageOne from './Components/PageOne/PageOne';
import PageTwo from './Components/PageTwo/PageTwo';

import Layout from './Components/Layout/Layout';
import ListGuest from './Components/ListGuest/ListGuest';



function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route  element={<Layout/>}>
<Route path='/' element ={<PageOne/>}/>
<Route path='two' element={<PageTwo/>}/>
<Route path='listAdd' element={<ListGuest/>} />
</Route>
 </Routes>
 </BrowserRouter>
  );
}

export default App;
