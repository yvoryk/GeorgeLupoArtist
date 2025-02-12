"use client"
import React from 'react'
import Link from 'next/link'
import { ImageCarousel } from "../components/ImageCarousel.tsx"
//import { AlignCenter } from 'lucide-react';

const CAROUSEL = [
  "/images/Matrix 125.jpg",
  "/images/Matrix 127a.jpg",
  "/images/Matrix 128.jpg",
  "/images/Matrix 135.jpg",
  "/images/Matrix 141.jpg",
  "/images/Matrix 143.jpg",
  "/images/Matrix 145.jpg",
  "/images/Matrix 146.jpg",
  "/images/Matrix 148.jpg",
  "/images/Matrix Flag.jpg",
  "/images/Pythagoras 44.jpg",
  "/images/Red Richard.jpg",
  
];

const Home = () => (
  <main className="w-full flex-center flex-col">
    {/* Welcome Section */}
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center mb-4'>
        Welcome
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'> Paintings</span>
      </h1>
      
      <div style={{
        maxWidth: "1200px", 
        width: "90%",
        maxHeight: "1200px",
        height: "100%",
      }}>
        <ImageCarousel imageUrls={CAROUSEL} />
      </div>
      
      {/* About Me Button */}
      <div className="w-full p-4 flex justify-center">
        <Link href="/about">
          <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded shadow">
            About Me
          </button>
        </Link>
      </div>
    </section>
  </main>
);

export default Home;
