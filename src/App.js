import {Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import { Layout } from './Layout';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
     
      <Navbar/>
      <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route  path="/dashboard" element={<Dashboard/>}/>
            <Route  path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    
    </div>
  );
}

export default App;
