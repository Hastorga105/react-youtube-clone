import { Link } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants'//placeholder data

const VideoCard = ({ video: { id: {videoId }, snippet } }) => {//obtains videoId from video.id and snippet
    //console.log(video)
  return (
    <Card className='' sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image= { snippet?.thumbnails?.high?.url /*/? for default undefined*/ }
            alt={snippet?.title}
            sx={{ width: 358, height: 180 }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                    { snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60) /*If we have the title render the title, if not, render the placeholder */}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant='subtitle2' fontWeight="bold" color="gray">
                    { snippet?.channelTitle || demoChannelTitle /*If we have the title render the title, if not, render the placeholder */}
                    {/*console.log(snippet?.channelTitle)*/}
                    <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard