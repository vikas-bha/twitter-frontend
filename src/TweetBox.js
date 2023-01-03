import { Button, Avatar } from '@material-ui/core'
import React from 'react'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import "./TweetBox.css"
const TweetBox = () => {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox_input'>
    <Avatar src={<PersonOutlineIcon/>}/>
    <input placeholder="what's happening" type={"text"}/>

            </div>
            <input className='tweetBox_ImageInput' placeholder="enter image url: optional though" type={"text"}/>

            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
      
    </div>
  )
}

export default TweetBox
