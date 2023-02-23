import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Stack } from '@mui/material'
import FeaturesImg from '../assets/images/preview.webp';
import blog_1 from '../assets/images/HD-wallpaper-fitness-group-workouts-weight-loss-exercise-for-abs-gym.jpg';
import blog_2 from '../assets/images/HD-wallpaper-women-doing-exercise-raising-left-hands-while-holding-dumbbells-inside-room.jpg';
import blog_3 from '../assets/images/muscularman-building-biceps.jpg';
import blog_4 from '../assets/images/gym-crossfit-group-workout-wallpaper-preview.jpg';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const featuresData = [
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
        features_content: {
          flex: '1',
          width:'100%',
          display: 'grid',
          gap:'1.5rem',
          minWidth:'400px',
          '@media (width < 500px)':{
            minWidth:'200px'
          }
        },
        features_Img_Banner: {
          flex: '1',
          width: '100%',
          display: 'grid',
          position:'relative',
           placeItems:'center',
          minWidth:'400px',
        //   width: '18rem',
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
            // height:'inherit',
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
           features_wrapper: {
             width: '100%',
             margin: '0',
             gap: '2rem',
             '@media (width < 500px)': {
               gridTemplateColumns:'1fr'
             }
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
              }
             }
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
  const [activeElement, setActiveElement] = useState(null);
    useEffect(() => {
      const container = document.querySelector('.blog_post_wrapper');
      const containerChildren = document.querySelectorAll('.blog_post_wrapper > *');
       var scrollWidth = container.scrollWidth;
      var scrollLeft = container.scrollLeft;
      var width = container.offsetWidth;

      container.addEventListener('touchstart', () => {
       containerChildren.forEach((item) => {
         item.classList.remove('touch_scroll');
      })
     });

    // container.addEventListener('touchend', () => {
    //   container.style = "scroll-snap-type: none;";
    //   // containerChildren.forEach((item) => {
    //   //   item.style ="scroll-snap-align: unset;"
    //   // })
    // });
    document.querySelector('.button__group').children[0].addEventListener('click', () => {
      // e.preventDefault();
      // container.scrollLeft -= 100;
      containerChildren.forEach((item) => {
         item.classList.add('touch_scroll');
      })

       container.scrollTo({ left: containerChildren[3].clientLeft, behavior: "smooth" });
       console.log('gh')
      });
      
      document.querySelector('.button__group').children[1].addEventListener('click', () => {
        // e.preventDefault();
        // container.scrollLeft += 100;
      containerChildren.forEach((item) => {
         item.classList.add('touch_scroll');
      })

        container.scrollTo({ left: containerChildren[3].clientLeft * -1, behavior: "smooth" });
      // container.children[2].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      console.log('gh')      
    });
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target === container.firstChild) {
                // console.log(entry.target,'first')
                entry.target.insertAdjacentElement("beforebegin", entry.target.nextSibling.nextSibling.nextSibling);
            } 
          if (entry.target === container.lastChild) {
          entry.target.insertAdjacentElement("afterend", entry.target.previousSibling.previousSibling.previousSibling);
          } 
      }
    })
    }, { threshold:[1]});

     containerChildren.forEach(item => observer.observe(item))
     
     return () => {
    containerChildren.forEach(item=>observer.unobserve(item))
    
    };
  }, [])

  return (
      <Box className='features_wrapper'>
        <Box sx={{width:'90%',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'6rem 1.5rem 0rem',gap:'2rem','@media (width < 1150px)':{flexDirection:"column"}}} m='0 auto'>
        <Box sx={styles.features_content}>
        <Box mb='1rem'>
      <h4 className='section_subheading'>News</h4>
      <h2 className='section_heading'>ANOTHER DAY IN THE GYM</h2>
        </Box>
            <Box className='blog_post_wrapper'>
          {
            featuresData.map(({ img, id, title }) => (
              <Box sx={styles.blog} key={title}>
              <img src={img} alt={id}/>
                <Box sx={{padding:' 0 1rem 1rem'}}>
                  <h3 className='section_heading_3' style={{fontSize:'18px'}}>{title}</h3>
                  <p className='section_paragraph' style={{fontSize:'15px'}}>September 8 ,2023</p>
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
        <Box sx={styles.features_Img_Banner}>
      <img src={FeaturesImg} alt='Feature_img' />
      </Box>  
      </Box>
      </Box>
  )
}

export default Blogs