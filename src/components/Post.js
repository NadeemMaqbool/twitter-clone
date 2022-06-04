import { Avatar } from '@mui/material'
import React from 'react'
import "../styles/Post.css"

function Post({
    displayName,
    userName,
    avatar,
    timestamp,
    text,
    image,
    verifiedTick
}) {
  return (
    <div className="post">
        <div className="post__avatar">
            <Avatar src="https://pbs.twimg.com/profile_images/757548902023303172/OLMwj8JA_400x400.jpg"/>
        </div>
    </div>
  )
}

export default Post