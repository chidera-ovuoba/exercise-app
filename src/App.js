import React from 'react'
import './App.css';
import { Route, Routes,useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Footer from './components/Footer';
import FitnessCalulator from './pages/FitnessCalulator';
import Exercises from './components/Exercises';
const App = () => {
  const location = useLocation();
  console.log(location.pathname.slice(1))
  return (
    <Box className={`bg_smoke_${location.pathname.slice(1).includes('/') ? 'exerciseDetail' : location.pathname.slice(1)}`}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='exercises' exact element={<Exercises />} />
         <Route path='/exercise/:id' element={<ExerciseDetail/>} />
         <Route path='fitnesscalculator'  element={<FitnessCalulator/>}></Route>     
       </Routes>
      <Footer/>
    </Box>
  )
}

export default App