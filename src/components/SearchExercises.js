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
        <Typography fontWeight={600} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb='50px' textAlign='center'>
        Awesome Exercises You<br/> Should Know
        </Typography>
        <Box position='relative' mb='72px'>
          <TextField
            sx={{
              input: {
                fontWeight: '700',
                border: 'none',
                borderRadius:'4px'
              },
              width: { lg: '850px', xs: '350px' },
              backgroundColor: '#fff', borderRadius: '40px'
              // borderTopRightRadius:'0',borderBottomRadius:'0'
            }}
            height='76px'
            value={search}
            onChange={(e)=>setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercises'
            type='text'
          />
          <Button className='search-btn' sx={{ bgcolor: '#ff2625', borderTopLeftRadius: '0', borderBottomLeftRadius: '0', color: '#fff', height: '56px', width: { lg: '175px', xs: '80px' }, fontSize: { lg: '20px', xs: '14px' }, position: 'absolute', right: '0' }}
          onClick={handleSearch}
          >Search</Button>
        </Box>
        <Box sx={{ position:'relative', width:'100%', p:'20px' }} className="react-horizontal-scrolling-menu--scroll-container">
    <HorizontalScrollbar data={bodyPartsList} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={isBodyPart} />
        </Box>
      </Stack>
    </div>
  )
}

export default SearchExercises