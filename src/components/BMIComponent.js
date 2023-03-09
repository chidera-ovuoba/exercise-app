import React, { useState,useEffect } from 'react'
import { Box,TextField,Typography,Select,InputLabel,MenuItem, Button, GlobalStyles, Stack, Chip} from '@mui/material';
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

    const handleBmiSubmit =async (e) => {
        e.preventDefault();
        try {
            const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/bmi?${Object.entries(bmiParamsState).map((item)=>`${item[0]}=${item[1]}`).join('&')}`,bmioptions);
            setBmiState(data.data);
        } catch (err) {
            console.log(err.message)
        }
      }
    const handleBodyFatSubmit =async (e) => {
        e.preventDefault();
        try {
            const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/bodyfat?${Object.entries(bodyFatParams).map((item)=>`${item[0]}=${item[1]}`).join('&')}`,bmioptions);
            setBodyFat(data.data);
        } catch (err) {
            console.log(err.message)
        }
      }
    const handleDailyCalorieSubmit =async (e) => {
        e.preventDefault();
        try {
            const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/dailycalorie?${Object.entries(dailyCalorieParams).map((item)=>`${item[0]}=${item[1]}`).join('&')}`,bmioptions);
            setDailyCalorie(data.data)
        } catch (err) {
            console.log(err.message)
        }
      }
    const handleIdealWeightSubmit =async (e) => {
        e.preventDefault();
        try {
            const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/idealweight?${Object.entries(idealWeightParams).map((item)=>`${item[0]}=${item[1]}`).join('&')}`,bmioptions);
            setIdealWeight(data.data);
        } catch (err) {
            console.log(err.message)
        }
      }
    const handleMacroCalculatorSubmit =async (e) => {
        e.preventDefault();
        try {
            const data = await fetchData(`https://fitness-calculator.p.rapidapi.com/macrocalculator?${Object.entries(macroCalculatorParams).map((item)=>`${item[0]}=${item[1]}`).join('&')}`,bmioptions);
            setMacroCalculator(data.data);
        } catch (err) {
            console.log(err.message)
        }
      }
   



const minMax = {
    ageProps: {
       'min':'0',
       'max':'80'
    },
    weightProps: {
       'min':'40',
       'max':'160'
    },
    heightProps: {
       'min':'130',
       'max':'230'
    },
    neckProps: {
       'min':'20',
       'max':'80'
    },
    waistHipProps: {
       'min':'40',
       'max':'130'
    },
    
 }
    
  return (
      <Box sx={{ alignItems: 'center', justifyContent: 'center', dispay: 'flex',flexDirection:'column' }}>
          <GlobalStyles styles={{
              'div > .MuiInputLabel-root.Mui-focused': { color: '#d32f2f' },
          }} />

          {/* //=========================          bmi              ================*/}

          <Box sx={{width:'100%',gap:'2rem',padding:'4rem',borderBottom:'4px solid #fff','@media (width < 700px)':{padding:'2rem'}}} className='section_wrapper'>
          <Box sx={{flex:'0.6',minWidth:"150px"}}>
          <h2 style={{fontSize:'25px'}} className='section_heading'>BMI(Body Mass Index)</h2>
          <Stack direction="row" spacing={2} mt='10px'>
          <h4 style={{fontSize:'20px',letterSpacing:'0.2em'}} className='section_subheading'>{bmiState?.bmi || 0}</h4>
          <Chip label={bmiState?.health || 'health'} color='error' variant='outlined'/>
          </Stack>
          </Box>
          <Box sx={{flex:'1',display:'flex',gap:'1rem',justifyContent:'center',flexDirection:'column',alignItems:'center'}} component="form" onSubmit={(e)=>{handleBmiSubmit(e)}}>
          <Box sx={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center',alignItems:'center'}}>
          <TextField id="outlined-basic" label="age" variant="outlined" inputProps={minMax.ageProps}  value={bmiParamsState.age || ''} onChange={(e) => setBmiParamsState({ ...bmiParamsState, age: e.target.value })}  type='number' />
           <TextField id="outlined-basic" label="weight (kg)" variant="outlined" inputProps={minMax.weightProps} value={bmiParamsState.weight || ''} onChange={(e) => setBmiParamsState({ ...bmiParamsState, weight: e.target.value })} type='number' />
          <TextField id="outlined-basic" label="height (cm)" variant="outlined" inputProps={minMax.heightProps} value={bmiParamsState.height || ''} onChange={(e) => setBmiParamsState({ ...bmiParamsState, height: e.target.value })} type='number' />
          </Box>
       <Button sx={{p:'10px 20px', borderRadius:'20px',background:'#ed0202',color:'white',fontFamily:"'Josefin Sans'",letterSpacing:'0.14em','&:hover':{
           background:'#818181b6'
           }}} type='submit'>calculate</Button>
        </Box>
          </Box>



          
        <Box sx={{width:'100%',gap:'2rem',padding:'4rem',borderBottom:'4px solid #fff','@media (width < 700px)':{padding:'2rem'}}} className='section_wrapper'>
          <Box sx={{flex:'0.6',minWidth:"150px"}}>
          <h2 style={{fontSize:'25px'}} className='section_heading'>Body Fat Mass</h2>
          <Stack direction="row" spacing={2} mt='10px'>
          <h4 style={{fontSize:'20px',letterSpacing:'0.2em'}} className='section_subheading'>{bodyFat?.['Body Fat Mass'] || 0}</h4>
          <Chip label={bodyFat?.['Body Fat Category'] || 'health'} color='error' variant='outlined'/>
          </Stack>
          </Box>
          <Box sx={{flex:'1',display:'flex',gap:'1rem',justifyContent:'center',flexDirection:'column',alignItems:'center'}}
           component="form" onSubmit={(e)=>{handleBodyFatSubmit(e)}}
          >
          <Box sx={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center',alignItems:'center'}}>
           <TextField id="outlined-basic" label="age" variant="outlined" value={bodyFatParams.age || ''} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, age: e.target.value }) } inputProps={minMax.ageProps} type='number'  />
           
            <TextField id="outlined-basic" label="weight (kg)" variant="outlined" value={bodyFatParams.weight || ''} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, weight: e.target.value }) } inputProps={minMax.weightProps} type='number' />
            
           <TextField id="outlined-basic" label="height (cm)" variant="outlined" value={bodyFatParams.height || ''} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, height: e.target.value }) } inputProps={minMax.heightProps} type='number' />
           
           <TextField id="outlined-basic" label="neck (cm)" variant="outlined" value={bodyFatParams.neck || ''} onChange={(e) => setBodyFatParams({ ...bodyFatParams, neck: e.target.value }) } inputProps={minMax.neckProps} type='number' />
           
          <TextField id="outlined-basic" label="waist (cm)" variant="outlined" value={bodyFatParams.waist || ''} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, waist: e.target.value }) } inputProps={minMax.waistHipProps} type='number' />
          
          <TextField id="outlined-basic" label="hip (cm)" variant="outlined" value={bodyFatParams.hip || ''} onChange={ (e) => setBodyFatParams({ ...bodyFatParams, hip: e.target.value }) } inputProps={minMax.waistHipProps} type='number' />
            <Select
            displayEmpty
            id="demo-simple-select"
            value={bodyFatParams?.gender || ''}
            variant='filled'
            label="Gender"
            onChange={(e)=>setBodyFatParams({...bodyFatParams,gender:e.target.value })}
            renderValue={(selected) => {
            if (selected?.length === 0) {
              return <em>Gender</em>;
            }

            return selected
            }}
            color='error'
            >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
          </Select>
          </Box>
          <Button sx={{p:'10px 20px', borderRadius:'20px',background:'#ed0202',color:'white',fontFamily:"'Josefin Sans'",letterSpacing:'0.14em','&:hover':{
           background:'#818181b6'
           }}} type='submit'>calculate</Button>
          </Box>
          </Box>
          
          
          {/* //========================= daily calorire================*/}
          
           <Box sx={{width:'100%',gap:'2rem',padding:'4rem',borderBottom:'4px solid #fff','@media (width < 700px)':{padding:'2rem'}}} className='section_wrapper'>
          <Box sx={{flex:'0.6',minWidth:"150px"}}>
          <h2 style={{fontSize:'25px'}} className='section_heading'>Daily Calorie</h2>
          <h4 style={{fontSize:'20px',letterSpacing:'0.2em',marginTop:'10px'}} className='section_subheading'>{dailyCalorie?.BMR || 0}</h4> 
           </Box>
          <Box sx={{flex:'1',display:'flex',gap:'1rem',justifyContent:'center',flexDirection:'column',alignItems:'center'}}
          component="form" onSubmit={(e)=>{handleDailyCalorieSubmit(e)}}
          >
          <Box sx={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center',alignItems:'center'}}>
          <TextField id="outlined-basic" label="age" variant="outlined" value={dailyCalorieParams.age || ''} onChange={(e) => setDailyCalorieParams({ ...dailyCalorieParams, age: e.target.value }) } inputProps={minMax.ageProps} type='number' />
          <TextField id="outlined-basic" label="weight (kg)" variant="outlined" value={dailyCalorieParams.weight || ''} onChange={ (e) => setDailyCalorieParams({ ...dailyCalorieParams, weight: e.target.value }) }  inputProps={minMax.weightProps} type='number'/>
        <TextField id="outlined-basic" label="height (cm)" variant="outlined" value={dailyCalorieParams.height || ''} onChange={ (e) => setDailyCalorieParams({ ...dailyCalorieParams, height: e.target.value }) }  inputProps={minMax.heightProps} type='number'/>
           <Select
            id="demo-simple-select"
            value={dailyCalorieParams?.gender || ''}
            label="gender"
            displayEmpty
            variant='filled'
            color='error'
            onChange={(e)=>setDailyCalorieParams({...dailyCalorieParams,gender:e.target.value })}
            renderValue={(selected) => {
            if (selected?.length === 0) {
              return <em>Gender</em>;
            }

            return selected
            }}
            >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
              </Select>
                  
           <Select
            id="demo-simple-select"
            value={dailyCalorieParams?.activitylevel || ''}
            label="Activity Level"
            displayEmpty
            variant='filled'
            color='error'
            onChange={(e)=>setDailyCalorieParams({...dailyCalorieParams,activitylevel:e.target.value })}
            renderValue={(selected) => {
            if (selected?.length === 0) {
              return <em>Activity Level</em>;
            }

            return selected
            }}
            >
            
                 <MenuItem value={'level_1'}>Sedentary: little or no exercise</MenuItem>
                  <MenuItem value={'level_2'}>Exercise 1-3 times/week</MenuItem>
                  <MenuItem value={'level_3'}>Exercise 4-5 times/week</MenuItem>
                  <MenuItem value={'level_4'}>Daily exercise or intense exercise 3-4 times/week</MenuItem>
                  <MenuItem value={'level_5'}>Intense exercise 6-7 times/week</MenuItem>
                 <MenuItem value={'level_6'}>Very intense exercise daily, or physical job</MenuItem>
              </Select>
           </Box>
        <Button sx={{p:'10px 20px', borderRadius:'20px',background:'#ed0202',color:'white',fontFamily:"'Josefin Sans'",letterSpacing:'0.14em','&:hover':{
           background:'#818181b6'
           }}} type='submit'>calculate</Button>
        </Box>
          </Box>


          {/*========================== ideal Weight===========*/}

          <Box sx={{width:'100%',gap:'2rem',padding:'4rem',borderBottom:'4px solid #fff','@media (width < 700px)':{padding:'2rem'}}} className='section_wrapper'>
          <Box sx={{flex:'0.6',minWidth:"150px"}}>
          <h2 style={{fontSize:'25px'}} className='section_heading'>Ideal Weight</h2>
          <h4 style={{fontSize:'20px',letterSpacing:'0.2em',marginTop:'10px'}} className='section_subheading'>{idealWeight?.Devine|| 0}</h4> 
          </Box>
          <Box sx={{flex:'1',display:'flex',gap:'1rem',justifyContent:'center',flexDirection:'column',alignItems:'center'}}
            component="form" onSubmit={(e)=>{handleIdealWeightSubmit(e)}}
          >
          <Box sx={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center',alignItems:'center'}}> 
          <TextField id="outlined-basic" label="height (cm)" variant="outlined" value={idealWeightParams.height || ''} onChange={ (e) => setIdealWeightParams({ ...idealWeightParams, height: e.target.value }) }  inputProps={minMax.heightProps} type='number'/>
           <Select
            id="demo-simple-select"
            value={idealWeightParams?.gender || ''}
            label="Gender"
            displayEmpty
            variant='filled'
            color='error'
            onChange={(e)=>setIdealWeightParams({...idealWeightParams,gender:e.target.value })}
            renderValue={(selected) => {
            if (selected?.length === 0) {
              return <em>Gender</em>;
            }

            return selected
            }}
            >
            <MenuItem value='male'>Male</MenuItem>
            <MenuItem value='female'>Female</MenuItem>
              </Select>
          
           </Box>
       <Button sx={{p:'10px 20px', borderRadius:'20px',background:'#ed0202',color:'white',fontFamily:"'Josefin Sans'",letterSpacing:'0.14em','&:hover':{
           background:'#818181b6'
           }}} type='submit'>calculate</Button>
        </Box>
          </Box>

          
          
          {/*==================== macroCalculator==============================*/}
          
          <Box sx={{width:'100%',gap:'2rem',padding:'4rem',borderBottom:'4px solid #fff','@media (width < 700px)':{padding:'2rem'}}} className='section_wrapper'>
          <Box sx={{flex:'0.6',minWidth:"150px"}}>
          <h2 style={{fontSize:'25px'}} className='section_heading'>Calorie To Be Burnt</h2>
          <h4 style={{fontSize:'20px',letterSpacing:'0.2em',marginTop:'10px'}} className='section_subheading'>{macroCalculator?.calorie || 0}</h4> 
          </Box>
          <Box sx={{flex:'1',display:'flex',gap:'1rem',justifyContent:'center',flexDirection:'column',alignItems:'center'}}
            component="form" onSubmit={(e)=>{handleMacroCalculatorSubmit(e)}}
          >
          <Box sx={{display:'flex',flexWrap:'wrap',gap:'1rem',justifyContent:'center',alignItems:'center'}}> 
            <TextField id="outlined-basic" label="age" variant="outlined" value={macroCalculatorParams.age || ''} onChange={ (e) => setMacroCalculatorParams({ ...macroCalculatorParams, age: e.target.value }) } inputProps={minMax.ageProps} type='number'/>
            <TextField id="outlined-basic" label="weight (kg)" variant="outlined" value={macroCalculatorParams.weight || ''} onChange={ (e) => setMacroCalculatorParams({ ...macroCalculatorParams, weight: e.target.value }) } inputProps={minMax.weightProps} type='number'/>
              <TextField id="outlined-basic" label="height (cm)" variant="outlined" value={macroCalculatorParams.height || ''} onChange={(e) => setMacroCalculatorParams({ ...macroCalculatorParams, height: e.target.value })} inputProps={minMax.heightProps} type='number'/>
           <Select
            id="demo-simple-select"
            value={macroCalculatorParams?.gender || ''}
            label="Gender"
            displayEmpty
            variant='filled'
            color='error'
            onChange={(e)=>setMacroCalculatorParams({...macroCalculatorParams,gender:e.target.value })}
            renderValue={(selected) => {
            if (selected?.length === 0) {
              return <em>Gender</em>;
            }

            return selected
            }}
            >
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
              </Select>
                  
           <Select
            id="demo-simple-select"
            value={macroCalculatorParams?.activitylevel || ''}
            label="Activity Level"
            displayEmpty
            variant='filled'
            color='error'
            onChange={(e)=>setMacroCalculatorParams({...macroCalculatorParams,activitylevel:e.target.value })}
            renderValue={(selected) => {
            if (selected?.length === 0) {
              return <em>Activity Level</em>;
            }

            return selected
            }}
            >
                 <MenuItem value={'1'}>BMR</MenuItem>
                 <MenuItem value={'2'}>Sedentary: little or no exercise</MenuItem>
                  <MenuItem value={'3'}>Exercise 1-3 times/week</MenuItem>
                  <MenuItem value={'4'}>Exercise 4-5 times/week</MenuItem>
                  <MenuItem value={'5'}>Daily exercise or intense exercise 3-4 times/week</MenuItem>
                  <MenuItem value={'6'}>Intense exercise 6-7 times/week</MenuItem>
                 <MenuItem value={'7'}>Very  intense exercise daily, or physical job</MenuItem>
              </Select>
           <Select
            id="demo-simple-select"
            value={macroCalculatorParams?.goal || ''}
            label="Goal"
            displayEmpty
            variant='filled'
            color='error'
            onChange={(e)=>setMacroCalculatorParams({...macroCalculatorParams,goal:e.target.value })}
            renderValue={(selected) => {
            if (selected?.length === 0) {
              return <em>Goal</em>;
            }

            return selected
            }}
            >
                 <MenuItem value={'maintain'}>maintain weight</MenuItem>
                 <MenuItem value={'mildlose'}>Mild weight loss</MenuItem>
                  <MenuItem value={'weightlose'}>Weight loss</MenuItem>
                  <MenuItem value={'extremelose'}>Extreme weight loss</MenuItem>
                  <MenuItem value={'mildgain'}>Mild weight gain</MenuItem>
                  <MenuItem value={'weightgain'}>Weight gain</MenuItem>
                  <MenuItem value={'extremegain'}>Extreme weight gain</MenuItem>
              </Select>
  </Box>
    <Button sx={{p:'10px 20px', borderRadius:'20px',background:'#ed0202',color:'white',fontFamily:"'Josefin Sans'",letterSpacing:'0.14em','&:hover':{
           background:'#818181b6'
           }}} type='submit'>calculate</Button>
          </Box>
          </Box>


      </Box>
  )
}

export default BMIComponent