import React from 'react'
import Sidebarinfo from './Sidebarinfo'
const Sidebar = () => {
  return (
    <div style={{marginTop: "-110px"}}>
        <h3 style={{fontSize: 30, fontWeight: 300}}>Spotify</h3>
        <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
       <Sidebarinfo img={"https://images.unsplash.com/photo-1706554596177-35b0a05a082e?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Songs"}/>
       <Sidebarinfo img={"https://images.unsplash.com/photo-1706554596177-35b0a05a082e?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"playlist"}/>
       <Sidebarinfo img={"https://images.unsplash.com/photo-1706554596177-35b0a05a082e?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"Songs"}/>
       <Sidebarinfo img={"https://images.unsplash.com/photo-1706554596177-35b0a05a082e?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"playlist"}/>
       <Sidebarinfo img={"https://images.unsplash.com/photo-1706554596177-35b0a05a082e?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"playlist"}/>
       <Sidebarinfo img={"https://images.unsplash.com/photo-1706554596177-35b0a05a082e?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name={"playlist"}/>

        </div>
    </div>
  )
}

export default Sidebar