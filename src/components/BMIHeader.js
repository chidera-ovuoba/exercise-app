import { Box, Typography } from '@mui/material'
import React from 'react';
import BMIHeaderImg from '../assets/images/project_dark.webp'


 const styles = {
        testimonial_content: {
            width: '40%',
            flex:'0.9',
            '@media (width < 1050px)':{
              width: '100%',
              maxWidth:'500px',
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
        
}
    
// <Box sx={styles.testimonial_content}>
// <h4 className='section_subheading'>Calculator</h4>
// <h2 className='section_heading'>BMI COUNT</h2>
// <p className="section_paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore voluptas voluptates, repellendus, dolorum nobis, veniam quae voluptatum consequatur autem quasi omnis eligendi non et delectus?</p>
//   </Box>
const BMIHeader = () => {
  return (
    <>
    <Box sx={{width:'90%',display:'flex',justifyContent:'center',padding:'0rem 1.5rem',height:'90vh',position:'relative',isolation:'isolate'}} m='0 auto' style={{alignItems:'flex-end'}}>
        <Box sx={{ width: '55%', height: '95%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', maxWidth: '500px', '@media (width < 1200px)': { width: '60%' }}} className='hero_banner-image-container'>
          <img src={BMIHeaderImg} alt="BMIHeader_img" className='hero_banner-img' />
        </Box> 
        <Box sx={{position:'absolute',top:'40%',zIndex:'-1',transform:'translateY(-50%)'}}>
        <Typography sx={{fontSize:'5.0em',fontFamily:"'Black Ops One', cursive",letterSpacing:'0.04em',textAlign:'center',color:'#fff','@media (width <1170px)':{fontSize:'4em'},'@media (width <700px)':{fontSize:'3em'},'@media (width <500px)':{fontSize:'2.2em'}}}>FITNESS CALCULATOR</Typography>
        <Typography sx={{fontSize:'5.0em',fontFamily:"'Black Ops One', cursive",letterSpacing:'0.04em',textAlign:'center',color:'#ed0202','@media (width <1170px)':{fontSize:'4em'},'@media (width <700px)':{fontSize:'3em'},'@media (width <500px)':{fontSize:'2.5em'}}}>BMI COUNT</Typography>
        </Box>
      </Box>
    </>
  )
}

export default BMIHeader