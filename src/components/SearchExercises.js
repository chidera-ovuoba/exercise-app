import React, { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exercisesOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
const SearchExercises = ({setExercises,bodyPart,setBodyPart,isBodyPart,setIsBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyPartsList, setBodyPartsList] = useState([]);
  // setIsBodyPart(true);
  useEffect(() => {
   
    const fetchExercisesBodyPartsList = async () => {
      const BodyListsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions);
      
      setBodyPartsList(['all',...BodyListsData])
    }
    fetchExercisesBodyPartsList();
 },[])


  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
      console.log(exercisesData);
      const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search)||
        exercise.equipment.toLowerCase().includes(search)||
        exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExercises);
    }

  }
  
  return (
    <div>
      <Stack alignItems='center' justifyContent='center' mt='37px' p='20px'>
        <Box mb='2rem' textAlign='center'>
      <h4 className='section_subheading'>Awesome Exercises</h4>
      <h2 className='section_heading'>TRY THEM OUT!!</h2>
        </Box>
        <Box position='relative' mb='72px'>
          <TextField
            sx={{
              input: {
                fontWeight: '700',
                // border: 'none',
                borderRadius: '4px',
                borderRadius: '40px',
                color:'#fff'
              },
                width: '80vw',
                maxWidth:'800px',
                backgroundColor: 'none',
            }}
            height='76px'
            value={search}
            color='error'
            onChange={(e)=>setSearch(e.target.value.toLowerCase())}
            type='text'
            variant="filled"
            label='Search Exercises'
          />
          <Button className='search-btn' sx={{ bgcolor: '#ff2625', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', color: '#fff', height: '56px', width: { lg: '175px', xs: '80px' }, fontSize: { lg: '20px', xs: '14px' }, position: 'absolute', right: '0' }}
          onClick={handleSearch}
          >Search</Button>
        </Box>
        <Box sx={{width:'100%', p:'20px' }} className="react-horizontal-scrolling-menu--scroll-container">
    <HorizontalScrollbar data={bodyPartsList} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={isBodyPart} />
        </Box>
      </Stack>
    </div>
  )
}

export default SearchExercises