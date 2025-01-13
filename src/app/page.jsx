import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 my-10 mx-5 items-center">
      
      <div className="relative w-full">
        
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-10">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-md">
            Welcome to Nepal <span className="text-yellow-400">🙏</span>
          </h1>
          <p className="text-lg text-gray-200 mt-3">
            Discover the beauty, culture, and adventure.
          </p>
        </div>
        
        <video
          className="w-full h-[500px] object-cover rounded-lg shadow-lg"
          autoPlay
          loop
          muted
        >
          <source src="./Hero-Video.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>

     
      <div className="max-w-5xl text-center leading-relaxed text-gray-800">
        <h2 className="text-3xl font-bold mb-6">
          Experience Nepal's Culture and Adventure
        </h2>
        <p className="text-lg">
          Nepal, nestled between China and India, is renowned for Mount Everest,
          vibrant landscapes, and rich cultural heritage rooted in Hinduism and
          Buddhism. Known as the "Land of Diversity," Nepal offers unmatched
          hospitality, breathtaking views, and an array of adventures waiting
          to be explored.
        </p>
      </div>

      
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-4xl font-extrabold text-gray-900 border-b-4 border-yellow-400 pb-2">
          Top Destinations
        </h2>
        <ul className="flex flex-wrap justify-center gap-6">
          <li className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg transition duration-300 w-64">
            <Link href={`/destinationslists/8`} className="text-xl font-semibold hover:text-yellow-400">
              1. Kathmandu
            </Link>
          </li>
          <li className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg transition duration-300 w-64">
            <Link href={`/destinationslists/2`} className="text-xl font-semibold hover:text-yellow-400">
              2. Pokhara
            </Link>
          </li>
          <li className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg transition duration-300 w-64">
            <Link href={`/destinationslists/1`} className="text-xl font-semibold hover:text-yellow-400">
              3. Lumbini
            </Link>
          </li>
          <li className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg transition duration-300 w-64">
            <Link href={`/destinationslists/4`} className="text-xl font-semibold hover:text-yellow-400">
              4. Chitwan National Park
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
