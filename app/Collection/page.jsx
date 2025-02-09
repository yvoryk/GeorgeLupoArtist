import React from 'react';

const PaintingLibrary = () => {
  //sample image data
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

  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Painting Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full px-4">
        {paintings.map((painting) => (
          <div key={painting.id} className="border p-4 rounded shadow">
            <img src={painting.image} alt={painting.title} className="w-full h-auto mb-4" />
            <h2 className="text-xl font-bold">{painting.title}</h2>
            <p><strong>Dimensions:</strong> {painting.dimensions}</p>
            <p><strong>Medium:</strong> {painting.medium}</p>
            <p><strong>Notes:</strong> {painting.notes}</p>
            <p><strong>Price:</strong> {painting.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaintingLibrary;
