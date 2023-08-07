"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";

import YouTube from "react-youtube";

export default function Page() {
  return (
    <>
      <Navbar />
      <br />
      <div className="flex gap-6  justify-center">
        <div className="zoom container2">
          <Image
            src="/gallery_images/old_souq.jpg"
            alt="placeholder"
            width="500"
            height="500"
          />
        </div>
        <div className="zoom container2">
          <Image
            src="/gallery_images/beach.jpeg"
            alt="placeholder"
            width="500"
            height="500"
          />
        </div>
        <div className="zoom container2">
          <Image
            src="/gallery_images/boats.jpg"
            alt="placeholder"
            width="500"
            height="500"
          />
        </div>
      </div>
      <br />
      <div className="flex gap-6  justify-center">
        <div>
          <YouTube
            videoId="NT2Zz3wHJ3Y"
            opts={{
              height: "500",
              width: "500",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
        </div>
        <div className="zoom container2">
          <Image
            src="/gallery_images/door.jpg"
            alt="placeholder"
            width="500"
            height="500"
          />
        </div>
        <div>
          <YouTube
            videoId="zOWhreNZzyA"
            opts={{
              height: "500",
              width: "500",
              playerVars: {
                autoplay: 0,
              },
            }}
          />
        </div>
      </div>
      <br />
      <div className="flex gap-6 justify-center">
        <div className="zoom container2">
          <Image
            src="/gallery_images/tuktuk.webp"
            alt="placeholder"
            width="500"
            height="500"
          />
        </div>
        <div className="zoom container2">
          <Image
            src="/gallery_images/church.jpg"
            alt="placeholder"
            width="500"
            height="500"
          />
        </div>
        <div className="zoom container2">
          <Image
            src="/gallery_images/painting.jpg"
            alt="placeholder"
            width="500"
            height="500"
          />
        </div>
      </div>
      <br />
      <div className="flex gap-6 justify-center">
        <div className="zoom container2 ">
          <Image
            src="/gallery_images/pool.jpg"
            alt="placeholder"
            width="500"
            height="500"
            // layout="fill"
            // fill={true}
          />
        </div>
        <div className="zoom container2 overflow-hidden">
          <Image
            src="/gallery_images/villageClub.jpeg"
            alt="placeholder"
            width="500"
            height="500"
          />
        </div>
        <div className="zoom container2">
          <Image
            src="/gallery_images/wall.jpg"
            alt="placeholder"
            width="500"
            height="500"
          />
        </div>
      </div>
      <br />
    </>
  );
}
