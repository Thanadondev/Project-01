import React from 'react';
import Gold from '../assets/Gold.jpeg';
import Angklung from '../assets/Angklung.jpeg';
import Knife from '../assets/Knife.jpeg';
import Harbal from '../assets/Harbal.jpeg';

const cardsData = [
  {
    title: 'Knife',
    imageSrc: Knife,
    description: 'How to park your car at your garage?',
  },
  {
    title: 'Gold Smith',
    imageSrc: Gold,
    description: 'Another useful life hack description.',
  },
  {
    title: 'Angklung',
    imageSrc: Angklung,
    description: 'More tips and tricks for everyday life.',
  },
  {
    title: 'Herbal',
    imageSrc: Harbal,
    description: 'Discover the latest life hacks that can make your day easier.',
  },
];

export default function CardList() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-5xl font-bold mb-4 text-[#FF5733]">WISDOMS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardsData.map((card, index) => (
          <div key={index} className="card glass">
            <figure className="overflow-hidden rounded-t-lg">
              <img
                src={card.imageSrc}
                alt={`Life hack ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </figure>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-sm">{card.description}</p>
              <div className="mt-4">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
