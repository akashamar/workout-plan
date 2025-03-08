'use client';

import React from 'react';
import ReactPlayer from 'react-player/lazy';

interface VideoPlayerProps {
  url: string;
}

export default function VideoPlayer({ url }: VideoPlayerProps) {
  return (
    <div className="aspect-video relative">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        light
        playing={false}
        className="absolute top-0 left-0"
      />
    </div>
  );
} 