import { Box, Button } from '@mui/material'
import React from 'react'

const styles = {
  planning__wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap:'2rem',
    justifyContent:'space-around',
    alignItems:'center'
  },
  price_card: {
    
  }
}

const pricingData = [
  {
    id: 'price_1',
    price: '$45',
    title: 'Group Training',
  },
  {
    id: 'price_2',
    price: '$125',
    title: 'Private Training',
  },
  {
    id: 'price_3',
    price: '$145',
    title: 'Athelte Training',
  },
]


const Pricing = () => {
  return (
       <Box sx={{width:'90%',padding:'15rem 1.5rem',gap:'3rem',textAlign:'center',display:'block'}} m='0 auto' className='section_wrapper'>
        <Box mb='3rem'>
      <h4 className='section_subheading'>Pricing</h4>
      <h2 className='section_heading'>LET'S MAKE A PLAN</h2>
      </Box>
      <Box sx={styles.planning__wrapper}>
        {
          pricingData.map(({ id, title, price }) => (
            <Box key={id} sx={styles.price_card} className='price_card_wrapper'>
              <Box>
              <h2 className='section_heading price_heading'>{title}</h2>
              <p className="section_paragraph">Coach and Counselor</p>
              </Box>
              <Box>
              <h2 className="section_heading price">{price}</h2>
              <p className="section_paragraph">Per Month</p>
              </Box>
               <Box>
              <h3 className="section_subheading price">Training Includes</h3>
              <p className="section_paragraph">1 hour Training</p>
              <p className="section_paragraph">Private Equipments</p>
              <p className="section_paragraph">Physical Training</p>
              </Box>
             <Button sx={{p:'10px 20px', borderRadius:'20px',background:'#ed0202',color:'white',fontFamily:"'Josefin Sans'",letterSpacing:'0.14em','&:hover':{
              background:'#818181b6'
              }}}>Choose</Button>   
          </Box>
          ))
        }
      </Box>
      </Box>
  )
}

export default Pricing