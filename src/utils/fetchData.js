export const exercisesOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

 export const youtubeUrloptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

// const options = {
//   method: 'GET',
//   url: 'https://fitness-calculator.p.rapidapi.com/activities',
//   params: {intensitylevel: '10'},
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//     'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
//   }
// };
export const bmioptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};
export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();
    return data;
}