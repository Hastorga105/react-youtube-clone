import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    //method: 'GET',
    //url: 'BASE_URL',
    params: {
        maxResults: 50,
        //part: 'snippet', videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': 'b182e38ba4msh47049a86b97682dp154a29jsn2a8e531d3e89',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  /*
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });*/


  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };
  