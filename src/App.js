import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
// import { Layout } from './Layout';
import Clients from './pages/Clients';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Settings from './pages/Settings';
import TeamMember from './pages/TeamMember';

function App() {
  return (
    <div className="App">
     
        <Sidebar/> 
      <Routes>
            {/* <Route path="/" element={<Layout/>}/> */}
            <Route path='/' element={<Home/>}/>
            <Route  path="/Login" element={<Login/>}/>
            <Route  path="/Teammember" element={<TeamMember/>}/>
            <Route  path="/Products" element={<Products/>}/>
            <Route  path="/Clients" element={<Clients/>}/>
            <Route  path="/Settings" element={<Settings/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
