import React from 'react'
import './Widgets.css'
import {TwitterTimelineEmbed,
  
  TwitterTweetEmbed
} from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className='widgets__input'>
        <SearchIcon className='widgets__searchIcon'/>
        <input type={"text"} placeholder='search twitter'/>
        </div>

        <div className='widgets__widgetContainer'>
          <h2>what's happening</h2>
          <TwitterTweetEmbed tweetId={"1610033466975948803"} />

          <TwitterTimelineEmbed
          sourceType="profile"
          screenName="NarendraModi"
          options={{ height: 400 }}
        />


        </div>
    </div>
  )
}

export default Widgets