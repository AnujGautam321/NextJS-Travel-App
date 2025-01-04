import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-5">
      {/* Intro Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">About Nepal</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Nepal, nestled between India and China, is famous for its breathtaking
          Himalayas, including Mount Everest. A land of rich history and
          cultural diversity, it blends Hindu and Buddhist traditions, vibrant
          festivals, and stunning architectural heritage. Its varied geography
          and welcoming spirit make it a unique destination for adventure and
          spirituality.
        </p>
      </div>

      {/* Image and Description Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto mb-16">
        <div className="flex flex-col items-center">
          <Image
            src="https://images.pexels.com/photos/1098526/pexels-photo-1098526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            width={500}
            height={350}
            alt="Pashupatinath Temple"
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-gray-600 text-center">
            Nepal is home to iconic landmarks like the Pashupatinath Temple,
            Boudhanath Stupa, and Lumbini, the birthplace of Lord Buddha.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="https://images.pexels.com/photos/2104882/pexels-photo-2104882.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={500}
            height={350}
            alt="Nepali Culture"
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-gray-600 text-center">
            Nepal's culture is a harmonious blend of Hindu and Buddhist
            traditions, reflected in its festivals, art, and diverse ethnic
            communities.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="https://images.pexels.com/photos/29974369/pexels-photo-29974369/free-photo-of-stunning-view-of-mount-dhaulagiri-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={500}
            height={350}
            alt="Himalayas"
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-gray-600 text-center">
            Nepal is renowned for its majestic Himalayas, lush forests, and
            diverse ecosystems, offering breathtaking natural beauty.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="https://images.pexels.com/photos/1274922/pexels-photo-1274922.jpeg?auto=compress&cs=tinysrgb&w=600"
            width={500}
            height={350}
            alt="Nepali People and Traditions"
            className="rounded-lg shadow-lg"
          />
          <p className="mt-4 text-gray-600 text-center">
            Nepali people are known for their warmth, hospitality, and diverse
            traditions, making it a truly unique travel experience.
          </p>
        </div>
      </div>

      {/* Popular Activities Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Popular Travel Activities in Nepal
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {[
          {
            title: "Trekking",
            img: "https://images.pexels.com/photos/2609459/pexels-photo-2609459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          },
          {
            title: "Cultural Exploration",
            img: "https://images.pexels.com/photos/28831414/pexels-photo-28831414/free-photo-of-majestic-view-of-swayambhunath-stupa-in-kathmandu.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            title: "Mountaineering",
            img: "https://images.pexels.com/photos/2609459/pexels-photo-2609459.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          {
            title: "Bungee Jumping",
            img: "https://images.pexels.com/photos/26811613/pexels-photo-26811613/free-photo-of-man-jumping-bungee.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
        ].map((activity, index) => (
          <div
            key={index}
            className="relative group bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={activity.img}
              alt={activity.title}
              width={500}
              height={350}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
            <p className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow-lg">
              {activity.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;