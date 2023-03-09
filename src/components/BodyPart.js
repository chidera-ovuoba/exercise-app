import React from 'react'
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
const BodyPart = ({bodyPart,item,setBodyPart}) => {
  return (
      <Stack
          type='button'
          alignItems ='center'
          justifyContent='center'
          className='bodyPart-card'
          sx={{
              borderTop: bodyPart === item ? '4px solid #ff2625' : '',
              backgroundColor: '#0e0c0cc9',
              borderBottomLeftRadius: '20px',
              maxWidth:'270px',
              width:'270px',
              height: '280px',
              cursor: 'pointer',
              gap:'47px'
          }}
          onClick={() => {
              setBodyPart(item);
          }}
      >
          <img src={Icon} alt="dumbell" style ={{width:'40px',height:'40px'}} />
          <h2 className='section_heading' style={{textTransform:'uppercase',fontSize:'30px'}}>{item}</h2>
   </Stack>
  )
}

export default BodyPart