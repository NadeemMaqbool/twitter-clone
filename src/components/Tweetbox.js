import { Avatar, Button } from '@mui/material'
import React from 'react'
import '../styles/Tweetbox.css'

function Tweetbox() {
  return (
    <div className="tweetBox">
        <form >
            <div className="tweetBox__input">
                <Avatar src="https://pbs.twimg.com/profile_images/757548902023303172/OLMwj8JA_400x400.jpg"/>

                <input placeholder="What's happening?"/>
            </div>
            <Button className="feed_button">Tweet</Button>

        </form>
    </div>
  )
}

export default Tweetbox