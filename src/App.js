import './App.css';

import Navbar from './components/navbar'
import Movies from './components/movies';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="container">
    <Navbar/>
    <Movies/>
    </div>
  );
}

export default App;
