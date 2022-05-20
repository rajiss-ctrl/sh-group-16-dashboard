import { Routes, Route} from 'react-router-dom'

import './App.css';
import { Layout } from './Layout';
import Clients from './pages/Clients';
import Home from './pages/Home';
import Products from './pages/Products';
import Settings from './pages/Settings';
// import Signin from './pages/Signin';
import Signup from './pages/Signup';
import TeamMember from './pages/TeamMember';

function App() {
  return (
    <div className="App">

      <Routes>
          
            {/* <Route path='/sh-group-16-dashboard' element={<Signup/>}/> */}
          <Route element={<Layout/>}>
            <Route path='/*' element={<Home/>}/>
          </Route>
            <Route  path="/signup" element={<Signup/>}/>
            {/* <Route  path="/signin" element={<Signin/>}/> */}
            <Route  path="/sh-group-16-dashboard" element={<TeamMember/>}/>
            <Route  path="/Products" element={  <Products />}/>
            <Route  path="/Clients" element={<Clients/>}/>
            <Route  path="/Settings" element={<Settings/>}/>
          
      </Routes>
    
    </div>
  );
}

export default App;
