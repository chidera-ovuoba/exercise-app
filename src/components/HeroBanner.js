import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/img_1.webp';
import HeroBannerLogo from '../assets/images/gorilla_1.png';
const HeroBanner = () => {
 return (
      <>
      <Stack
        sx={{width:'90%', height: '90vh', justifyContent: 'center', position: 'relative', alignItems: 'center', isolation: 'isolate' }}
        direction='row'
         m='0 auto'
        >
        <Box sx={{ width: '55%', height: '100%', display: 'flex', justifyContent: 'center', alignItems:'flex-end',maxWidth:'450px','@media (width < 1200px)':{width:'60%'}}} className='hero_banner-image-container'>
        <img src={HeroBannerImage} alt="banner" className='hero_banner-img' />
        </Box>
        <Box sx={{ width: '45%', height: 'inherit'}} className='hero_banner-logo-container'>
          <img src={HeroBannerLogo} alt="banner" className='hero_banner-logo' />
          </Box>
        <Box sx={{position:'absolute',top:'40%',zIndex:'-1',transform:'translateY(-50%)'}}>
        <Typography sx={{fontSize:'5.5em',fontFamily:"'Black Ops One', cursive",letterSpacing:'0.04em',textAlign:'center',color:'#fff','@media (width <1170px)':{fontSize:'5em'},'@media (width <830px)':{fontSize:'4em'},'@media (width <700px)':{fontSize:'3em'},'@media (width <500px)':{fontSize:'2.5em'}}}>TIME TO CHANGE</Typography>
        <Typography sx={{fontSize:'5.5em',fontFamily:"'Black Ops One', cursive",letterSpacing:'0.04em',textAlign:'center',color:'#ed0202','@media (width <1170px)':{fontSize:'5em'},'@media (width <830px)':{fontSize:'4em'},'@media (width <700px)':{fontSize:'3em'},'@media (width <500px)':{fontSize:'2.5em'}}}>BEAST MODE</Typography>
        </Box>
         </Stack>
            </>
  )
}

export default HeroBanner