import React from 'react'
import './sidebaroptions.css'

const SidebarOptions = ({active,text, Icon,  }) => {
  return (
  <div className={`sidebarOptions ${active &&'sidebarOptions--active'}`}>
    <Icon/>
    <h2>{text}</h2>
  </div>
  )
}

export default SidebarOptions 