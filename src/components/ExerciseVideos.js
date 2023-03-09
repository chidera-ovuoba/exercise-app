import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
const ExerciseVideos = ({exerciseVideos,name}) => {
  return (
      <>
      <Box gap='4rem' sx={{ display: 'flex', p: '8rem 0px', alignItems: 'center', justifyContent: 'center', width: '90%', m: '0 auto', mb: "10px"}} className='section_wrapper'>
      <h4 style={{marginBottom:'33px',fontSize:'35px'}} className='section_subheading'>
          Watch <span style={{color:'#ff2625',textTransform:'capitalize'}}>{name}</span> exercise videos
          </h4>
          <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap: 'wrap',gap:'3rem','&>*': {minWidth: '340px' },'@media (width < 600px)':{'& > *': {minWidth: '250px'}} }}>
              {
                  exerciseVideos?.slice(0,3).map((item,i) => {
                      return <a
                          key={i}
                          className='exercise-video'
                          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                          target='_blank'
                          rel ="noreferrer"
                          >
                      <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{width:'100%'}} />
                      <Box sx={{p:"20px"}}>
                              <h2 className='section_subheading' style={{textTransform:'capitalize',fontSize:'20px'}}>{item.video.title}</h2>
                              <h4 className='section_heading' style={{textTransform:'capitalize',fontSize:'18px'}}>{item.video.channelName}</h4>
                      </Box>
                      
                      </a>
                      
                  })
          }
          
          </Box>
          </Box>
          </>
          )
}

export default ExerciseVideos