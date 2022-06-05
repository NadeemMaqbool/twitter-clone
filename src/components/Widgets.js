import { Avatar, Button } from '@mui/material'
import React from 'react'
import '../styles/widgets.css'

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__sections">
        <div className="widgets__header">
          <h2>You might like</h2>
          {/* Each widget item row */}
          <div className="widgets__youMightLike">
            <div className="widgets__recommendations">
              <Avatar src="https://pbs.twimg.com/profile_images/1250580179698642944/5oLZger-_400x400.jpg"/>
              <div className="widgets__titles">
                <h3 className="widgets__titlte_recomm">Trash Taste</h3>
                <p className="widgets__secondTitle">@TrashTalk</p>
              </div>
            </div>
            <Button className="widgets__followButton">Follow</Button>
          </div>
          {/* Each widget item row */}
          <div className="widgets__youMightLike">
            <div className="widgets__recommendations">
              <Avatar src="https://pbs.twimg.com/profile_images/1250580179698642944/5oLZger-_400x400.jpg"/>
              <div className="widgets__titles">
                <h3 className="widgets__titlte_recomm">Trash Taste</h3>
                <p className="widgets__secondTitle">@TrashTalk</p>
              </div>
            </div>
            <Button className="widgets__followButton">Follow</Button>
          </div>
          <div className="widgets__youMightLike">
            <div className="widgets__recommendations">
              <Avatar src="https://pbs.twimg.com/profile_images/1250580179698642944/5oLZger-_400x400.jpg"/>
              <div className="widgets__titles">
                <h3 className="widgets__titlte_recomm">Trash Taste</h3>
                <p className="widgets__secondTitle">@TrashTalk</p>
              </div>
            </div>
            <Button className="widgets__followButton">Follow</Button>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Widgets