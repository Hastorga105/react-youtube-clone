import { Stack, Box,  } from "@mui/material"
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos }) => {
  //console.log("Videos:")
  //console.log(videos)

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      { videos[0].map((item, idx) => (
        <Box key={idx}>
          {/*console.log("holaaaaaa ")*/}
          {/*console.log(item)*/}
          {item.id.videoId && <VideoCard video={item} /> /*if item is a video*/}
          {/*console.log("HMMMM")*/}
          {/*console.log(item.id.channelId)*/}
          {item.id.channelId && <ChannelCard channelDetail={item} /> /*if item is a channel*/}
          {item.id.channelId && console.log("title from videos")}
          {item.id.channelId && console.log("item.snippet.channelTitle")}
          </Box>
      )) }
    </Stack>
  )
}

export default Videos