import React from 'react'
import '../styles/SidebarOptions.css'

function SidebarOptions({active, text, Icon, }) {
  return (
    <div className='sidebar-options'>
        <Icon />
        <h2 className={`${active && 'sidebar-options--active'}`}>{ text }</h2>
    </div>
  )
}

export default SidebarOptions