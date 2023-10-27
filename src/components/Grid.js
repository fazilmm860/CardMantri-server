import React, { useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import '../assests/css/home.css'
const Grid = () => {
  const gridData = [
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7tW78EsTlYmkq2tFFgrlgzVXMvrJPVT-nFA&usqp=CAU',
      title: 'Reward Credit Card',
      description: 'Swipe, collect, and experience the rewards of a lifetime.',
    },
    {
      image: 'data:image/jpeg;base64,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',
      title: 'Fuel Credit Card',
      description: 'Drive smart, save big and fuel your journey.',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLuzUQgYxTFkUp-8WpSvk6lgRtddRWybKoqw&usqp=CAU',
        title: 'Cashback Credit Card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: 'data:image/jpeg;base64,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',
        title: 'Travel Credit Card',
        description: 'Vestibulum volutpat mauris ac consequat congue.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR06UIU9T19y4BP2s_vldY29g1IVvBcCayfbQ&usqp=CAU',
        title: 'Business Credit Card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg9yfZCLIHZng6ebNJqKpeB4dEoTk14fnMPw&usqp=CAU',
        title: 'Co-Branded Credit Card',
        description: 'Vestibulum volutpat mauris ac consequat congue.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZpKNwthgBBxRPEhkd7QHR1qvk8qI-qrCXg&usqp=CAU',
        title: 'Secured Credit Card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeL2hui_P29dRiBNN6mv_7k3ZSjlShsy8MA&usqp=CAU',
        title: 'Corporate Credit Card',
        description: 'Vestibulum volutpat mauris ac consequat congue.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL4PiMC6aBxFgCD7GovcHOv981S1UFLmgFTg&usqp=CAU',
        title: 'Student Credit Card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsr6g8wIiZoyTYT4TEAtPeL4N13RlZam3UEg&usqp=CAU',
        title: 'Premium/signature Credit Card',
        description: 'Vestibulum volutpat mauris ac consequat congue.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1mxBbINArGevZEvhfqIlsD3TeMYjWhlkEw&usqp=CAU',
        title: 'Entertainment Credit Card',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_uwcDHGU3W3O6i-G0zvxPxkmy0y_STUuxQ&usqp=CAU',
        title: 'Credit Card For Women',
        description: 'Vestibulum volutpat mauris ac consequat congue.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsr6g8wIiZoyTYT4TEAtPeL4N13RlZam3UEg&usqp=CAU',
        title: 'Classic Credit Card',
        description: 'Vestibulum volutpat mauris ac consequat congue.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV1mxBbINArGevZEvhfqIlsD3TeMYjWhlkEw&usqp=CAU',
        title: 'Titanium Credit Cards',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_uwcDHGU3W3O6i-G0zvxPxkmy0y_STUuxQ&usqp=CAU',
        title: 'Platinum Credit Cards',
        description: 'Vestibulum volutpat mauris ac consequat congue.',
      },
  ];
 
   const [currentIndex, setCurrentIndex] = useState(0);
  const gridRef = useRef(null);

  const gridItemWidth = 260; // Width of each grid item

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? gridData.length - 1 : prevIndex - 1));
    gridRef.current.scrollLeft -= gridItemWidth;
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === gridData.length - 1 ? 0 : prevIndex + 1));
    gridRef.current.scrollLeft += gridItemWidth;
  };
 
  return (
<div className="p-8 flex justify-center items-center bg-black bg-opacity-100 ">
       <button onClick={handlePrev}  className="p-2  fon"   ><FaChevronLeft/></button>
      <div ref={gridRef} className=" flex overflow-x-hidden  space-x-4">
        {gridData.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-64 bg-gray-200 border  p-6 hover:scale-105 transition-transform duration-300  rounded-[25px]`}
          >
           <img src={item.image} alt={`Block ${index + 1}`} className="w-full h-32 object-cover mb-2  rounded-[25px]" />
            <h3 className="text-lg font-bold mb-2">{item.title}</h3>
            <p>{item.description}</p>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
        <span>
          learn More
        </span>
        <svg
          fill="none"
          height="16"
          viewBox="0 0 24 24"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
          </div>
        ))}
      </div>
      <button onClick={handleNext}  className="p-2 fon"><FaChevronRight/></button>
     
    </div>
  );
};

export default Grid;