import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack } from '@mui/material'
import blogsImg from '../assets/images/preview.webp';
import blog_1 from '../assets/images/HD-wallpaper-fitness-group-workouts-weight-loss-exercise-for-abs-gym.jpg';
import blog_2 from '../assets/images/HD-wallpaper-women-doing-exercise-raising-left-hands-while-holding-dumbbells-inside-room.jpg';
import blog_3 from '../assets/images/muscularman-building-biceps.jpg';
import blog_4 from '../assets/images/gym-crossfit-group-workout-wallpaper-preview.jpg';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const blogsData = [
    {
        title: 'MULTI GYM WORKOUT PLAN FOR BEGINNERS',
        img:blog_1,
        id:'blog_1'
      },
    {
        title: 'HOW TO GET THE MOST OUT OF YOUR GYM MEMBERSHIP',
        img:blog_2,
        id:'blog_2'
    },
    {
      title: 'HOW TO GROW YOUR MUSCLE IN OUR GYM HALL',
      img:blog_3,
      id:'blog_3'
    },
    {
        title: 'SEPTEMBER LEADERBOARD CHALLENGE',
        img:blog_4,
        id:'blog_4'
      }
    ]
    
       const styles = {
        blogs_content: {
          flex: '1',
          width:'100%',
          display: 'grid',
          gap:'1.5rem',
          minWidth:'400px',
          '@media (width < 500px)':{
            minWidth:'200px'
          }
        },
        blogs_Img_Banner: {
          flex: '1',
          width: '100%',
          display: 'grid',
          position:'relative',
           placeItems:'center',
          minWidth:'400px',
          height:'50rem',
          '& > img': {
            width: '100%',
            position:'absolute',
            height:'calc(100% + 16rem)',
            bottom:'0rem',
            '@media (width < 1150px)':{
              position:'static',
              height:'inherit',
              width: 'inherit',
            },
          },
          '@media (width < 500px)':{
            minWidth:'200px'
          },
          '@media (width < 1150px)':{
            width: '35rem',
          },
          '@media (width < 650px)': {
            width:'20rem',
            height: '35rem',
            },
          '@media (width < 380px)': {
            width:'15rem',
            height: '30rem',
            },
           },
           blog: {
             display: 'flex',
             flexDirection: 'column',
             justifyContent:'space-between',
             gap:'1rem',
             background:'#000',
             borderRadius:'15px',
             '& >img':{
                 borderRadius:'15px 15px 0 0',
                 width: '100%',
               height: '180px',
               '@media (width < 700px)': {
                height:'20rem'     
              },
               '@media (width < 450px)': {
                height:'15rem'     
              },
               '@media (width < 330px)': {
                height:'12rem'     
              }
             }
           },
           buttonGroup: {
        height:'fit-content',
        display: "flex",
        justifyContent: "center",
        alignItems:'center',
        '& > button': {
        display: "grid",
        placeItems:'center',
          background: "#ed0202",
          cursor: "pointer",
          border:'none',
          width: "50px",
          height:'50px',
          mx:'10px',
          borderRadius:'50%',
          color: "#BBC7D7",
          transition: "background 0.25s",
          "&:hover": {
            background:"rgba(0,0,0,0.8)"
          },
          "&:focus": {
            outline: 0,
            background:"rgba(0,0,0,0.8)"
          },
        },
      },
        }

const Blogs = () => {
    useEffect(() => {
      const container = document.querySelector('.blog_post_wrapper');
      const containerChildren = document.querySelectorAll('.blog_post_wrapper > *');


      if (window.innerWidth >= 700) {
    document.querySelector('.button__group').children[0].addEventListener('click', () => {
       container.scrollTo({ left: 0, behavior: "smooth" });
      });
      
      document.querySelector('.button__group').children[1].addEventListener('click', () => {
        container.scrollTo({ left: container.clientWidth, behavior: "smooth" });
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target === container.firstChild && container.scrollLeft <= 0) {
                container.prepend(container.children[container.children.length - 1]);
                container.scrollLeft = entry.target.clientWidth
            } 
          if ( entry.target === container.lastChild) {
            container.append(container.children[0]);
            container.scrollLeft = container.clientWidth / 2 
          } 
      }
    })
  }, { threshold:[1]});
} else {
        var currentBlog;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        currentBlog = entry.target
        if (entry.target === container.firstChild ) {
          container.prepend(container.children[container.children.length - 1]);
          container.scrollLeft = container.clientWidth
        }
        if ( entry.target === container.lastChild ) {
          container.append(container.children[0]);
          container.scrollLeft = container.scrollWidth - container.clientWidth * 2  
        }
      }
    })
      }, { threshold:[1],root:container,rootMargin:'1px'}); 
  container.scrollBy(container.clientWidth,0)
document.querySelector('.button__group').children[0].addEventListener('click', () => {
          if(currentBlog){
            currentBlog.previousSibling.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
          }
      });
        document.querySelector('.button__group').children[1].addEventListener('click', () => {
          if (currentBlog) {
            currentBlog.nextSibling.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
          }
    });
      
}


containerChildren.forEach(item => observer.observe(item))
     return () => {
    containerChildren.forEach(item=>observer.unobserve(item))
      document.querySelector('.button__group')?.children[0].removeEventListener('click', () => {
    
      });
        document.querySelector('.button__group')?.children[1].removeEventListener('click', () => {

    });
    };
  }, [])

  return (
      <Box className='features_wrapper'>
        <Box sx={{width:'90%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'6rem 1.5rem 0rem',gap:'2rem','@media (width < 1150px)':{flexDirection:"column"}}} m='0 auto'>
        <Box sx={styles.blogs_content}>
        <Box mb='1rem'>
      <h4 className='section_subheading'>News</h4>
      <h2 className='section_heading'>ANOTHER DAY IN THE GYM</h2>
        </Box>
            <Box className='blog_post_wrapper'>
          {
              blogsData.map(({ img, id, title }) => (
              <Box key={title}>
              <Box sx={styles.blog}>
              <img src={img} alt={id}/>
                <Box sx={{padding:' 0 1rem 1rem'}}>
                  <h3 className='section_heading_3' style={{fontSize:'18px'}}>{title}</h3>
                  <p className='section_paragraph' style={{fontSize:'15px'}}>September 8 ,2023</p>
                </Box>
                </Box>
                </Box>
            ))
          }
        </Box>
        <Stack sx={{justifyContent: 'center', alignItems: 'center',mt:'10px'}} >
        <Box className="button__group" sx={styles.buttonGroup}>
          <button  aria-label="Previous">
            <ArrowLeftIcon sx={{fontSize:'40px'}}/>
          </button>
          <button  aria-label="Next">
            <ArrowRightIcon sx={{fontSize:'40px'}}/>
          </button>
      </Box>
    </Stack>
        </Box>
        <Box sx={styles.blogs_Img_Banner}>
      <img src={blogsImg} alt='Feature_img' />
      </Box>  
      </Box>
      </Box>
  )
}

export default Blogs