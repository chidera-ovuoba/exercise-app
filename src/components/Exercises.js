import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material';
import { exercisesOptions,fetchData } from '../utils/fetchData';
import  ExerciseCard  from '../components/ExerciseCard';
const Exercises = ({ setExercises, bodyPart, exercises,setIsBodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const exercisesPerPage = 9
  const indexOfLastPage = currentPage * exercisesPerPage;
  const indexOfFirstPage = indexOfLastPage - exercisesPerPage;
  const paginate = (e,value) => {
    console.log(e);
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behaviour: 'smooth' });
  }
  useEffect(() => {
   const fetchExercises = async () => {
     if (bodyPart === 'all') {
      const exercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises`,exercisesOptions)
       setExercises(exercise);
     }
     const exercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exercisesOptions)
       setExercises(exercise);
     
    }
    fetchExercises();
  },[bodyPart])

  return (
    <Box id='exercises'
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >
      <Typography variant='h3' mb='46px'>
      Showing results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
        {exercises.slice(indexOfFirstPage,indexOfLastPage).map((exercise, index) => <ExerciseCard key={index} exercise={exercise} setIsBodyPart={setIsBodyPart} />)}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 9 && <Pagination
          color='standard'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
        />}
      </Stack>
    </Box>
  )
}

export default Exercises