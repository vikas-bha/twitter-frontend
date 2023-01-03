import PersonOutline from '@material-ui/icons/PersonOutline'
import React , {useEffect, useState}from 'react'
import './Feed.css'
import Post from './Post'
import TweetBox from'./TweetBox.js'

const Feed = ( ) => {
  
  return (
   <div className='feed'>
    {/* header */}
    <div className='feed__header'>
    <h2>Home</h2>
    </div>
    



    {/* tweetbox */}
    <TweetBox/>

    {/* post */}

   
    <Post displayName={"yudhisthir"} username={'ydbj'} verified={true}  text={"it's working"} avatar={PersonOutline} image={'https://variety.com/wp-content/uploads/2022/11/netflix-1899.jpg'}/>
    <Post/>

    <Post/>

    <Post/>

    <Post/>

    <Post/>

    <Post/>

    


   </div>
  )
}

export default Feed