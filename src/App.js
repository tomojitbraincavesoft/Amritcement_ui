import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Header from "../src/components/Header";
import Navbar from "../src/components/Navbar";
import About from "../src/components/About";
import DataTable from "../src/components/DataTable";
import Modal from "../src/components/Modal";
import MaterialTable from "./components/MaterialTable";
import Login from './components/Login';


function App() {
  return (

    <BrowserRouter>
     <>         

    <Routes>
    <Route path="/Login" element={<Login/>}/>
    </Routes>
     {/* <Header />
     <Navbar /> */}
         

    <div className="container-fluid">
        <div className="main-content">
          <div className="page-content">    
          {/* <MaterialTable /> */}
          <Routes>
         

          <Route path= "/" element={<About/>}/>
          <Route path="/datatable" element = {<DataTable/>} />
          <Route path="/modal" element ={<Modal/>} />
          </Routes>
    
          </div>
        </div>
      </div>

    
  


    </>
    </BrowserRouter>
 
  );
}

export default App;
