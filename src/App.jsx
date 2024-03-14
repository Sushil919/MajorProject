import React, { useEffect, useContext } from "react";
import "./App.css";
import { Context } from "./main";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Home from './components/Home/Home'
import Jobs from './components/Job/Jobs'
import JobDetails from './components/Job/JobDetails'
import MyJobs from './components/Job/MyJobs'
import PostJobs from './components/Job/PostJobs'
import Application from './components/Application/Application'
import MyApplications from './components/Application/MyApplications'
import NotFound from './components/NotFound/NotFound';
import axios from "axios";
import { Toaster } from "react-hot-toast";


const App = () => {

  const {isAuthorized, setIsAuthorized, setUser } = useContext(Context); //get all that was created in main file

  useEffect(()=>{

  }, [isAuthorized]); 
  //it runs when page is refreshed....-> isAuthorized ki val jab jab change hogi tab tab useEffect run hoga

  return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/job/getall" element={<Jobs/>}/>
        <Route path="/job/:id" element={<JobDetails/>}/>
        <Route path="/job/post" element={<PostJobs/>}/>
        <Route path="/job/me" element={<MyJobs/>}/>
        <Route path="/application/:id" element={<Application/>}/>
        <Route path="/application/me" element={<MyApplications/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
      <Toaster />
    </Router>

    </>
    );
};

export default App