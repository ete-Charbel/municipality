"use client";

import Navbar from "@/components/navbar";
import React from "react";
import ImageWrap from "@/components/imageWrap";
import YtWrap from "@/components/YtWrap";

export default function Page() {
  const gridRefs = [
    "old_souq.jpg",
    "beach.jpeg",
    "boats.jpg",
    "NT2Zz3wHJ3Y",
    "door.jpg",
    "zOWhreNZzyA",
    "tuktuk.webp",
    "church.jpg",
    "painting.jpg",
    "pool.jpg",
    "wall.jpg",
    "villageClub.jpeg",
  ];

  const gridElements = [];

  for (let i = 0; i < gridRefs.length; i++) {
    if (gridRefs[i].includes(".")) {
      gridElements.push(<ImageWrap src={"/gallery_images/" + gridRefs[i]} />);
    } else {
      gridElements.push(<YtWrap id={gridRefs[i]} />);
    }
  }
  return (
    <>
      <Navbar />
      <br />

      <div className="grid grid-cols-3 gap-6 ml-20 justify-center">
        {gridElements}

        {/* <YtWrap id="NT2Zz3wHJ3Y" />
        <YtWrap id="zOWhreNZzyA" /> */}
      </div>
    </>
  );
}
