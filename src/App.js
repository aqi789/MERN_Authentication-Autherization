import './App.css';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
