import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import team_1 from '../assets/images/team_1.jpg';
import team_2 from '../assets/images/team_2.jpg';
import team_3 from '../assets/images/team_3.jpg';

const teamData = [
  {
  img: team_1,
  id:'team_1'
  },
  {
  img: team_2,
  id:'team_2'
  },
  {
  img: team_3,
  id:'team_3'
  },
]

const TeamSection = () => {
  const [teamId, setTeamId] = useState('team_1')
  const [isTouched, setIsTouched] = useState(false);
  const [clickedId, setClickedId] = useState('');
  
  useEffect(() => {
    if (clickedId) {
     document.getElementById(clickedId).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [clickedId])

  useEffect(() => {
      const container = document.querySelector('.carouselWrapper');
      const containerChildren = document.querySelectorAll('.carouselWrapper > *');

    const interval = setInterval(function () {
      if (!isTouched) {
        container.scrollLeft += container.getBoundingClientRect().width;
      }
    }, 5000);
    
    container.addEventListener('touchmove', () => {
      setIsTouched(true)
});

    container.addEventListener('touchend', () => {
      setIsTouched(false)
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTeamId(entry.target.getAttribute('id'));
          if (entry.target === container.firstChild) {
            entry.target.insertAdjacentElement("beforebegin", entry.target.nextSibling.nextSibling);
          container.scrollLeft = entry.target.clientWidth;
          } 
          if (entry.target === container.lastChild) {
            entry.target.insertAdjacentElement("afterend", entry.target.previousSibling.previousSibling);
            container.scrollLeft = entry.target.clientWidth;
          } 
      }
    })
    }, { threshold:[1],root:container});

     containerChildren.forEach(item=>observer.observe(item))

       return () => {
         clearInterval(interval);
          containerChildren.forEach(item=>observer.unobserve(item))
    };
  }, [isTouched,teamId])

 
  const changeId = (id) => {
    setClickedId(id);
  }

      const styles = {
    teams_content: {
      flex: '1',
      width:'40%',
      display: 'grid',
      gap:'1.5rem',
      minWidth:'400px',
      '@media (width < 500px)':{
        minWidth:'200px'
      }
    },
    teams_Img_Banner: {
      flex: '1',
      display: 'grid',
      placeItems: 'center',
    },
    buttonGroup:{
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      gap: '1.5rem',
      marginTop:'3rem',
      '& > *': {
        width: '0.8rem',
        borderRadius: '50%',
        height: '0.8rem',
        cursor:'pointer',
      }
    } 
    }
  return (
    <>
        <Box sx={{width:'90%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'15rem 1.5rem',gap:'3rem',flexWrap:'wrap','@media (width < 1263px)':{justifyContent:'center'}}} m='0 auto' className='section_wrapper'>
        <Box sx={styles.teams_content}>
        <Box mb='1rem'>
      <h4 className='section_subheading'>Our Perfect Team</h4>
      <h2 className='section_heading'>LEARN FROM THE BEST</h2>
          </Box>
          <p className='section_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a voluptate repudiandae in architecto itaque maiores! Accusantium possimus eos eius.<br/><br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, iusto, soluta dolores sapiente necessitatibus exercitationem id obcaecati at animi.
          </p>
        </Box>
        <Box sx={styles.teams_Img_Banner}>
        <Box  className='carouselWrapper'>
        {teamData.map(({id,img})=>(
          <img src={img} alt={id} key={id} id={id} />
          ))}
          </Box>
          <Box display='flex' sx={styles.buttonGroup}>
          {teamData.map(({id})=>(
            <Box key={id} sx={{
              background: `${id === teamId ? '#ed0202' : '#de8585'}`,
              transform: `${id === teamId ? 'scale(1.5)' : 'scale(1)'}`,
              transition:'transform 0.5s ease'
            }} onClick={() => changeId(id)}></Box>
            ))}
            </Box>
      </Box> 
        </Box>
    </>
  )
}

export default TeamSection