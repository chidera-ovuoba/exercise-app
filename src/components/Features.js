import { Box, Container, Grid } from '@mui/material'
import React from 'react';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsIcon from '@mui/icons-material/Sports';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FeaturesImg from '../assets/images/sporty_woman.webp';

const featuresData = [
    {
        title: 'Pro Equipment',
        p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        img:[<FitnessCenterIcon key='FitnessCenter' sx={{fontSize:'2.8rem'}}/>]
    },
    {
        title: 'Active Coach',
        p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        img:[<SportsIcon key='Sports' sx={{fontSize:'2.8rem'}}/>]
    },
    {
        title: 'Cardio Watch',
        p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        img:[<MonitorHeartIcon key='MonitorHeart' sx={{fontSize:'2.8rem'}}/>]
    },
    {
        title: 'Flexible Time',
        p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        img:[<AccessTimeFilledIcon key='AccessTimeFilled' sx={{fontSize:'2.8rem'}}/>]
    }
]

const Features = () => {

     const styles = {
    features_content: {
      flex: '1',
      width:'40%',
      display: 'grid',
      gap:'1.5rem',
      minWidth:'400px',
      '@media (width < 500px)':{
        minWidth:'200px'
      }
    },
    features_Img_Banner: {
      flex: '1',
      // width: '%',
      display: 'grid',
      position:'relative',
       placeItems:'center',
      minWidth:'400px',
      width: '18rem',
      height:'50rem',
      '& > img': {
        width: '30rem',
        position:'absolute',
        height:'calc(100% + 16rem)',
        bottom:'0rem',
        '@media (width < 996px)':{
          position:'static',
          height:'inherit',
          width: 'inherit',
        },
      },
      '@media (width < 500px)':{
        minWidth:'200px'
      },
      '@media (width < 400px)': {
        width:'10rem',
        height: '35rem',
        }
       },
       features_wrapper: {
         width: '100%',
         margin: '0',
         gap: '2rem',
         '@media (width < 500px)': {
           gridTemplateColumns:'1fr'
         }
       },
       feature: {
         padding: '0',
         display: 'flex',
         flexDirection: 'column',
         justifyContent:'space-between',
         gap:'1rem',
       },
       feature_icon: {
         background: '#ed0202',
         color: 'white',
         borderRadius: '20px',
         padding: '2rem',
         width: '2rem',
        height:'2rem',
         display: 'flex',
        alignItems:'center',
        justifyContent:'center'
       }
  }

  return (
      <Box className='features_wrapper'>
        <Box sx={{width:'90%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'6rem 1.5rem 0rem',gap:'2rem',flexWrap:'wrap'}} m='0 auto'>
        <Box sx={styles.features_content}>
        <Box mb='1rem'>
      <h4 className='section_subheading'>Features</h4>
      <h2 className='section_heading'>AWESOME FEATURES</h2>
        </Box>
            <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2} sx={styles.features_wrapper}>
          {
            featuresData.map(({ img, p, title }) => (
              <Box sx={styles.feature} key={title}>
                <Box sx={styles.feature_icon}>
                {img[0]}
                </Box>
                <Box>
                  <h3 className='section_heading_3'>{title}</h3>
                  <p className='section_paragraph'>{p}</p>
                </Box>
              </Box>
            ))
          }
        </Box>
        </Box>
        <Box sx={styles.features_Img_Banner}>
      <img src={FeaturesImg} alt='AboutUs' />
      </Box>  
      </Box>
      </Box>
  )
}

export default Features