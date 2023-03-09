import React,{useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material';
import { exercisesOptions,fetchData } from '../utils/fetchData';
import  ExerciseCard  from '../components/ExerciseCard';
import SearchExercises from './SearchExercises';
import ExercisesHeaderImg from '../assets/images/musculeMan (1)_dark.webp'


 const styles = {
        exercises_content: {
            width: '40%',
            flex:'0.9',
            '@media (width < 1050px)':{
              width: '100%',
              maxWidth:'400px',
              height:'35%',
              display:'flex',
              flexDirection:'column',
              justifyContent:'flex-end',
              textAlign:'center',
              '&> h2':{
                fontSize:'25px'
              },
              '&> h4':{
                fontSize:'20px'
              },
              '& > p':{
                fontSize:'13px'
              }            
            },
        },
        
}
  

const Exercises = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  const [isBodyPart, setIsBodyPart] = useState(true);
  
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
     } else {
       const exercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exercisesOptions)
         setExercises(exercise);
      }
     }
    fetchExercises();
  },[bodyPart])

  return (
    <>
      <Box sx={{width:'90%',display:'flex',alignItems:'center',justifyContent:'center',padding:'0rem 1.5rem',height:'90vh'}} m='0 auto' className='exercises_banner'>
        <Box sx={{mb:'10vh'}}>
        <Typography sx={{fontSize:'5em',fontFamily:"'Black Ops One', cursive",letterSpacing:'0.04em',textAlign:'center',color:'#fff','@media (width <1170px)':{fontSize:'4em'},'@media (width <700px)':{fontSize:'3em'},'@media (width <500px)':{fontSize:'2.2em'}}}>FITNESS ACIVITIES</Typography>
        <Typography sx={{fontSize:'5em',fontFamily:"'Black Ops One', cursive",letterSpacing:'0.04em',textAlign:'center',color:'#ed0202','@media (width <1170px)':{fontSize:'4em'},'@media (width <700px)':{fontSize:'3em'},'@media (width <500px)':{fontSize:'2.5em'}}}>EXERCISES</Typography>
        </Box>
      </Box>
      <Box className='section_wrapper' sx={{ flexWrap: 'nowrap',display:'block',padding:'3rem 2rem',my:'6px' }}>
      <SearchExercises isBodyPart={isBodyPart} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} setIsBodyPart={setIsBodyPart} />
      <Box id='exercises'
        sx={{ mt: { lg: '110px' } }}
          mt='50px'
          p='20px'
        >
          <p className='section_subheading' style={{textAlign:'center',fontSize:'35px',marginBottom:'1rem'}}>
           Exercises Panel
          </p>
          <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap='wrap' justifyContent='center'>
            {exercises?.slice(indexOfFirstPage,indexOfLastPage).map((exercise, index) => <ExerciseCard key={index} exercise={exercise} setIsBodyPart={setIsBodyPart} />)}
          </Stack>
          <Stack mt='100px' alignItems='center'>
            {exercises?.length > 9 && <Pagination
              color='error'
              sx={{ '& button,& div': { color: '#fff' } }}
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
              />}
              </Stack>
        </Box>
        </Box>
    </>
  )
}

export default Exercises
