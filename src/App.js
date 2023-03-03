import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import { Box } from '@mui/material';
import Home from './pages/Home';
import Footer from './components/Footer';
import FitnessCalulator from './pages/FitnessCalulator';
const App = () => {
  return (
    <Box className='bg_smoke'>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />} />
         <Route path='/exercise/:id' element={<ExerciseDetail/>} />
         <Route path='fitnesscalculator'  element={<FitnessCalulator/>}></Route>     
       </Routes>
      <Footer/>
    </Box>
  )
}

export default App