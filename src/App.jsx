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
  return (
    <>
    
    </>
  )
};

export default App