import { Avatar } from '@mui/material'
import React from 'react'
import "../styles/Post.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

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
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Muhammad Nadeem{" "}
                        <span className="post__headerSpecial">
                            <CheckCircleIcon className="post__badge"/> {" "} @Mnadeem
                        </span>
                    </h3>        
                </div>
                <div className="post__headerDescription">
                    <p> I have just started working on react.js but goal is to be a full stack dveloper. </p>
                </div>
            </div>
            
            <img src="https://media.giphy.com/media/1GEATImIxEXVR79Dhk/giphy.gif" alt="" />
            
            <div className="post__footer">
                <ChatBubbleOutlineIcon fontSize="small" className="post__footer__links"/>
                <RepeatIcon fontSize="small" className="post__footer__links"/>
                <FavoriteBorderIcon fontSize="small" className="post__footer__links"/>
                <IosShareIcon fontSize="small" className="post__footer__links"  />
            </div>
        </div>
    </div>
  )
}

export default Post