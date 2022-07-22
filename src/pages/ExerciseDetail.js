import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { exercisesOptions, fetchData,youtubeUrloptions } from '../utils/fetchData';
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
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
      const details = await fetchData(`${exerciseDbUrl}/exercises`, exercisesOptions);
      const detail= await details.find((item) => item.id === id);
      setExerciseDetail(detail);
      
      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${detail.name}/`, youtubeUrloptions);
    setExerciseVideos(exerciseVideoData);


      const targetDetails = await fetchData(`${exerciseDbUrl}/exercises/target/${detail.target}`, exercisesOptions);
      // const targetDetail= await targetDetails.find((item) => item.id === id);
      console.log(targetDetails);
      setTargetDetail(targetDetails);
      
      
      const equipmentDetails = await fetchData(`${exerciseDbUrl}/exercises/equipment/${detail.equipment}`, exercisesOptions);
      // const equipmentDetail= await equipmentDetails.find((item) => item.id === id);
      setEquipmentDetail(equipmentDetails);
    }
    fetchExerciseDetail();
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos.contents} name={exerciseDetail.name} />
      <SimilarExercises targetDetail={targetDetail} equipmentDetail={equipmentDetail}/>
    </Box>
  )
}

export default ExerciseDetail