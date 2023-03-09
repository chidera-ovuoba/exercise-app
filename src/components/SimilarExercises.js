import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
const SimilarExercises = ({targetDetail,equipmentDetail}) => {
  return (
      <Box
          sx={{width:'90%',m:'0 auto',display:'block',mb:"10px"}} className='section_wrapper'>
          <h4 className='section_heading' style={{textTransform:'capitalize'}}>similar exercises </h4>
      <Stack direction='row' sx={{mb:'4rem'}}>
              <HorizontalScrollbar data={targetDetail} />
          </Stack>
          <h4 className='section_heading' style={{textTransform:'capitalize'}}>similar equipments with exercises</h4>
      <Stack direction='row'>
               <HorizontalScrollbar data={equipmentDetail} />
          </Stack>
      </Box>
  )
}

export default SimilarExercises