import { Box, Stack, Typography,Button } from '@mui/material'
import React from 'react';
import AboutImg from '../assets/images/young-muscular-caucasian-athlete.jpg'

const About = () => {
  const styles = {
    aboutUs_content: {
      flex: '1',
      width:'40%',
      display: 'grid',
      gap:'1.5rem',
      minWidth:'400px',
      '@media (width < 500px)':{
        minWidth:'200px'
      }
    },
    aboutUs_Img_Banner: {
      flex: '1',
      width: '60%',
      minWidth:'400px',
      height: '25rem',
      '& > img': {
        width: '100%',
        height:'100%',
      },
      '@media (width < 500px)':{
        minWidth:'200px'
      },
      '@media (width < 400px)':{
        height: '20rem',
        }
   }
  }
  return (
      <>
      <Box className='section_wrapper' sx={{width:'90%'}} m='0 auto'>
      <Box sx={styles.aboutUs_Img_Banner}>
      <img src={AboutImg} alt='AboutUs' />
      </Box>
      <Box sx={styles.aboutUs_content}>
      <Box>
      <h4 className='section_subheading'>About us</h4>
      <h2 className='section_heading'>OUR STORY</h2>
      </Box>
      <p className='section_paragraph'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam officia itaque rem deserunt cupiditate veniam dolor, accusantium laudantium. Quas, tempore! Voluptate, qui nulla consectetur est aliquam consequuntur ratione sint necessitatibus expedita molestias animi nihil explicabo obcaecati repellat dignissimos temporibus dolorum minima ut nisi atque dolores corrupti quam nam. Ad, impedit.
      </p>
      <Button sx={{p:'10px 20px', borderRadius:'20px',background:'#ed0202',color:'white',placeSelf:'start',fontFamily:"'Josefin Sans'",letterSpacing:'0.14em','&:hover':{
        background:'#818181b6'
      }}}>know more</Button>
      </Box>
      </Box>
      </>
  )
}

export default About