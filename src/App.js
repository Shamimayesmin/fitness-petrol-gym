import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllCards from './components/AllCards/AllCards';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>

      <AllCards></AllCards>
    </div>
  );
}

export default App;
