import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import AllCards from './components/AllCards/AllCards';
import Blog from './components/Blog/Blog';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

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
