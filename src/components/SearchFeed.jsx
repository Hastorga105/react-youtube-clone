import { useState, useEffect} from 'react'
import { Box,  Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

import { Videos } from "./"

import { fetchFromAPI } from '../utils/fetchFromAPI'//get data from the api

const SearchFeed = () => {
  const [ videos, setVideos ] = useState([])
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)//search for the category on the api (promise)
    .then((data) => setVideos(data.items) )//response
  }, [searchTerm]) 

  return (
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }} >
          Search results for: { searchTerm } <span style={{ color: '#F31503' }}>videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed