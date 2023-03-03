import { Box} from '@mui/material'
import React, { useEffect, useState } from 'react';
import testimonialImg from '../assets/images/woman_poses_smile_1.webp';
import testimonial_pic from '../assets/images/cool_guy.png';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import fireBg from '../assets/images/firebg.jpg'

const testimonialsData = [
    {
        title: 'John Doe',
        id:"testimonial_1",
        subtitle:"10 weeks / Althelte Training",
    },
    {
        title: 'Sarah Doe',
        subtitle:"12 weeks / Group Training",
        id:"testimonial_2",
    },
    {
        title: 'Grisha Yeager',
        id:"testimonial_3",
        subtitle:"11 weeks / Private Training",
    },
    {
        title: 'Eren Kruger',
        id:"testimonial_4",
        subtitle:"12 weeks / Althelte Training",
    }
]

const Testimonial = () => {
     const [teamId, setTeamId] = useState('team_1')
  const [isTouched, setIsTouched] = useState(false);
  const [clickedId, setClickedId] = useState('');
  const [buttonGroupArray, setButtonGroupArray] = useState([]);
  
  useEffect(() => {
    if (clickedId) {
      document.getElementById(clickedId).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
      if (window.innerWidth >= 630) {
        setTeamId(clickedId);
      }
    }
  }, [clickedId]);
  
  useEffect(() => {
    
    if (window.innerWidth < 630) {
      setButtonGroupArray(['testimonial_1', 'testimonial_2', 'testimonial_3', 'testimonial_4'])
    } else {
      setButtonGroupArray(['testimonial_1','testimonial_4'])
    }
  }, [])

  useEffect(() => {
      const container = document.querySelector('.testimonials_wrapper');
      const containerChildren = document.querySelectorAll('.testimonials_wrapper > *');
 
    if (window.innerWidth < 630) {
      var interval = setInterval(function () {
      if (!isTouched) {
        container.scrollLeft += container.clientWidth;
      }
    }, 5000);
    var touchStartFunction = () => {
      setIsTouched(true)
    }
    var touchEndFunction = () => {
       setIsTouched(false)
  }
    container.addEventListener('touchstart', () => {
         touchStartFunction()
      })

    container.addEventListener('touchend', () => {
      touchEndFunction()
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTeamId(entry.target.getAttribute('id'));
          if (entry.target === container.firstChild && container.scrollLeft <= 0) {
            entry.target.insertAdjacentElement("beforebegin", container.lastChild);
            container.scrollLeft = container.clientWidth
          } 
          if (entry.target === container.lastChild ) {
            entry.target.insertAdjacentElement("afterend", container.firstChild);
            container.scrollLeft = container.scrollWidth - container.clientWidth * 2
          } 
        }
    })
    }, { threshold:[1],root:container,rootMargin:'1px'});
    } else {
      var observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === container.firstChild) {
            setTeamId(entry.target.getAttribute('id'));
          } 
          if (entry.target === container.lastChild ) {
            setTeamId(entry.target.getAttribute('id'));
          } 
        }
    })
    }, { threshold:[1],root:container,rootMargin:'1px'});
  }
  containerChildren.forEach(item=>observer.observe(item))
    return () => {
      clearInterval(interval);
      containerChildren.forEach(item=>observer.unobserve(item))
       container.removeEventListener('touchstart', () => {
         touchStartFunction()
      })
      container.removeEventListener('touchend', () => {
      touchEndFunction()
    });
    };
  }, [isTouched,teamId])

 
  const changeId = (id) => {
    setClickedId(id);
  }

    const styles = {
        testimonial_content: {
            flex: '1',
            width: '40%',
            gap: '1.5rem',
            mb:'1rem',
            '@media (width < 1200px)':{
              width:'100%',
            }
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

    return (
        <Box className='features_wrapper'>
        <Box sx={{width:'90%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'6rem 1.5rem 0rem',gap:'2rem','@media (width < 1200px)':{flexDirection:'column-reverse'}}} m='0 auto'>
        <Box sx={styles.testimonial_Img_Banner}>
      <img src={testimonialImg} alt='Testimonial_banner' />
      </Box>  
        <Box sx={styles.testimonial_content}>
        <Box mb='1rem'>
      <h4 className='section_subheading'>Testimonial</h4>
      <h2 className='section_heading'>WHAT PEOPLE SAY ABOUT US</h2>
        </Box>
            <Box>
        <Box  className='testimonials_wrapper'>
        {testimonialsData.map(({subtitle,title,id})=>(
            <Box  key={title} id={id}>
            <Box className='person__container'>
              <Box className="person">
              <img src={fireBg} alt='fireBg' className='person__circle' />
              <img src={testimonial_pic} alt='testimonial_pic' className='person__img'/>
              </Box>
            </Box>
            <p className="section_paragraph" style={{textAlign:'center',marginTop:'1rem'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <FormatQuoteIcon  sx={{color:'#ed0202',fontSize:'5rem'}}/>
            <Box sx={{color:'white',textAlign:'center'}}>
            <h3 className="section_heading_3" style={{color:'white'}}>{title}</h3>
            <p className="section_paragraph">{subtitle}</p>
            </Box>
            </Box>
            ))}
          </Box>
          <Box display='flex' sx={styles.buttonGroup}>
          {buttonGroupArray.map((id)=>(
            <Box key={id} sx={{
              background: `${id === teamId ? '#ed0202' : '#de8585'}`,
              transform: `${id === teamId ? 'scale(1.5)' : 'scale(1)'}`,
              transition:'transform 0.5s ease'
            }} onClick={()=>changeId(id)}></Box>
            ))}
            </Box>
      </Box> 
        </Box>
      </Box>
      </Box>
  )
}

export default Testimonial