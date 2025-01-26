import { useState } from "react"
import React from 'react'
import {ArrowBigLeft, ArrowBigRight} from "lucide-react"
import "/components/image-carousel.css"

type ImageCarouselProps = {
    imageUrls: string[]
}

export function ImageCarousel({ imageUrls }: ImageCarouselProps) {
    const [imageIndex, setImageIndex] = useState(0)

    function showNextImage() {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0
            return index + 1
        })
    }

    function showPrevImage() {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1
            return index - 1
        })
    }

    return (
    <div style = {{width: "100%", height: "100%", position: "relative" }}>
            <img src = {imageUrls[imageIndex]} className = "img-carousel-img"/>
        <button onClick = {showPrevImage} className = "img-carousel-btn" style = {{left: 0}}>
            <ArrowBigLeft/>
        </button>
        <button onClick = {showNextImage} className = "img-carousel-btn" style = {{right: 0}}>
            <ArrowBigRight/>
        </button>
    </div>
    )
}
