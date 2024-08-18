
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ManageReward from "./components/ManageReward";
import RewardRecord from "./components/RewardRecord";
import RequestReward from "./components/RewardRequest";
import AddReward from "./components/AddReward";
import Home from "./components/Home";
import Login from "./components/Login"
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard";
import Analytics from "./components/Analytics";
import './App.css';
import Transaction from "./components/Transaction";
import RecycleableData from "./components/RecycleableMaterialsData";
import EditRewards from "./components/EditReward";



function App() {
 

  

  return (
    <>
     
    
        <BrowserRouter>
          <Routes>

          
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<SignUp />}></Route>
        
          

            <Route path="/" element={<Layout />}>
              <Route path= "/home" element={<Home />} />
              <Route path="Record" element={<RewardRecord />} />
              <Route path="Manage" element={<ManageReward />} />
              <Route path="Add" element={<AddReward />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Analytics" element={<Analytics />} />
              <Route path="/Request" element={<RequestReward />} />
              <Route path="/Transaction" element={<Transaction />} />
              <Route path="/Recycleables" element={<RecycleableData />} />
              <Route path="/Edit" element={<EditRewards />} />
            </Route>
           
          </Routes>
        </BrowserRouter>


    
    

      


    </>
  ) 
}

export default App
