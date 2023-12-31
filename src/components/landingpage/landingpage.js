import React from "react";
import "./landingpage.css";
import Navbar from "../navbar/Navbar";
import BgVideo from "./background.jpg";
import { Button,Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";




// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// navigate('/home');

const Landingpage = () => {
  

  return (
    <div className="landingpage">
      {/* <video src={BgVideo} autoPlay loop className="video-bg" /> */}
      <img src={BgVideo} className="video-bg" alt="background im"/>
      <div className="bg-overlay"></div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="homeText">
        <Typography>
          <h1>Voyage Virtuoso</h1>
          <p>Come , live out your ideal vacation with us !</p>
        </Typography>
      </div>

      <Button  variant="contained" startIcon={<SearchIcon />} color="info" >
        Plan your trip
      </Button>
      
    </div>
  );
};

export default Landingpage;
