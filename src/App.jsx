
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ManageReward from "./components/ManageReward";
import RewardRecord from "./components/RewardRecord";
import AddReward from "./components/AddReward";
import Home from "./components/Home";
import Login from "./components/Login"
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import './App.css';



function App() {
 

  

  return (
    <>
     
    
        <BrowserRouter>
          <Routes>

          
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
        
          

            <Route path="/" element={<Layout />}>
              <Route path="/home" element={<Home />} />
              <Route path="Record" element={<RewardRecord />} />
              <Route path="Manage" element={<ManageReward />} />
              <Route path="Add" element={<AddReward />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Analytics" element={<Analytics />} />
            </Route>
           
          </Routes>
        </BrowserRouter>


    
    

      


    </>
  ) 
}

export default App
