import React from 'react'
import { Box, Stack } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import Features from '../components/Features';
import Training from '../components/Training';
import Accomplishments from '../components/Accomplishments';
import TeamSection from '../components/TeamSection';
import Testimonial from '../components/Testimonial';
import Pricing from '../components/Pricing';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Blogs from '../components/Blogs';

const styles = {
    socialIcon: {
      width: '3rem',
      height:'3rem',
      display: 'grid',
      placeItems:'center',
      background:'#000',
      borderRadius: '50%',
      '& > svg': {
        fontSize: '28px',
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
  
const Home = () => {
  return (
    <Box >
      <HeroBanner />
      <About />
      <Features />
      <Training />
      <Accomplishments />
      <TeamSection />
      <Testimonial />
      <Pricing />
      <Blogs/>
      <Stack direction='column' gap='20px' alignItems='flex-end' justifySelf='center' sx={{ position: 'fixed', zIndex: '5', top: '65%', left: '1%', '@media (width < 500px)': { display: 'none' } }}>
              <Box sx={styles.socialIcon}><FacebookIcon /></Box>
              <Box sx={styles.socialIcon}><TwitterIcon /></Box>
              <Box sx={styles.socialIcon}><InstagramIcon /></Box>
          </Stack>
      
      </Box>
      )
    }
    

export default Home