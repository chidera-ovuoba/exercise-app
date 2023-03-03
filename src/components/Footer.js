import React from 'react'
import { Box, Stack } from '@mui/material';
import Logo from '../assets/icons/logo.png';
const Footer = () => {
  return (
    <Box className='section_wrapper' sx={{padding:'4rem 0'}}>
        <Stack alignItems='center' >
        <img src={Logo} alt="logo" width='150px' height='150px' />
      </Stack>
    </Box>
  )
}

export default Footer