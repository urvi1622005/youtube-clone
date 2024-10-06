import React from 'react'
import { Search, Menu, Mic, Video, Bell, User, ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from 'lucide-react'



function App() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex items-center justify-between px-4 py-2 bg-white border-b">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="h-6 w-6" />
          </button>
          <img src="/youtube-logo.png" alt="YouTube" className="h-6 ml-4" />
        </div>
        <div className="flex items-center flex-grow max-w-2xl mx-4">
          <input className="flex-grow px-4 py-2 border rounded-l-full focus:outline-none focus:border-blue-500" placeholder="Search" />
          <button className="px-4 py-2 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200">
            <Search className="h-5 w-5" />
          </button>
          <button className="p-2 ml-2 hover:bg-gray-100 rounded-full">
            <Mic className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video className="h-6 w-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="h-6 w-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="h-6 w-6" />
          </button>
        </div>
      </header>
      <main className="flex flex-1 overflow-hidden">
        <div className="flex-1 overflow-auto p-4">
          <div className="aspect-video bg-gray-100 mb-4">
            <video className="w-full h-full" controls>
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1 className="text-2xl font-bold mb-2">Video Title</h1>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img src="/placeholder-avatar.png" alt="Channel Avatar" className="w-10 h-10 rounded-full mr-2" />
              <div>
                <h2 className="font-semibold">Channel Name</h2>
                <p className="text-sm text-gray-500">1M subscribers</p>
              </div>
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">Subscribe</button>
          </div>
          <div className="flex items-center space-x-4 mb-4">
            <button className="flex items-center bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200">
              <ThumbsUp className="h-5 w-5 mr-2" />
              <span>123K</span>
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
          <p className="text-sm text-gray-700 mb-4 bg-gray-100 p-4 rounded-lg">
            Video description goes here. This is a brief overview of what the video is about and any additional
            information the creator wants to share.
          </p>
        </div>
        <aside className="w-80 overflow-auto p-4 border-l">
          <h2 className="font-semibold mb-4">Recommended Videos</h2>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex mb-4">
              <img src={`/placeholder-thumb-${i + 1}.jpg`} alt="Thumbnail" className="w-40 h-24 object-cover mr-2" />
              <div>
                <h3 className="font-semibold text-sm">Recommended Video Title</h3>
                <p className="text-xs text-gray-500">Channel Name</p>
                <p className="text-xs text-gray-500">100K views • 1 day ago</p>
              </div>
            </div>
          ))}
        </aside>
      </main>
    </div>
  )
}

export default App