"use client"
import React from 'react'
import {ImageCarousel} from "../components/ImageCarousel.tsx"
import { AlignCenter } from 'lucide-react';

const CAROUSEL = ["/images/Matrix 125.jpg", "/images/Matrix 141.jpg", "/images/Matrix Flag.jpg", "/images/Red Richard.jpg", "/images/Matrix 135.jpg"]

const Welcome = () => (
  
    <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Welcome
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Paintings</span>
    </h1>
    
    <div style = {{
      maxWidth: "1200px", 
      width: "100%",
      maxHeight: "1200px",
      height: "100%",
       }}>
      <ImageCarousel imageUrls = {CAROUSEL} />
    </div>
    <p className='desc text-center'>
      Sample Page
    </p>
  </section>
);

export default Welcome