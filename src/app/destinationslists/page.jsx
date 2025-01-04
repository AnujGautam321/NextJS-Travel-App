"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

async function getPlaces() {
  const res = await fetch("http://localhost:4000/places");
  return res.json();
}

export default function PlaceList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [places, setPlaces] = useState([]);

  React.useEffect(() => {
    async function fetchPlaces() {
      const data = await getPlaces();
      setPlaces(data);
    }
    fetchPlaces();
  }, []);

  const filteredPlaces = places.filter((place) => {
    const query = searchQuery.toLowerCase();
    return (
      place.name.toLowerCase().includes(query) ||
      place.rating.toLowerCase().includes(query) ||
      place.type.toLowerCase().includes(query) ||
      place.region.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-5 bg-gray-500 text-white text-center">
        <h1 className="text-3xl font-bold">Explore Beautiful Destinations</h1>
        <p className="text-lg mt-2">Find your next adventure, cultural experience, or serene getaway!</p>
      </div>
      <div className="container mx-auto py-8 px-4">
        <form
          action=""
          onSubmit={(e) => e.preventDefault()}
          className="flex justify-center mb-8"
        >
          <input
            className="w-full max-w-lg border rounded-lg p-3 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search by rating, type, or region..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.length > 0 ? (
            filteredPlaces.map((place) => (
              <Link key={place.id} href={`/destinationslists/${place.id}`}>
                <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300">
                  <Image
                    src={place.image_1}
                    alt={place.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{place.name}</h2>
                    <p className="text-sm text-gray-600 mt-1">Region: {place.region}</p>
                    <p className="text-sm text-gray-600">Type: {place.type}</p>
                    <p className="text-sm text-gray-600">Rating: ⭐ {place.rating}</p>
                    <p className="text-gray-700 text-sm mt-2 truncate">{place.description}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No destinations found. Try searching for something else!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}