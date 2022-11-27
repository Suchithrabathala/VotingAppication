import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Home from './components/Home';
//import Register from './components/Register';
import Voterlist from './components/Voterlist';
import RecordList from './components/Ward1';
import Edit from './components/edit';
import {BrowserRouter,Routes,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* <Home></Home> */}
      
      
      
      
      <BrowserRouter>
         <Navbar/>
         {/* <Register></Register> */}
               <Routes>
                  <Route exact path="/" 
                    element={<Home/>} />
                  <Route path="/Home" 
                    element={<Home/>} />
                  <Route path="/Register" 
                    element={<Form/>} />
                  <Route path="/Voterslist" element={<Voterlist/>}/> 
                  <Route exact path="/ward1list" 
                    element={<RecordList/>} />
                  <Route path="/edit/:id" element={<Edit/>}/>  
                </Routes>  
         
      </BrowserRouter>

        
      
      
    </div>
  );
}

export default App;
