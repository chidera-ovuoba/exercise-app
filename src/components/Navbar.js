import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CancelIcon from '@mui/icons-material/Cancel';
import Logo from '../assets/icons/logo.png';
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const [navBgState, setNavBgState] = useState(false);

  const openNavbar = () => {
    setNavState(true);
    setNavBgState(true)
  }

  
  useEffect(() => {
    document.querySelector('.menu_nav-wrapper').addEventListener('click', (e)=> {
      if (e.target.classList.contains('menu_nav-wrapper')|| e.target.classList.contains('close-icon')) {
        setNavState(false);
        setTimeout(()=>setNavBgState(false),400)
      }
    })

    window.addEventListener('scroll', () => {
      if (document.querySelector('.menu_nav').classList.contains('slideAnimation')) {
        setNavState(false);
        console.log('hgh')
        setTimeout(()=>setNavBgState(false),400)
      }
    })
    return () => {
      document.querySelector('.menu_nav-wrapper').removeEventListener('click', (e)=> {
        if (e.target.classList.contains('menu_nav-wrapper')|| e.target.classList.contains('close-icon')) {
          setNavState(false);
          setTimeout(()=>setNavBgState(false),400)
        }
        window.removeEventListener('scroll', () => {
      if (document.querySelector('.menu_nav').classList.contains('slideAnimation')) {
        setNavState(false);
        setTimeout(()=>setNavBgState(false),400)
      }
    })
      })
    };
  }, [])
  const styles={
    menuNav: {
      '@media (width < 960px)': {
        padding: ' 5rem 2rem 2rem',
        display: `${navBgState ? 'flex' : 'none'}`,
        '& > div:first-of-type': {
          alignItems:'flex-start',
          flexDirection: 'column',
        },
        flexDirection: 'column',
        position:'relative',
        justifyContent:'space-between'
      },
      '@media (width < 360px)': {
        fontSize: '18px',
        gap:'30px'
      }
    },
    socialIcon: {
      fontSize: '30px',
      color:'#fff',
      '&:hover': {
        color:'#ed0202'
      }
    },
    cancelIcon: {
      position: 'absolute',
      fontSize: '40px',
      right: '9%',
      top: '5%',
      color: 'white',
      display: 'none',
      '@media (width < 960px)': {
        display: 'flex'
      },
    }
    
  }
  
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      sx={{ alignItems: 'center', height: '10vh', pt: '3rem',width:'90%' }}
      m='0 auto'
    >

      <img src={Logo} alt="logo" width='100px' height='100px' />

      <Stack direction='row' gap='40px' >
        <Stack direction='row' className={`menu_nav-wrapper ${navBgState ? 'openNav' : ''}`} sx={{background: `${navBgState ? '#0000009f' : ''}`}}>
        <Stack direction='row'  fontSize='24px' className={`menu_nav ${navState ? 'slideAnimation' : 'closeAnimation'}`} sx={styles.menuNav}>
        <Stack direction='row' gap='40px'>
          <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
          <a href="#exercises" style={{ textDecoration: 'none', color: '#fff' }}>Exercises</a>
          <a href="#exercises" style={{ textDecoration: 'none', color: '#fff' }}>Testimonial</a>
          <a href="#exercises" style={{ textDecoration: 'none', color: '#fff' }}>Pricing</a>
          <Link to="fitnesscalculator"  style={{ textDecoration: 'none', color: '#fff' }}>Fitness Calculator</Link>
            <CancelIcon sx={styles.cancelIcon} className='close-icon' />
          </Stack>
            <Stack direction='row' gap='20px' flexWrap='wrap' alignItems='center' justifySelf='flex-end' pt='30px' sx={{'@media (width < 960px)':{display:'flex'},display:'none'}}>
            <FacebookIcon sx={styles.socialIcon} />
              <TwitterIcon sx={styles.socialIcon} />
              <InstagramIcon sx={styles.socialIcon} />
          </Stack>
        </Stack>
      </Stack>
      <MenuRoundedIcon sx={{ fontSize: '2.5rem', color: 'white' }} onClick={openNavbar} />
    </Stack>
    </Stack >
  )
}

export default Navbar