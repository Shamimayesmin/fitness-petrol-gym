import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllCards from './components/AllCards/AllCards';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>

      <AllCards></AllCards>

      
    <Blog></Blog>
            
    </div>
  );
}

export default App;
