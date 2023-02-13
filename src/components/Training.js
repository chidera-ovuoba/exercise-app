import { Box, Button } from '@mui/material';
import class_1 from '../assets/images/3210186.jpg';
import class_2 from '../assets/images/body_building.jpeg';
import class_3 from '../assets/images/yoga.jpeg';
const Training = () => {
    const trainingData = [
        {
            img: class_1,
            title: 'cardio pump',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ratione mollitia illo dolorem pariatur aspernatur ipsam totam in delectus est.'
        },
        {
            img: class_2,
            title: 'muscle building',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ratione mollitia illo dolorem pariatur aspernatur ipsam totam in delectus est.'
        },
        {
            img: class_3,
            title: 'yoga balance',
            p: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas ratione mollitia illo dolorem pariatur aspernatur ipsam totam in delectus est.'
        },
    ];

    const styles = {
        training_header: {
            
        },
        training_classes_wrapper: {
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > *': {
                flex:'1'
            }
        },
        training_class: {
            display: 'grid',
            gap: '2rem',
            my:'4rem',
            placeItems:'center',
            '& > img': {
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                filter: 'grayscale(50%)',
                transition:'all 0.5s',
                objectFit:'cover'
            },
            '& > h3': {
                textTransform:'uppercase'
            },
             '&:hover > img': {
                    filter: 'grayscale(0%)',
                    transform: 'scale(1.2)',
                    transition:'all 0.5s'
                }
        }
    }


  return (
      <>
      <Box className='section_wrapper' sx={{width:'90%',textAlign:'center'}} m='0 auto'>
      <Box sx={styles.training_header}>
      <h4 className='section_subheading'>Training</h4>
      <h2 className='section_heading'>TOP TRAINING</h2>
      <Box display="flex" gap={10} sx={styles.training_classes_wrapper}>
      {
        trainingData.map(({img,p,title})=>(
         <Box key={title} sx={styles.training_class}>
          <img src={img} />
          <h3 className='section_heading_3'>{title}</h3>
          <p className='section_paragraph'>{p}</p>
         </Box>
        ))
      }
      </Box>
      <Button sx={{p:'10px 20px', borderRadius:'20px',background:'#ed0202',color:'white',placeSelf:'start',fontFamily:"'Josefin Sans'",letterSpacing:'0.14em','&:hover':{
        background:'#818181b6'
      }}}>more classes</Button>
      </Box>
      </Box>
      </>
  )
}

export default Training