import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
const SimilarExercises = ({targetDetail,equipmentDetail}) => {
  return (
      <Box
          sx={{ mt: { lg: '100px', xs: '0' } }}>
          <Typography variant='h3' mb={5}>Exercises that target the same muscle groups</Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
              {targetDetail.length ? <HorizontalScrollbar data={targetDetail} />:<Loader/>}
          </Stack>
          <Typography variant='h3' mb={5}>Exercises that equipment the same muscle groups</Typography>
      <Stack direction='row' sx={{p:'2',position:'relative'}}>
              {equipmentDetail.length ? <HorizontalScrollbar data={equipmentDetail} />:<Loader/>}
          </Stack>
      </Box>
  )
}

export default SimilarExercises