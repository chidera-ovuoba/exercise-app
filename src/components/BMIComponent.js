import React, { useState,useEffect } from 'react'
import { Box,TextField,Typography,Select,InputLabel,MenuItem} from '@mui/material';
import { fetchData,bmioptions } from '../utils/fetchData';
const BMIComponent = () => {
    const [bmiParamsState, setBmiParamsState] = useState({});
    const [bmiState, setBmiState] = useState({});
    const [bodyFatParams, setBodyFatParams] = useState({});
    const [bodyFat, setBodyFat] = useState({});
    const [dailyCalorieParams, setDailyCalorieParams] = useState({});
    const [dailyCalorie, setDailyCalorie] = useState({});
    const [idealWeightParams, setIdealWeightParams] = useState({});
    const [idealWeight, setIdealWeight] = useState({});
    const [macroCalculatorParams, setMacroCalculatorParams] = useState({});
     const [macroCalculator, setMacroCalculator] = useState({});
    // useEffect(() => {
    //     const fetchBmiData = async() => {
    //         const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/bmi?age=${bmiParamsState?.age}&weight=${bmiParamsState?.weight}&height=${bmiParamsState?.height}`, bmioptions);
    //         console.log(data.data);
    //         setBmiState(data.data);
    //     } 
    //     fetchBmiData();
    // },[bmiParamsState])

    // useEffect(() => {
    //     // console.log('hi');
    //     // console.log(bodyFatParams);
    //     const fetchBodyFatData = async() => {
    //         const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/bodyfat?age=${bodyFatParams?.age}&gender=${bodyFatParams?.gender}&weight=${bodyFatParams?.weight}&height=${bodyFatParams?.height}&neck=${bodyFatParams?.neck}&waist=${bodyFatParams?.waist}&hip=${bodyFatParams?.hip}`, bmioptions);
    //         console.log(data.data);
    //         setBodyFat(data.data);
    //     } 
    //     fetchBodyFatData();
    // }, [bodyFatParams.gender])
    
//      useEffect(() => {
//         const fetchdailyCalorieData = async() => {
//             const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${dailyCalorieParams?.age}&gender=${dailyCalorieParams?.gender}&weight=${dailyCalorieParams?.weight}&height=${dailyCalorieParams?.height}&activitylevel=${dailyCalorieParams?.activity_level}`, bmioptions);
//             console.log(data.data);
//             setDailyCalorie(data.data);
//         } 
//         fetchdailyCalorieData();
//    },[dailyCalorieParams.gender])

// useEffect(() => {
//         const fetchidealWeightData = async() => {
//             const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/idealweight?gender=${idealWeightParams?.gender}&height=${idealWeightParams?.height}`, bmioptions);
//             console.log(data.data);
//             setIdealWeight(data.data);
//         } 
//         fetchidealWeightData();
//    },[idealWeightParams.gender])

//  useEffect(() => {
//      const fetchmacroCalculatorData = async () => {
//         const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/macrocalculator?age=${macroCalculatorParams?.age}&gender=${macroCalculatorParams?.gender}&weight=${macroCalculatorParams?.weight}&height=${macroCalculatorParams?.height}&activitylevel=${macroCalculatorParams?.activity_level}&goal=${macroCalculatorParams.goal}`,bmioptions);
//             console.log(data.data);
//             setMacroCalculator(data.data);
//         } 
//         fetchmacroCalculatorData();
//    },[macroCalculatorParams.gender])


//    useEffect(() => {
//      const fetchmacroCalculatorData = async () => {
//         const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/activities?intensitylevel=1`,bmioptions);
//          console.log(data);
//         //  console.log(data.data.map((item) => {
//         //      return item;
//         //  }))
//             // setMacroCalculator(data.data);
//         } 
//         fetchmacroCalculatorData();
//    }, [])
    
    //   useEffect(() => {
    //  const fetchmacroCalculatorData = async () => {
    //     const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/burnedcalorie?activityid=bi_1&activitymin=25&weight=75`,bmioptions);
    //      console.log(data.data);
    //     //  console.log(data.data.map((item) => {
    //     //      return item.activity;
    //     //  }))
    //         // setMacroCalculator(data.data);
    //     } 
    //     fetchmacroCalculatorData();
    //   }, [])
    

//         useEffect(() => {
//      const fetchmacroCalculatorData = async () => {
//         const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/food?foodid=SR25_1_1`,bmioptions);
//          console.log(data.data);
//         //  console.log(data.data.map((item) => {
//         //      return item.activity;
//         //  }))
//             // setMacroCalculator(data.data);
//         } 
//         fetchmacroCalculatorData();
//    },[])

    
    //     useEffect(() => {
    //  const fetchmacroCalculatorData = async () => {
    //     const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/foodids?subtablename=SR25_1`,bmioptions);
    //      console.log(data.data);
    //     //  console.log(data.data.map((item) => {
    //     //      return item.activity;
    //     //  }))
    //         // setMacroCalculator(data.data);
    //     } 
    //     fetchmacroCalculatorData();
    //     }, [])
    
      useEffect(() => {
     const fetchmacroCalculatorData = async () => {
        const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/foodids/subtablenames?tablename=SR25`,bmioptions);
         console.log(data.data);
         console.log(data.data.map((item) => {
             return item.subDataType;
         }))
            // setMacroCalculator(data.data);
        } 
        fetchmacroCalculatorData();
   },[])

    
  return (
      <Box sx={{ alignItems: 'center', justifyContent: 'center', width: '100vw', display: 'flex',flexDirection:'column' }} mt='50px' >
          <Box>
          <TextField id="outlined-basic" label="age" variant="outlined" value={bmiParamsState.age} onChange={(e) => setBmiParamsState({ ...bmiParamsState, age: e.target.value })} />
           <TextField id="outlined-basic" label="weight" variant="outlined" value={bmiParamsState.weight} onChange={(e) => setBmiParamsState({ ...bmiParamsState, weight: e.target.value })} />
          <TextField id="outlined-basic" label="height" variant="outlined" value={bmiParamsState.height} onChange={(e) => setBmiParamsState({ ...bmiParamsState, height: e.target.value })} />
          
          <Typography>{bmiState?.bmi}</Typography>
          </Box>




        <Box display='flex' mt='50px' flexWrap='wrap'>
           <TextField id="outlined-basic" label="age" variant="outlined" value={bodyFatParams.age} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, age: e.target.value }) } />
            <TextField id="outlined-basic" label="weight" variant="outlined" value={bodyFatParams.weight} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, weight: e.target.value }) } />
           <TextField id="outlined-basic" label="height" variant="outlined" value={bodyFatParams.height} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, height: e.target.value }) } />
           <TextField id="outlined-basic" label="neck" variant="outlined" value={bodyFatParams.neck} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, neck: e.target.value }) } />
          <TextField id="outlined-basic" label="waist" variant="outlined" value={bodyFatParams.waist} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, waist: e.target.value }) } />
          <TextField id="outlined-basic" label="hip" variant="outlined" value={bodyFatParams.hip} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, hip: e.target.value }) } />
            
              <InputLabel id="demo-simple-select-label">{bodyFatParams?.gender}</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=''
            label="Age"
            onChange={(e)=>setBodyFatParams({...bodyFatParams,gender:e.target.value })}
            >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
  </Select>
          <Typography>{bodyFat?.['Body Fat Mass']}</Typography>
          </Box>

          {/* //========================= daily calorire================*/}
          
          <Box display='flex' mt='50px' flexWrap='wrap'>
               <TextField id="outlined-basic" label="height" variant="outlined" value={dailyCalorieParams.height} onChange={ (e) => setDailyCalorieParams({ ...dailyCalorieParams, height: e.target.value }) } />
           <TextField id="outlined-basic" label="age" variant="outlined" value={dailyCalorieParams.neck} onChange={ (e) => setDailyCalorieParams({ ...dailyCalorieParams, age: e.target.value }) } />
          <TextField id="outlined-basic" label="weight" variant="outlined" value={dailyCalorieParams.weight} onChange={ (e) => setDailyCalorieParams({ ...dailyCalorieParams, weight: e.target.value }) } />
              <InputLabel id="demo-simple-select-label">{dailyCalorieParams?.gender}</InputLabel>
           <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value=''
            label="Age"
            onChange={(e)=>setDailyCalorieParams({...dailyCalorieParams,gender:e.target.value })}
            >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
              </Select>
                  
              <InputLabel id="demo-select-label">{dailyCalorieParams?.activity_level}</InputLabel>
           <Select
            labelId="demo-select-label"
            id="demo-simple-select"
            value=''
            label="Age"
            onChange={(e)=>setDailyCalorieParams({...dailyCalorieParams,activity_level:e.target.value })}
            >
            
                 <MenuItem value={'level_1'}>Sedentary: little or no exercise</MenuItem>
                  <MenuItem value={'level_2'}>Exercise 1-3 times/week</MenuItem>
                  <MenuItem value={'level_3'}>Exercise 4-5 times/week</MenuItem>
                  <MenuItem value={'level_4'}>Daily exercise or intense exercise 3-4 times/week</MenuItem>
                  <MenuItem value={'level_5'}>Intense exercise 6-7 times/week</MenuItem>
                 <MenuItem value={'level_6'}>Very intense exercise daily, or physical job</MenuItem>
              </Select>
              <Typography>{dailyCalorie?.BMR}</Typography>
          </Box>


          {/*========================== ideal Weight===========*/}

          <Box display='flex' mt='50px' flexWrap='wrap'>
          <TextField id="outlined-basic" label="height" variant="outlined" value={idealWeightParams.height} onChange={ (e) => setIdealWeightParams({ ...idealWeightParams, height: e.target.value }) } />
              <InputLabel id="demo-simple-selec-label">{idealWeightParams?.gender}</InputLabel>
           <Select
            labelId="demo-simple-selec-label"
            id="demo-simple-select"
            value=''
            label="Age"
            onChange={(e)=>setIdealWeightParams({...idealWeightParams,gender:e.target.value })}
            >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
              </Select>
          
              <Typography>{idealWeight?.Devine}</Typography>
          </Box>

          
          
          {/*==================== macroCalculator==============================*/}

          <Box display='flex' mt='50px' flexWrap='wrap'>
            <TextField id="outlined-basic" label="age" variant="outlined" value={macroCalculatorParams.age} onChange={ (e) => setMacroCalculatorParams({ ...macroCalculatorParams, age: e.target.value }) } />
            <TextField id="outlined-basic" label="weight" variant="outlined" value={macroCalculatorParams.weight} onChange={ (e) => setMacroCalculatorParams({ ...macroCalculatorParams, weight: e.target.value }) } />
              <TextField id="outlined-basic" label="height" variant="outlined" value={macroCalculatorParams.height} onChange={(e) => setMacroCalculatorParams({ ...macroCalculatorParams, height: e.target.value })} />
                 <InputLabel id="demo-simple-sele-label">{macroCalculatorParams?.gender}</InputLabel>
           <Select
            labelId="demo-simple-sele-label"
            id="demo-simple-select"
            value=''
            label="Age"
            onChange={(e)=>setMacroCalculatorParams({...macroCalculatorParams,gender:e.target.value })}
            >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
              </Select>
                  
              <InputLabel id="demo-select-label">{macroCalculatorParams?.activity_level}</InputLabel>
           <Select
            labelId="demo-select-label"
            id="demo-simple-select"
            value=''
            label="Age"
            onChange={(e)=>setMacroCalculatorParams({...macroCalculatorParams,activity_level:e.target.value })}
            >
                 <MenuItem value={'1'}>BMR</MenuItem>
                 <MenuItem value={'2'}>Sedentary: little or no exercise</MenuItem>
                  <MenuItem value={'3'}>Exercise 1-3 times/week</MenuItem>
                  <MenuItem value={'4'}>Exercise 4-5 times/week</MenuItem>
                  <MenuItem value={'5'}>Daily exercise or intense exercise 3-4 times/week</MenuItem>
                  <MenuItem value={'6'}>Intense exercise 6-7 times/week</MenuItem>
                 <MenuItem value={'7'}>Very intense exercise daily, or physical job</MenuItem>
              </Select>

                  <InputLabel id="demo-select-label">{macroCalculatorParams?.goal}</InputLabel>
           <Select
            labelId="demo-select-label"
            id="demo-simple-select"
            value=''
            label="Age"
            onChange={(e)=>setMacroCalculatorParams({...macroCalculatorParams,goal:e.target.value })}
            >
                 <MenuItem value={'maintain'}>maintain weight</MenuItem>
                 <MenuItem value={'mildlose'}>Mild weight loss</MenuItem>
                  <MenuItem value={'weightlose'}>Weight loss</MenuItem>
                  <MenuItem value={'extremelose'}>Extreme weight loss</MenuItem>
                  <MenuItem value={'mildgain'}>Mild weight gain</MenuItem>
                  <MenuItem value={'weightgain'}>Weight gain</MenuItem>
                  <MenuItem value={'extremegain'}>Extreme weight gain</MenuItem>
              </Select>
           <Typography>{macroCalculator?.calorie}</Typography>
  </Box>


      </Box>
  )
}

export default BMIComponent