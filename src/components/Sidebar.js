import React from 'react'
import "../styles/Sidebar.css"
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';

import SidebarOptions from './SidebarOptions'

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Logo */}
      <TwitterIcon className="sidebar__twitterIcon" />
      
      {/* Action Buttons */}
      <SidebarOptions Icon={ HomeIcon } text="Home"/>
      <SidebarOptions Icon={ TagIcon } text="Explore"/>
      <SidebarOptions active Icon={ NotificationsNoneIcon } text="Notifications"/>
      <SidebarOptions Icon={ MailOutlineIcon } text="Messages"/>
      <SidebarOptions Icon={ BookmarkBorderIcon } text="Bookmarks"/>
      <SidebarOptions Icon={ ListAltIcon } text="Lists"/>
      <SidebarOptions Icon={ PermIdentityIcon } text="Profiles"/>
      <SidebarOptions Icon={ MoreHorizIcon } text="More"/>
      
      {/* Tweet Button */}
      <Button variant="contained" className="sidebar__tweet" fullWidth>Tweet</Button>

    </div>
  )
}

export default Sidebar