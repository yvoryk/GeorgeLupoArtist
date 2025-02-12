"use client";
import React, { useState } from "react";

const PaintingLibrary = () => {
  // State to control the modal visibility
  const [selectedPainting, setSelectedPainting] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample image data
  const paintings = [
    {
      id: 1,
      title: "Matrix 125",
      dimensions: "24x36 inches",
      medium: "Oil on canvas",
      notes: "A vibrant play of colors.",
      price: "$2000",
      image: "/images/Matrix 125.jpg"
    },
    {
      id: 2,
      title: "Matrix 141",
      dimensions: "30x40 inches",
      medium: "Acrylic",
      notes: "Abstract and modern.",
      price: "$2500",
      image: "/images/Matrix 141.jpg"
    },
    {
      id: 3,
      title: "Matrix 127a",
      dimensions: "20x30 inches",
      medium: "Mixed Media",
      notes: "Intriguing abstract work.",
      price: "$2200",
      image: "/images/Matrix 127a.jpg"
    },
    {
      id: 4,
      title: "Matrix 128",
      dimensions: "18x24 inches",
      medium: "Oil on canvas",
      notes: "Bold and colorful composition.",
      price: "$1800",
      image: "/images/Matrix 128.jpg"
    },
    {
      id: 5,
      title: "Matrix 135",
      dimensions: "36x48 inches",
      medium: "Acrylic",
      notes: "Large scale abstract work.",
      price: "$3000",
      image: "/images/Matrix 135.jpg"
    },
    {
      id: 6,
      title: "Matrix 143",
      dimensions: "24x36 inches",
      medium: "Oil",
      notes: "Deep emotions captured on canvas.",
      price: "$2500",
      image: "/images/Matrix 143.jpg"
    },
    {
      id: 7,
      title: "Matrix 145",
      dimensions: "30x40 inches",
      medium: "Acrylic",
      notes: "Vibrant brush strokes create an energetic feel.",
      price: "$2700",
      image: "/images/Matrix 145.jpg"
    },
    {
      id: 8,
      title: "Matrix 146",
      dimensions: "20x30 inches",
      medium: "Watercolor",
      notes: "Subtle hues and gentle textures.",
      price: "$2100",
      image: "/images/Matrix 146.jpg"
    },
    {
      id: 9,
      title: "Matrix 148",
      dimensions: "24x36 inches",
      medium: "Oil on canvas",
      notes: "Intricate details and rich textures.",
      price: "$2600",
      image: "/images/Matrix 148.jpg"
    },
    {
      id: 10,
      title: "Matrix Flag",
      dimensions: "18x24 inches",
      medium: "Acrylic",
      notes: "An iconic symbol reinterpreted in art.",
      price: "$2300",
      image: "/images/Matrix Flag.jpg"
    },
    {
      id: 11,
      title: "Pythagoras 44",
      dimensions: "30x30 inches",
      medium: "Mixed Media",
      notes: "Mathematical beauty meets artistic expression.",
      price: "$2900",
      image: "/images/Pythagoras 44.jpg"
    },
    {
      id: 12,
      title: "Red Richard",
      dimensions: "36x48 inches",
      medium: "Oil",
      notes: "Striking composition with bold colors.",
      price: "$3200",
      image: "/images/Red Richard.jpg"
    },
  ];

  // Function to open modal with selected painting
  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedPainting(paintings[index]);
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedPainting(null);
  };

  // Function to navigate to previous painting
  const prevPainting = () => {
    const newIndex = (currentIndex === 0) ? paintings.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedPainting(paintings[newIndex]);
  };

  // Function to navigate to next painting
  const nextPainting = () => {
    const newIndex = (currentIndex === paintings.length - 1) ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedPainting(paintings[newIndex]);
  };

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Painting Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full px-4">
        {paintings.map((painting, index) => (
          <div key={painting.id} className="border p-4 rounded shadow">
            {/* Clicking on an image opens the modal */}
            <img 
              src={painting.image} 
              alt={painting.title} 
              className="w-full h-auto mb-4 cursor-pointer hover:scale-105 transition-transform"
              onClick={() => openModal(index)}
            />
            <h2 className="text-xl font-bold">{painting.title}</h2>
            <p><strong>Dimensions:</strong> {painting.dimensions}</p>
            <p><strong>Medium:</strong> {painting.medium}</p>
            <p><strong>Notes:</strong> {painting.notes}</p>
            <p><strong>Price:</strong> {painting.price}</p>
          </div>
        ))}
      </div>

      {/* Modal (Popup View) */}
      {selectedPainting && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded shadow-lg max-w-2xl relative flex flex-col items-center">
            {/* Close button */}
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 bg-gray-300 hover:bg-gray-400 text-gray-800 px-3 py-1 rounded"
            >
              ✕
            </button>

            {/* Previous arrow */}
            <button 
              onClick={prevPainting} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-3 rounded-full hover:bg-gray-800"
            >
              ◀
            </button>

            {/* Enlarged image */}
            <img 
              src={selectedPainting.image} 
              alt={selectedPainting.title} 
              className="w-full h-auto rounded"
            />
            
            {/* Next arrow */}
            <button 
              onClick={nextPainting} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white p-3 rounded-full hover:bg-gray-800"
            >
              ▶
            </button>

            {/* Painting details in the modal */}
            <div className="mt-4 text-center">
              <h2 className="text-2xl font-bold">{selectedPainting.title}</h2>
              <p className="text-lg"><strong>Dimensions:</strong> {selectedPainting.dimensions}</p>
              <p className="text-lg"><strong>Medium:</strong> {selectedPainting.medium}</p>
              <p className="text-lg"><strong>Notes:</strong> {selectedPainting.notes}</p>
              <p className="text-lg font-semibold"><strong>Price:</strong> {selectedPainting.price}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PaintingLibrary;
