import React, {useState} from 'react'
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [isBodyPart, setIsBodyPart] = useState(true);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises isBodyPart={isBodyPart} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} setIsBodyPart={setIsBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} setIsBodyPart={setIsBodyPart} /> 
    </Box>
  )
}

export default Home