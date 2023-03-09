import React from 'react'
import { Typography, Stack, Button, Box } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name:bodyPart
        },
          {
            icon: TargetImage,
            name:target
        },
            {
            icon: EquipmentImage,
            name:equipment
      }
    ]
  
    return (
      <Box gap='4rem' sx={{ display: 'flex', p: '8rem 0px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', width: '90%', m: '0 auto', '&>*': { flex: '1', minWidth: '340px' }, mb: "10px",'@media (width < 600px)':{'&>*': {minWidth: '250px'}} }} className='section_wrapper'>
        <Box sx={{display:'grid',placeItems:'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        </Box>
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
          <h2 className='section_heading' style={{textTransform:'capitalize'}}>{name}</h2>
              <p className='section_paragraph'>
             {`Exercises keep you strong. ${name} bup is one of the best
              exercises to target your ${target}. It will help you improve your
              mood and gain energy.`}
              </p>
                {extraDetail.map((item,i) => {
                    return <Stack key={i} gap='24px' direction='row' alignItems='center'>
                      <Button sx={{
                        background: '#fff2db', borderRadius: '50%', width: '80px', height: '80px', display: 'grid',
                        '&>img':{width:'50px',height:'50px'},placeItems: 'center', '@media(width < 400px)': { width: '60px', height: '60px', '&>img': { width: '40px', height: '40px' } }
                      }}>
                            <img src={item.icon} alt={bodyPart} /></Button>
                        <h4 className='section_subheading' style={{textTransform:'capitalize'}}>
                        {item.name}
                        </h4>
                    </Stack>
                })}            
            </Stack>
            
      </Box>
  )
}

export default Detail