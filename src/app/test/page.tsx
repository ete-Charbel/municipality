"use client";

import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "500",
      width: "500",
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div>
        <YouTube videoId="sTnm5jvjgjM" opts={opts} />
      </div>
    );
  }
}
