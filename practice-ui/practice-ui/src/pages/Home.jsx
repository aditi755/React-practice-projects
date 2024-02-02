import React from 'react'
import Sidebar from '../components/Sidebar'
import Card from "../components/Card"
import { Link, useLocation } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Home = () => {
  return (
    <div style={{display:"flex", flexDirection: "row", gap:"50px", marginTop:"40px"}}>
        <Sidebar />
        <div style={{display: "flex", flexDirection:"column", gap:"20px"}}>
        <div style={{fontSize: "30px", fontWeight:"200"}}>HERE IS Your Music</div>
        <div style={{display: "flex", gap:"40px"}}>
        <Card song={"Power"}/>
        <Card song={"Everything"}/>
        <Card song={"Chemtrails"}/>
        <Card song={"Power"}/>
        <Card song={"Everything"}/>
        <Card song={"Chemtrails"}/>
        </div>
        <AudioPlayer
    autoPlay
    src="http://example.com/audio.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
        </div>

        <Link to="/profile">
                    <button style={{ width: "95%", margin: "0 10px" }}>
                    Profile
                    </button>
                  </Link>
    </div>
  )
}

export default Home