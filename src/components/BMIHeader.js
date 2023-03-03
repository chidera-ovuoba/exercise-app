import { Box } from '@mui/material'
import React from 'react';
import BMIHeaderImg from '../assets/images/project_dark.webp'


 const styles = {
        testimonial_content: {
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
        testimonial_Img_Banner: {
            flex: '1',
            display: 'grid ',
            position: 'relative',
            placeItems: 'flex-start',
            minWidth: '400px',
            width: '18rem',
            height: '50rem',
            '& > img': {
                maxWidth: '37rem',
                position: 'absolute',
                height: 'calc(100% + 13rem)',
                bottom: '0rem',
                '@media (width < 1450px)': {
                  width: '100%',

              },
                '@media (width < 1200px)': {
                    position: 'static',
                    height: 'inherit',
                    placeSelf:'center',
                    width: 'inherit',
                },
            },
          '@media (width < 1200px)': {
            width: '35rem',
            
          },
          '@media (width < 650px)': {
          width:'20rem',
          minWidth: '200px',
          height: '35rem',
          },
          '@media (width < 380px)': {
          width:'15rem',
          height: '30rem',
          },
        },
    buttonGroup:{
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      gap: '1.5rem',
      marginTop:'2rem',
      '& > *': {
        width: '0.8rem',
        borderRadius: '50%',
        height: '0.8rem',
        cursor:'pointer',
      }
    }
}
    
const BMIHeader = () => {
  return (
    <>

        <Box sx={{width:'90%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0rem 1.5rem',gap:'2rem',height:'90vh','@media (width < 1050px)':{flexDirection:'column',padding:'0 0.5rem'}}} m='0 auto'>
        <Box sx={styles.testimonial_content}>
      <h4 className='section_subheading'>Calculator</h4>
      <h2 className='section_heading'>BMI COUNT</h2>
        <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In reprehenderit, atque minus optio odio culpa saepe commodi architecto perferendis quis!</p>
          </Box>
          <Box sx={{ width: '55%', height: '95%',alignSelf:'flex-end',maxWidth:'500px','@media (width < 1050px)':{width:'100%', height: '65%',alignSelf:'center', display: 'flex',justifyContent: 'center','&>img':{maxWidth:'400px',minWidth:'235px'}}}} className='hero_banner-image-container'>
          <img src={BMIHeaderImg} alt="BMIHeader_img" className='hero_banner-img' />
          </Box>  
      </Box>
    </>
  )
}

export default BMIHeader