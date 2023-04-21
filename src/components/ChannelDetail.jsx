import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material'

import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { VideocamOff } from '@mui/icons-material';

const ChannelDetail = () => {
  const [ channelDetail, setChannelDetail ] = useState(null)
  const [ videos, setVideos ] = useState([])
  const { id } = useParams(); //get the id from the url

  useEffect(() => {
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)//search by channel (id), get videos, sort by date
    .then((data) => setVideos(data?.items));
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));//search channel (id), get channel data
    
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)//search by channel (id), get videos, sort by date
    .then((data) => console.log(data.items));

  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(180deg, rgba(105,2,2,1) 0%, rgba(0,1,46,0.5) 100%)',
          zIndex: 10,
          height: '300px'
        }}></div >
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box  p="2" 
      sx={{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
      }}>
      
        <Box sx={{ mr: { sm: '100px' } }}>
          {<Videos videos={videos}></Videos>}

        </Box>

      </Box>
    </Box>
    
  )
}

export default ChannelDetail