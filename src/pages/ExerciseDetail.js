import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { exercisesOptions, fetchData,youtubeUrloptions } from '../utils/fetchData';
import { Box, Typography } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import Loader from '../components/Loader';
const ExerciseDetail = () => {  
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetDetail, setTargetDetail] = useState([]);
  const [equipmentDetail, setEquipmentDetail] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseDetail = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const detail = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions);
      // const detail= await details.find((item) => item.id === id);
      setExerciseDetail(detail);
      
      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${detail.name}/`, youtubeUrloptions);
    setExerciseVideos(exerciseVideoData);


      const targetDetails = await fetchData(`${exerciseDbUrl}/exercises/target/${detail.target}`, exercisesOptions);
      // const targetDetail= await targetDetails.find((item) => item.id === id);
      // console.log(targetDetails);
      setTargetDetail(targetDetails);
      
      
      const equipmentDetails = await fetchData(`${exerciseDbUrl}/exercises/equipment/${detail.equipment}`, exercisesOptions);
      // const equipmentDetail= await equipmentDetails.find((item) => item.id === id);
      setEquipmentDetail(equipmentDetails);
    }
    fetchExerciseDetail();
  }, [id])
  


  return (
    <Box>
      <Box sx={{width:'90%',display:'flex',alignItems:'center',justifyContent:'center',padding:'0rem 1.5rem',height:'90vh'}} m='0 auto' className='exercises_banner'>
        <Box sx={{mb:'10vh'}}>
        <Typography sx={{fontSize:'5em',fontFamily:"'Black Ops One', cursive",letterSpacing:'0.04em',textAlign:'center',color:'#fff','@media (width <1170px)':{fontSize:'4em'},'@media (width <700px)':{fontSize:'3em'},'@media (width <500px)':{fontSize:'2.2em'}}}>LET'S GET TO IT</Typography>
        <Typography sx={{fontSize:'5em',fontFamily:"'Black Ops One', cursive",letterSpacing:'0.04em',textAlign:'center',textTransform:'uppercase',color:'#ed0202','@media (width <1170px)':{fontSize:'4em'},'@media (width <700px)':{fontSize:'3em'},'@media (width <500px)':{fontSize:'2.5em'}}}>{exerciseDetail.bodyPart} EXERCISE</Typography>
        </Box>
      </Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos.contents} name={exerciseDetail.name} />
      <SimilarExercises targetDetail={targetDetail} equipmentDetail={equipmentDetail}/>
    </Box>
    )
  }

export default ExerciseDetail