import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoChannelTitle, demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail, marginTop}) => {
  //console.log(channelDetail)
    return (
    <Box
    sx={{
        boxShadow: 'none',
        borderRadius: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '356px', md: '320px'},
        height: '326px',
        margin: 'auto',
        marginTop: marginTop
    }}
    >
        <Link to={ `/channel/${channelDetail?.id?.channelId}` }>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', color: '#fff' }}>
                <CardMedia 
                image={ channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture }
                alt={ channelDetail?.snippet?.title }
                sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}
                />
                <Typography variant='h6'>
                    { channelDetail?.snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ fontSize: 14, color: 'gray', ml: '5px' }}/>
                </Typography>
                {channelDetail?.statistics?. suscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.suscriberCount).toLocaleString() } Suscribers
                    </Typography>
                )}
            </CardContent>
        </Link>

    </Box>
  )
}

export default ChannelCard