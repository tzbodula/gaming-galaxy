import { GetServerSideProps } from 'next';
import LogoSquare from '../../../../../public/img/logo/logo-square.png'
import youtubeSearch from "youtube-search"
import React, { useEffect, useState } from 'react';
import { Audience, YoutubeContent, Calendar, TwitchContent, Stacked, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './create';
import { Navbar, Footer, Sidebar, ThemeSettings } from './create';
import { useStateContext } from '../context/ContextProvider';

function GameDetails({data, twitchData, youtubeData}) {
    const [display, setDisplay] = useState('audience')

    const { setCurrentColor, setCurrentMode, activeMenu, themeSettings} = useStateContext();

    useEffect(() => {
      const currentThemeColor = localStorage.getItem('colorMode');
      const currentThemeMode = localStorage.getItem('themeMode');
      if (currentThemeColor && currentThemeMode) {
        setCurrentColor(currentThemeColor);
        setCurrentMode(currentThemeMode);
      }
    }, []);

    return (
        <div style={{backgroundImage: `linear-gradient(to top, rgba(16, 6, 27, 1), rgba(0, 0, 0, 0.6)), url(${data.background_image})`, backgroundSize: 'cover'}}>
          <div className="flex relative dark:bg-main-dark-bg">

            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar currentDisplay={display} displayChanger={setDisplay}  name={data.name} />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar currentDisplay={display} displayChanger={setDisplay} name={data.name}/>
              </div>
            )}
            <div
              className={
                activeMenu
                  ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                  : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
                <Navbar />
              </div>
              <div>
                <h1 className='text-cloudy-day uppercase mx-auto font-oxanium-semibold text-center'>{data.name}</h1>
                <h3 className='font-oxanium-light w-1/2 italic text-xs text-center mx-auto'>{data.description_raw.substring(0,512)}</h3>
                {themeSettings && (<ThemeSettings />)}
                {
                    display === "audience"
                    ? <Audience/>
                    : display === "twitch"
                    ? <TwitchContent name={data.name} twitchData={twitchData}/>
                    : display === "youtube"
                    ? <YoutubeContent name={data.name} youtubeData={youtubeData}/>
                    : display === "news"
                    ? <Customers/>
                    : display === "todo"
                    ? <Kanban/>
                    : display === "discover"
                    ? <Editor/>
                    : display === "plan"
                    ? <Calendar/>
                    : display === "generate"
                    ? <ColorPicker/>
                    : display === "popularity"
                    ? <Line/>
                    : display === "topic"
                    ? <Area/>
                    : display === "demographics"
                    ? <Bar/>
                    : display === "geography"
                    ? null
                    : display === "twitchdata"
                    ? <Financial/>
                    : display === "youtubedata"
                    ? <ColorMapping/>
                    : display === "market"
                    ? null
                    : null
                }

          
              </div>
              <Footer />
            </div>
          </div>
     
      </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {

    const url = `https://rawg-video-games-database.p.rapidapi.com/games/${context.params.slug}?key=7c148b6d9601409988c060ed4d5fa32d`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1882a8a767msh8ed436be8629f9ep1a33f4jsn12f18c8429fd',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options)

    const data = await res.json()

    let youtubeVideos = []
    var opts: youtubeSearch.YouTubeSearchOptions = {
        maxResults: 100,
        key: process.env.YOUTUBE_API_KEY
      };

      youtubeSearch(data.name, opts, (err, results) => {
        if(err) return console.log(err);
        
        youtubeVideos = results
      });

    //Get Twitch Access Token
    const twitchURL = `https://id.twitch.tv/oauth2/token?client_id=${encodeURIComponent(process.env.TWITCH_ID)}&client_secret=${encodeURIComponent(process.env.TWITCH_SECRET)}&grant_type=client_credentials`;

    const twitchAuthOptions = {
        method: 'POST',
    };
    const twitchAccessToken = await fetch(twitchURL, twitchAuthOptions)

    const twitchAccessTokenData = await twitchAccessToken.json()

    //Get the Twitch ID for the game passed.
    const twitchGameIDURL = `https://api.twitch.tv/helix/games?name=${data.name}`

    const twitchGameIDOptions = {
        method: 'GET',
        headers: ({
            'Authorization': `Bearer ${twitchAccessTokenData.access_token}`,
            'Client-Id': `${process.env.TWITCH_ID}`
        })
    }

    const twitchGameData = await fetch(twitchGameIDURL, twitchGameIDOptions)

    const twitchGameDataResponse = await twitchGameData.json()


    // from retrieved videos, retrieve the video and associated channel ID and put them into a key value pair
    let channelVideos = []

    youtubeVideos.map((video) => {

      const youtubeData = {
        videoID: video.id,
        channelID: video.channelId,
        channelName: video.channelTitle,
        title: video.title,
        description: video.description,
        published: video.publishedAt
      }
      channelVideos.push(youtubeData)
    })

    


    let videoCommaSeperatedList = ""
    let channelCommaSeperatedList = ""
    let videoIDList = []
    let channelIDList = []

    channelVideos.map((video) => {
      videoIDList.push(video.videoID)
      channelIDList.push(video.channelID)
    })

    videoCommaSeperatedList = videoIDList.join(',')
    channelCommaSeperatedList = channelIDList.join(',')

    const youtubeVideosURL = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoCommaSeperatedList}&key=${process.env.YOUTUBE_API_KEY}`

    const youtubeVideoData = await fetch(youtubeVideosURL)

    const youtubeVideoDataResponse = await youtubeVideoData.json()

    const youtubeChannelsURL = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelCommaSeperatedList}&key=${process.env.YOUTUBE_API_KEY}`

    const youtubeChannelData = await fetch(youtubeChannelsURL)

    const youtubeChannelDataResponse = await youtubeChannelData.json()

    //Move through youtubeVideoDataResponse, create "video data array"

    let videoData = []
    youtubeVideoDataResponse.items.map((video) => {
        const data = {
            videoID: video.id,
            viewCount: video.statistics.viewCount,
            likeCount: video.statistics.likeCount,
            favoriteCount: video.statistics.favoriteCount,
            commentCount: video.statistics.commentCount
        }
        videoData.push(data)
    })

    //Move through youtubeChannelDataResponse, create "channel data array"
    let channelData = []
    console.log("youtube channel data response: " + JSON.stringify(youtubeChannelDataResponse))
    youtubeChannelDataResponse.items.map((channel) => {
        const data = {
            channelID: channel.id,
            channelViewCount: channel.statistics.viewCount,
            channelSubscriberCount: channel.statistics.subscriberCount,
            channelVideoCount: channel.statistics.videoCount,
        }
        channelData.push(data)
      
    })

    let topYoutubeData = []
    //Move through channelVideos, get index of the videoDataArray where videoID matches, assign the stats a new object and do the same for channel.
    channelVideos.map((video) => {
        console.log('Video data is' + JSON.stringify(videoData))
        console.log('Channel data is' + JSON.stringify(channelData))
        let matchingVideo = videoData.find(e => e.videoID === video.videoID)
        let matchingChannel = channelData.find(e => e.channelID === video.channelID)
        console.log('Matching Video data is' + JSON.stringify(matchingVideo))
        console.log('Matching Channel data is' + JSON.stringify(matchingChannel))
        let views = matchingVideo.views
        let likes = matchingVideo.likes
        let comments = matchingVideo.comments
        let favorites = matchingVideo.favorites

        let creatorViewsCount = matchingChannel.channelViewCount
        let creatorSubscribersCount = matchingChannel.channelSubscribersCount
        let creatorVideosCount = matchingChannel.channelVideosCount

        const youtubeData = {
            videoID: video.videoID,
            channelID: video.channelID,
            channelName: video.channelName,
            title: video.title,
            description: video.description,
            published: video.published,
            viewCount: views,
            likeCount: likes,
            commentCount: comments,
            favoriteCount: favorites,
            channelViewCount: creatorViewsCount,
            channelSubscriberCount: creatorSubscribersCount,
            channelVideoCount: creatorVideosCount
        }

        topYoutubeData.push(youtubeData)
    })

    console.log('Top Youtube Data is ' + topYoutubeData)

    if (twitchGameDataResponse.data[0] != undefined) {
        const twitchGameID = twitchGameDataResponse.data[0].id

        const twitchStreamersURL = `https://api.twitch.tv/helix/streams?game_id=${encodeURIComponent(twitchGameID)}&first=100`

        const twitchStreamersOptions = {
            method: 'GET',
            headers: ({
                'Authorization': `Bearer ${twitchAccessTokenData.access_token}`,
                'Client-Id': `${process.env.TWITCH_ID}`
            })
        }
    
        const twitchStreamData = await fetch(twitchStreamersURL, twitchStreamersOptions)
  
        const twitchStreamDataResponse = await twitchStreamData.json()
    


        //let profileURL = twitchUserDataResponse.data.profile_image_url
  
        let streams = []
        let streamers = []
        for (let stream of twitchStreamDataResponse.data) {
                let userID = stream.user_id
        
                const twitchUsersURL = `https://api.twitch.tv/helix/users/?id=${encodeURIComponent(userID)}`
            
                const twitchUsersOptions = {
                    method: 'GET',
                    headers: ({
                        'Authorization': `Bearer ${twitchAccessTokenData.access_token}`,
                        'Client-Id': `${process.env.TWITCH_ID}`
                    })
                }
                const twitchUserData = await fetch(twitchUsersURL, twitchUsersOptions)
            
                const twitchUserDataResponse = await twitchUserData.json()
   
                const streamData = {
                    StreamLink: `https://twitch.tv/${stream.user_login}`,
                    Streamer: stream.user_login,
                    StreamName: stream.title,
                    CurrentViewers: stream.viewer_count,
                    StartedAt: stream.started_at,
                    Country: stream.language,
                    StreamerPFP: twitchUserDataResponse.data[0].profile_image_url
                }
                
                streamers.push(stream.user_login)
                streams.push(streamData)
        }



        return {
            props: {data: data, twitchData: streams}
        }
    } else {
        const streamData = {
            StreamLink: `https://twitch.tv/gaminggalaxytwitch`,
            Streamer: "Nobody!",
            StreamName: "Nobody is streaming this game!",
            CurrentViewers: "None",
            StartedAt: "2023-05-18T18:37:01Z",
            Country: 'US',
            StreamerPFP: LogoSquare
        }
        return {

            
            props: {data: data, twitchData: streamData, youtubeData: topYoutubeData}
        }
    }

}

export default GameDetails;