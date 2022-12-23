import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import User from './components/User';
import AddUser from './components/AddUser';

function App() {
  return <Router>
    <Home/>
    <Routes>
      <Route path='/users' element={<User/>}/>
      <Route path='/add_user' element={<AddUser/>}/>
    </Routes>
  </Router>
}

export default App;
