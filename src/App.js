import { Routes,Route } from 'react-router-dom';
import { Signin } from './Components/Signin';
import { Signup } from './Components/Signup';
import ResponsiveAppBar, { Home } from './Components/Home';
// import { Home } from './Components/Home';
import './Assets/Home.css'
import { HomeAfterSignin } from './Components/HomeAfterSignin.js';
function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<HomeAfterSignin/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
    </Routes>
    </div>
  );
}

export default App;