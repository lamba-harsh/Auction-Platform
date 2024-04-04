//import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/home" element={<Navbar />} />
      </Routes>
      </Router> 

    </div>
  );
}

export default App;
