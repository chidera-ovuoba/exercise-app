import { Box } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const AccomplishmentsData = [
    {
        title: 'Working Days',
        value: '345',
        img: [<CalendarMonthIcon key='CalendarMonthIcon' />]
    },
    {
        title: 'Satisified Clients',
        value: '2901',
        img: [<PeopleIcon key='PeopleIcon' />]
    },
    {
        title: 'Successful Stories',
        value: '351',
        img: [<WorkspacePremiumIcon key='WorkspacePremiumIcon' />]
    },
    {
        title: 'Perfect Bodies',
        value: '34',
        img: [<InsertEmoticonIcon key='InsertEmoticonIcon' />]
    },
];

const styles = {
    accomplishment_wrapper: {
        padding:'12rem 0rem',
        placeItems: 'center',
        width:'100%'
    },
    accomplishment_container: {
        placeItems: 'center',
        '& > svg': {
            fontSize: '5rem',
            color: '#ed0202',
            marginBottom:'2rem'
        },
        '& > h3': {
            fontSize: '3rem',
            color: '#fff',
            fontWeight:'700'
        },
        '& > p': {
            fontSize: '1.8rem',
            color: '#fff',
            fontWeight:'600'
        }
        
    }
}
const Accomplishments = () => {
  return (
    <>
    <Box className='accomplishments__wrapper'>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit,minmax(250px,1fr))" gap={7} sx={styles.accomplishment_wrapper}>
    {
        AccomplishmentsData.map(({title,img,value})=>(
            <Box key={title} display='grid' sx={styles.accomplishment_container}>
             {img[0]}
             <h3>{value}</h3>
             <p>{title}</p>
            </Box>
        ))
    }
    </Box>
    </Box>
    </>
  )
}

export default Accomplishments