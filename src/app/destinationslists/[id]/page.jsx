import React from "react";
import Image from "next/image";


async function getPlace(id) {
  const res = await fetch(`http://localhost:4000/places/${id}`, {
    next: { revalidate: 10 }, // Optional: Cache revalidation for 10 seconds
  });

  if (!res.ok) {
    throw new Error("Failed to fetch place details");
  }

  return res.json();
}

export default async function DestinationPage({ params }) {
  const { id } = params; // Dynamic route parameter
  const place = await getPlace(id); // Fetch the place data

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          {place.name}
        </h1>
        <h3 className="text-lg text-gray-600 text-center mt-2">
          Located in the <span className="font-semibold">{place.region}</span>{" "}
          region
        </h3>
        <p className="text-gray-700 text-center mt-4 max-w-2xl mx-auto">
          {place.description}
        </p>

        
        <div className="flex justify-center items-center mt-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              className={`w-8 h-8 ${
                star <= place.rating ? "text-yellow-400" : "text-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <p className="text-gray-600 ml-2 text-lg">({place.rating} / 5)</p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {[place.image_1, place.image_2, place.image_3, place.image_4].map(
            (image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <Image
                  src={image}
                  alt={`Image of ${place.name}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            )
          )}
        </div>

        
        <div className="mt-12 bg-blue-50 py-8 rounded-lg shadow-lg">
          <h3 className="text-3xl font-bold text-gray-800 text-center">
            Popular Activities
          </h3>
          <p className="text-gray-600 text-center mt-2">
            Explore what this destination has to offer!
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            {place.activities.split(", ").map((activity, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white px-6 py-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full">
                  
                  <svg
                    className="w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2a10 10 0 110 20 10 10 0 010-20zm1 7v3H8v2h5v3h2v-3h5v-2h-5V9h-2z" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  {activity}
                </p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="mt-12 bg-gray-50 py-8 px-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            Leave Your Review
          </h2>
          
          
          <form className="flex flex-col items-center mt-6">
            <textarea
              className="w-full max-w-xl border rounded-lg p-4 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your review here..."
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
