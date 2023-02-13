import React, {useState} from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import About from '../components/About';
import Features from '../components/Features';
import Training from '../components/Training';
import Accomplishments from '../components/Accomplishments';
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [isBodyPart, setIsBodyPart] = useState(true);
  return (
    <Box >
      <HeroBanner />
      <About />
      <Features />
      <Training />
      <Accomplishments/>
      </Box>
      )
    }
    
    // <SearchExercises isBodyPart={isBodyPart} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} setIsBodyPart={setIsBodyPart} />
    // <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} setIsBodyPart={setIsBodyPart} /> 
export default Home