import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar.jsx';
import Home from './pages/Home';
import VideoPage from './pages/VideoPage';

// Dummy API data
const dummyVideos = [
  {
    id: 1,
    title: "React Tutorial for Beginners",
    thumbnail: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
    channel: "Programming with Mosh",
    views: "1.2M",
    uploadedAt: "2 years ago",
    videoUrl: "https://www.example.com/video1.mp4",
    channelAvatar: "https://yt3.ggpht.com/ytc/AAUvwngFjBKqjBSWzbbgFYjUWVTEbKBMjZzNQkiSLTtQrQ=s88-c-k-c0x00ffffff-no-rj",
    subscribers: "1.5M",
    likes: "45K",
    description: "Learn React in this comprehensive tutorial. We'll build a complete app and cover all the fundamentals."
  },
  {
    id: 2,
    title: "Vue.js Crash Course",
    thumbnail: "https://i.ytimg.com/vi/qZXt1Aom3Cs/hqdefault.jpg",
    channel: "Traversy Media",
    views: "500K",
    uploadedAt: "1 year ago",
    videoUrl: "https://www.example.com/video2.mp4",
    channelAvatar: "https://yt3.ggpht.com/ytc/AAUvwnhQN3OQCZQZpVbvmhMFVZYUzu9Nzv7steIuEA=s88-c-k-c0x00ffffff-no-rj",
    subscribers: "1.8M",
    likes: "32K",
    description: "This crash course will get you up and running with Vue.js, covering the core concepts and building a small project."
  },
  {
    id: 3,
    title: "Python for Data Science Full Course",
    thumbnail: "https://i.ytimg.com/vi/LHBE6Q9XlzI/hqdefault.jpg",
    channel: "FreeCodeCamp",
    views: "2.3M",
    uploadedAt: "1 year ago",
    videoUrl: "https://www.example.com/video3.mp4",
    channelAvatar: "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj",
    subscribers: "3.2M",
    likes: "78K",
    description: "Learn Python for Data Science in this comprehensive course. We'll cover numpy, pandas, matplotlib, and more!"
  },
  {
    id: 4,
    title: "JavaScript Async Await",
    thumbnail: "https://i.ytimg.com/vi/V_Kr9OSfDeU/hqdefault.jpg",
    channel: "Web Dev Simplified",
    views: "350K",
    uploadedAt: "8 months ago",
    videoUrl: "https://www.example.com/video4.mp4",
    channelAvatar: "https://yt3.ggpht.com/ytc/AAUvwnhIz_0Su6HhW6Ym50QCroJCAnF10X9xnnMDboY2=s88-c-k-c0x00ffffff-no-rj",
    subscribers: "650K",
    likes: "15K",
    description: "Master JavaScript Async/Await with this in-depth tutorial. Learn how to write cleaner, more efficient asynchronous code."
  },
  {
    id: 5,
    title: "Docker Crash Course for Absolute Beginners",
    thumbnail: "https://i.ytimg.com/vi/pg19Z8LL06w/hqdefault.jpg",
    channel: "TechWorld with Nana",
    views: "800K",
    uploadedAt: "6 months ago",
    videoUrl: "https://www.example.com/video5.mp4",
    channelAvatar: "https://yt3.ggpht.com/ytc/AAUvwnj82Lirw0dg6V5pJWAcWdG22OESyldUcDwAFEqJ=s88-c-k-c0x00ffffff-no-rj",
    subscribers: "400K",
    likes: "25K",
    description: "Learn Docker from scratch in this beginner-friendly crash course. We'll cover containers, images, and basic Docker commands."
  },
  {
    id: 6,
    title: "CSS Grid Tutorial",
    thumbnail: "https://i.ytimg.com/vi/jV8B24rSN5o/hqdefault.jpg",
    channel: "Dev Ed",
    views: "600K",
    uploadedAt: "1 year ago",
    videoUrl: "https://www.example.com/video6.mp4",
    channelAvatar: "https://yt3.ggpht.com/ytc/AAUvwnj_L_rH5Cs9HVdUzdwq8krO4BjOPYnsS51ob4Ap=s88-c-k-c0x00ffffff-no-rj",
    subscribers: "750K",
    likes: "22K",
    description: "Master CSS Grid layout in this comprehensive tutorial. Learn how to create responsive and complex layouts with ease."
  },
  {
    id: 7,
    title: "Machine Learning Basics",
    thumbnail: "https://i.ytimg.com/vi/ukzFI9rgwfU/hqdefault.jpg",
    channel: "3Blue1Brown",
    views: "1.5M",
    uploadedAt: "2 years ago",
    videoUrl: "https://www.example.com/video7.mp4",
    channelAvatar: "https://yt3.ggpht.com/ytc/AAUvwngR3gWFLXLzS7VEQUoRlVwX-gkB2z7eHNLUO9sB=s88-c-k-c0x00ffffff-no-rj",
    subscribers: "3.5M",
    likes: "85K",
    description: "An intuitive introduction to machine learning concepts. We'll cover neural networks, backpropagation, and more."
  },
  {
    id: 8,
    title: "Git and GitHub for Beginners",
    thumbnail: "https://i.ytimg.com/vi/RGOj5yH7evk/hqdefault.jpg",
    channel: "freeCodeCamp.org",
    views: "1.8M",
    uploadedAt: "1 year ago",
    videoUrl: "https://www.example.com/video8.mp4",
    channelAvatar: "https://yt3.ggpht.com/ytc/AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg=s88-c-k-c0x00ffffff-no-rj",
    subscribers: "3.2M",
    likes: "65K",
    description: "Learn the basics of Git and GitHub in this beginner-friendly tutorial. We'll cover version control, branching, and collaboration."
  },
  {
    id: 9,
    title: "TypeScript Crash Course",
    thumbnail: "https://i.ytimg.com/vi/BCg4U1FzODs/hqdefault.jpg",
    channel: "Traversy Media",
    views: "750K",
    uploadedAt: "9 months ago",
    videoUrl: "https://www.example.com/video9.mp4",
    channelAvatar: "https://yt3.ggpht.com/ytc/AAUvwnhQN3OQCZQZpVbvmhMFVZYUzu9Nzv7steIuEA=s88-c-k-c0x00ffffff-no-rj",
    subscribers: "1.8M",
    likes: "28K",
    description: "Get up to speed with TypeScript in this crash course. Learn about types, interfaces, and how to use TypeScript with popular frameworks."
  },
  {
    id: 10,
    title: "Flutter Tutorial for Beginners",
    thumbnail: "https://i.ytimg.com/vi/1ukSR1GRtMU/hqdefault.jpg",
    channel: "The Net Ninja",
    views: "900K",
    uploadedAt: "1 year ago",
    videoUrl: "https://www.example.com/video10.mp4",
    channelAvatar: "https://yt3.ggpht.com/ytc/AAUvwnjhUg4_5zRUhwrRfzUVpcYmCWbYcnpS0YJrp5Vs=s88-c-k-c0x00ffffff-no-rj",
    subscribers: "950K",
    likes: "35K",
    description: "Learn Flutter from scratch in this comprehensive tutorial series. We'll build a complete mobile app for both iOS and Android."
  },
];

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Home videos={dummyVideos} />} />
              <Route path="/video/:id" element={<VideoPage videos={dummyVideos} />} />
              {/* Add more routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;