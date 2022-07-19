import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';
const HeroBanner = () => {
    return (
      <>
      <Box
      sx ={{mt: {lg:'212px',xs:'70px'},ml:{sm:'50px'}}}
          position='relative'
          p='20px'
      >
          <Typography color='#FF2625' fontWeight='600' fontSize='26px'>
          fitness club
          </Typography>
          <Typography fontWeight='700' sx={{fontSize:{lg:'44px',sm:'40px'}}} mt='20px' mb='30px'>
          Sweat,Smile <br/> and Repeat
          </Typography>
          <Typography fontSize='22px' mb='60px'>
          check out the most effective excercises
                </Typography>
                <Button variant="contained" color="error"
                href='#exercises' sx={{backgroundColor:'#ff2625',padding:'10px'}}
                >Explore Exercises</Button>
                <Typography fontSize='200px' color='#ff2625' fontWeight={600} sx={{display:{lg:'block',sm:'none'},opacity:0.1}}>
                Exercises
                </Typography>
          <img src={HeroBannerImage} alt="banner" className='hero-banner-img' />

            </Box>
            </>
  )
}

export default HeroBanner