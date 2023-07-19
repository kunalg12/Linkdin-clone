/* eslint-disable no-unused-vars */
import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("LinkedIn's Top Voices Green in India","Top news • 2,532 readers")}
      {newsArticle("Cloud to change tech workforce","23h ago • 348 readers","Top news • 2,532 readers")}
      {newsArticle("Will blocked Twitter users be back?","1d ago • 226,435 readers")}
      {newsArticle("WFH affecting employee health", "3d ago • 31,230 readers")}
      {newsArticle("More NRIs buying homes in India", "1d ago • 1,886 readers")}
    </div>
  );
}

export default Widgets;
