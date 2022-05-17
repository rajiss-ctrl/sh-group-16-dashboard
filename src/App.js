import {Routes, Route} from 'react-router-dom'
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { Layout } from './Layout';
import Clients from './pages/Clients';
import Dashboard from './pages/Dashboard';
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
        <Route path="/" element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route  path="/dashboard" element={<Dashboard/>}/>
            <Route  path="/login" element={<Login/>}/>
            <Route  path="/teammember" element={<TeamMember/>}/>
            <Route  path="/login" element={<Products/>}/>
            <Route  path="/clients" element={<Clients/>}/>
            <Route  path="/settings" element={<Settings/>}/>
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
