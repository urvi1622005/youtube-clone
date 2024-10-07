import React from 'react';
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from 'lucide-react';

const VideoPlayer = ({ video }) => {
  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="aspect-video bg-gray-100 mb-4">
        <video className="w-full h-full" controls>
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <h1 className="text-2xl font-bold mb-2">{video.title}</h1>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={video.channelAvatar} alt="Channel Avatar" className="w-10 h-10 rounded-full mr-2" />
          <div>
            <h2 className="font-semibold">{video.channel}</h2>
            <p className="text-sm text-gray-500">{video.subscribers} subscribers</p>
          </div>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">Subscribe</button>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
          <ThumbsUp className="h-5 w-5 mr-2" />
          <span>{video.likes}</span>
        </button>
        <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
          <ThumbsDown className="h-5 w-5 mr-2" />
          <span>Dislike</span>
        </button>
        <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
          <Share className="h-5 w-5 mr-2" />
          <span>Share</span>
        </button>
        <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
          <Download className="h-5 w-5 mr-2" />
          <span>Download</span>
        </button>
        <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </div>
      <p className="text-sm text-gray-700 mb-4 bg-gray-100 p-4 rounded-lg">{video.description}</p>
    </div>
  );
};

export default VideoPlayer;