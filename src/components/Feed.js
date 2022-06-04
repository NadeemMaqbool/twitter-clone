import React from 'react'
import "../styles/Feed.css"
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Tweetbox from './Tweetbox';
import Post from './Post';

function Feed() {
 
    return (
    <div className="feed">
      <div className="feed__header">
        <h2> Home</h2>
        <div className="twitter__starIcon">
          <AutoAwesomeIcon className="tweet__autoAwsomeIcon"/>
        </div>
        
      </div>  

      <Tweetbox />

      <Post />
    </div>
  )
}

export default Feed
