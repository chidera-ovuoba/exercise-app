import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/dark_banner_image.webp';
import HeroBannerLogo from '../assets/images/gorilla_1.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const HeroBanner = () => {

  const styles = {
    socialIcon: {
      width: '4rem',
      height:'4rem',
      display: 'grid',
      placeItems:'center',
      background:'#000',
      borderRadius: '50%',
      '& > svg': {
        fontSize: '30px',
        },
      '@media (width < 1000px)': {
        width: '2.8rem',
        height:'2.8rem',
        '& > svg': {
        fontSize: '23px',
        },
      },
      '@media (width < 700px)': {
        width: '2.3rem',
        height:'2.3rem',
        '& > svg': {
        fontSize: '20px',
        },
      },
      color:'#fff',
      '&:hover': {
        background: '#ed0202',
        cursor:'pointer'
      }
    }
  }
  return (
      <>
      <Stack
        sx={{width:'90%', height: '90vh', justifyContent: 'center', position: 'relative', alignItems: 'center', isolation: 'isolate' }}
        direction='row'
         m='0 auto'
        >
        <Box sx={{ width: '55%', height: '100%', display: 'flex', justifyContent: 'center', alignItems:'flex-end','@media (width < 1200px)':{width:'60%',maxWidth:'500px'}}} className='hero_banner-image-container'>
        <img src={HeroBannerImage} alt="banner" className='hero_banner-img' />
        </Box>
        <Box sx={{ width: '45%', height: 'inherit'}} className='hero_banner-logo-container'>
          <img src={HeroBannerLogo} alt="banner" className='hero_banner-logo' />
          </Box>
        <Box sx={{position:'absolute',top:'30%',zIndex:'-1',transform:'translateY(-50%)'}}>
        <Typography sx={{fontSize:'7em',fontFamily:"'Black Ops One', cursive",letterSpacing:'0.04em',textAlign:'center',color:'#fff','@media (width <1170px)':{fontSize:'5em'},'@media (width <830px)':{fontSize:'4em'},'@media (width <700px)':{fontSize:'3em'},'@media (width <500px)':{fontSize:'2.5em'}}}>TIME TO CHANGE</Typography>
        <Typography sx={{fontSize:'7em',fontFamily:"'Black Ops One', cursive",letterSpacing:'0.04em',textAlign:'center',color:'#ed0202','@media (width <1170px)':{fontSize:'5em'},'@media (width <830px)':{fontSize:'4em'},'@media (width <700px)':{fontSize:'3em'},'@media (width <500px)':{fontSize:'2.5em'}}}>BEAST MODE</Typography>
        </Box>
         <Stack direction='column' gap='20px' flexWrap='wrap' alignItems='flex-end' justifySelf='center' sx={{position:'fixed',zIndex:'3',top: '70%',left:'2%','@media (width < 500px)':{display:'none'}}}>
              <Box sx={styles.socialIcon}><FacebookIcon /></Box>
              <Box sx={styles.socialIcon}><TwitterIcon /></Box>
              <Box sx={styles.socialIcon}><InstagramIcon /></Box>
          </Stack>
         </Stack>
            </>
  )
}

export default HeroBanner