import React from 'react'

const Sidebarinfo = ({img, name}) => {
  return (
    <div style={{display: "flex", gap: "8px"}}>
    <img src={img} style={{width: 30, height: 40, objectFit: "cover"}} />
    <span>{name}</span>
</div>
  )
}

export default Sidebarinfo