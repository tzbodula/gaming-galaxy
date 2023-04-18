import { useRouter } from 'next/router'

import { useEffect } from 'react'


import youtubeSearch from "youtube-search"

function determineUniquePlatforms(unique) {
    let isPSDuplicate = false
    let isXboxDuplicate = false

    let PSCount = 0;
    let XboxCount = 0;
    unique.map((platform) => {
        if (platform.includes("PlayStation")) {
            PSCount = PSCount + 1
        } else if (platform.includes("Xbox")) {
            XboxCount = XboxCount + 1
        }
    })

    if (PSCount > 1) {
        isPSDuplicate = true
    }

    if (XboxCount > 1) {
        isXboxDuplicate = true
    }

    let uniquePlatforms = []
    if (isPSDuplicate || isXboxDuplicate) {
        uniquePlatforms = unique.filter(item => !item.includes('PlayStation') && !item.includes('Xbox'))
        if (isPSDuplicate) {
            uniquePlatforms.push("PlayStation")
        }

        if (isXboxDuplicate) {
            uniquePlatforms.push("Xbox")
        }

    } else {
        uniquePlatforms = unique
    }

    return uniquePlatforms
}

function GameDetails({data, streams, viewer, videos, channels, top100}) {
    const router = useRouter()
    const { info } = router.query

    useEffect(() => {
        
    })

    const unique = [...new Set(data.platforms.map((platform) => platform.platform.name))];

    let uniquePlatforms = determineUniquePlatforms(unique)

    let platformLength = uniquePlatforms.length

    const getEditingMessage = (genre) => {
        let editingMessage = ""
        if (genre === "Action") {
            editingMessage = "fast paced, storyline-based editing and a quick-cut intro"
        } else if (genre === "Indie") {
            editingMessage = "slower paced editing with a cinematic style"
        } else if (genre === "Adventure") {
            editingMessage = "editing that matches the tempo of the game"
        } else if (genre === "RPG") {
            editingMessage = "slower paced editing with a cinematic style"
        } else if (genre === "Strategy") {
            editingMessage = "editing that matches the tempo of the game"
        } else if (genre === "Shooter") {
            editingMessage = "fast paced, storyline-based editing and a quick-cut intro"
        } else if (genre === "Casual") {
            editingMessage = "editing that's very comedic and laid back"
        } else if (genre === "Simulation") {
            editingMessage = "editing that matches the tempo of the game"
        } else if (genre === "Puzzle") {
            editingMessage = "editing that matches the tempo of the game"           
        } else if (genre === "Arcade") {
            editingMessage = "editing that's laid back and family-friendly"
        } else if (genre === "Platform") {
            editingMessage = "editing that matches the tempo of the game"                
        } else if (genre === "Racing") {
            editingMessage = "fast paced, storyline-based editing and a quick-cut intro"
        } else if (genre === "Massively Multiplayer") {
            editingMessage = "slower paced editing with a cinematic style"
        } else if (genre === "Sports") {
            editingMessage = "fast paced, storyline-based editing and a quick-cut intro"
        } else if (genre === "Fighting") {
            editingMessage = "fast paced, storyline-based editing and a quick-cut intro"
        } else if (genre === "Family") {
            editingMessage = "editing that's laid back and family-friendly"
        } else if (genre === "Board Games") {
            editingMessage = "editing that's laid back and family-friendly"
        } else if (genre === "Educational") {
            editingMessage = "slower paced editing with a cinematic style"
        } else if (genre === "Card") {
            editingMessage = "editing that's very comedic and laid back"
        } else {
            editingMessage = "Unknown"
        }
        return editingMessage
    }

    const getAgeGroup = (year) => {
        let ageRange = ""
        let yearParsed = Number(year)
        
        if (yearParsed >= 1970 && yearParsed <= 1975) {
            ageRange = "45-50"
            
        }
    
        else if (yearParsed >= 1975 && yearParsed <= 1980) {
            ageRange = "40-45"
            
        }

        else if (yearParsed >= 1980 && yearParsed <= 1985) {
            ageRange = "35-40"
            
        }

        else if (yearParsed >= 1985 && yearParsed <= 1990) {
            ageRange = "30-35"
            
        }

        else if (yearParsed >= 1990 && yearParsed <= 1995) {
            ageRange = "25-30"
            
        }

        else if (yearParsed >= 1995 && yearParsed <= 2000) {
            ageRange = "20-25"
            
        }

        else if (yearParsed >= 2000 && yearParsed <= 2005) {
            ageRange = "20-25"
            
        }

        else if (yearParsed >= 2005 && yearParsed <= 2010) {
            ageRange = "15-20"
            
        }

        else if (yearParsed >= 2010 && yearParsed <= 2015) {
            ageRange = "15-20"
            
        }

        else if (yearParsed >= 2015 && yearParsed <= 2020) {
            ageRange = "13-20"
            
        }

        else if (yearParsed >= 2020 && yearParsed <= 2025) {
            ageRange = "13-20"
            
        } else {
            ageRange = "Unknown"
        }

        return ageRange
    }

    let editingMessage = getEditingMessage(data.genres[0].name)

    let ageGroup = getAgeGroup(data.released.substring(0,4))

    return (
        <>
            <div style={{ background: `linear-gradient(180deg, rgba(251,144,98,1) 0%, rgba(219,223,210,0) 50%, rgba(16,6,27,1) 100%), url("${data.background_image}")`, height: "30rem", backgroundPosition: "50% 40%", marginTop: "-2rem" }}>
                <div className='pt-4'>
                    <h1 className='2xs:text-lg md:text-xl lg:text-2xl 2xl:text-5xl mx-auto font-oxanium-bold text-center uppercase italic mt-8 p-4 rounded-full border-2 border-sunset-orange shadow-lg shadow-sunset-orange text-cloudy-day bg-nightsky w-fit'>{data.name}</h1>
                </div>

            </div>
            <div className='bg-nightsky mx-auto text-center'>
            <h2 className='2xs:text-base md:text-lg lg:text-xl 2xl:text-2xl w-3/4 mx-auto'>{data.description_raw.substring(0, 301)}</h2>
            <h3 className=' text-red-500 2xs:text-base md:text-lg lg:text-xl 2xl:text-2xl pt-2 w-3/4 mx-auto'> FEATURE IS STILL BEING BUILT OUT, WILL INCLUDE INFORMATION ABOUT HOW THE AUDIENCE FOR THIS GAME IS TRENDING!!</h3>
            </div>

        </>
    )
}


export async function getServerSideProps(context) {

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
        maxResults: 3,
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
    const twitchGameIDURL = `https://api.twitch.tv/helix/search/categories?query=${encodeURIComponent(data.name)}`

    const twitchGameIDOptions = {
        method: 'GET',
        headers: ({
            'Authorization': `Bearer ${twitchAccessTokenData.access_token}`,
            'Client-Id': `${process.env.TWITCH_ID}`
        })
    }

    const twitchGameData = await fetch(twitchGameIDURL, twitchGameIDOptions)

    const twitchGameDataResponse = await twitchGameData.json()

    //Get the top games on twitch right now, so that we can see where exactly the passed game ranks.
    const twitchTopGameIDURL = `https://api.twitch.tv/helix/games/top?first=100`

    const twitchTopGameIDOptions = {
        method: 'GET',
        headers: ({
            'Authorization': `Bearer ${twitchAccessTokenData.access_token}`,
            'Client-Id': `${process.env.TWITCH_ID}`
        })
    }

    const twitchTopGameData = await fetch(twitchTopGameIDURL, twitchTopGameIDOptions)

    const twitchTopGameDataResponse = await twitchTopGameData.json()

    let isInTop100 = false
    let gameRanking = 0

    for (var i = 0; i < twitchTopGameDataResponse.data.length; i++) {
        if (twitchTopGameDataResponse.data[i].name = data.name) {
            isInTop100 = true
            break;
        } else {
            gameRanking = gameRanking + 1
        }
        
    }

    if (twitchGameDataResponse.data[0] != undefined) {
        const twitchGameID = twitchGameDataResponse.data[0].id

        const twitchStreamersURL = `https://api.twitch.tv/helix/streams/?game_id=${encodeURIComponent(twitchGameID)}&first=3`
    
        const twitchStreamersOptions = {
            method: 'GET',
            headers: ({
                'Authorization': `Bearer ${twitchAccessTokenData.access_token}`,
                'Client-Id': `${process.env.TWITCH_ID}`
            })
        }
    
        const twitchStreamData = await fetch(twitchStreamersURL, twitchStreamersOptions)

        const twitchStreamDataResponse = await twitchStreamData.json()
    
        let twitchStreams = []

        let viewerCount = []
    
        twitchStreamDataResponse.data.map((stream) => {
            twitchStreams.push(stream.user_login)
            viewerCount.push(stream.viewer_count)
        })

        let videoIDs = []
        youtubeVideos.map((video) => {
            videoIDs.push(video.id)
        })

        let creatorNames = []
        youtubeVideos.map((video) => {
            creatorNames.push(video.channelTitle)
        })
        return {
            props: {data: data, streams: twitchStreams, viewer: viewerCount, videos: videoIDs, channels: creatorNames, top100: isInTop100}
        }
    } else {

        let videoIDs = []
        youtubeVideos.map((video) => {
            videoIDs.push(video.id)
        })

        let creatorNames = []
        youtubeVideos.map((video) => {
            creatorNames.push(video.channelTitle)
        })

        return {
            props: {data: data, streams: "Not Found", viewer: "0", videos: videoIDs, channels: creatorNames, top100: isInTop100}
        }
    }


      
  
}

export default GameDetails