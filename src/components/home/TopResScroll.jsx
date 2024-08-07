
import  { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TopResScroll = () => {
  const TopResScrollURL = "http://localhost:3000/TopResScroll";
  const URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const [topRes, setTopRes] = useState([]);
  const scrollRef = useRef(null);

  const datafetch = async () => {
    try {
      const res = await axios.get(TopResScrollURL);
      setTopRes(res.data.infoWithStyle.restaurants);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    datafetch();
  }, []);

  const scroll = (direction) => {
    const scrollNumber = 500; // Number to scroll
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollNumber : scrollNumber, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative max-w-full">
      <h2 className="text-2xl font-semibold mb-6 ms-16 text-gray-900 mt-14">Top Restaurant Chains in Hyderabad</h2>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2 bg-white p-2 rounded-full shadow-lg z-10">
        <FaArrowLeft onClick={() => scroll('left')} className="cursor-pointer hover:text-orange-500 transition duration-300 text-2xl" />
        <FaArrowRight onClick={() => scroll('right')} className="cursor-pointer hover:text-orange-500 transition duration-300 text-2xl" />
      </div>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide" ref={scrollRef}>
        <div className="flex space-x-4">
          {topRes.map((ele) => (
            <div key={ele.info.id} className="bg-white rounded-lg shadow-md p-4 w-96 h-80 flex-shrink-0 transition-transform transform hover:scale-105 hover:shadow-lg">
              <img src={`${URL}${ele.info.cloudinaryImageId}`} alt={ele.info.name} className="object-cover rounded-lg h-52 w-full mb-2" />
              <div className="text-center">
                <h1 className="font-semibold text-md mb-1 overflow-hidden text-ellipsis whitespace-normal"><span className='font-bold text-md mb-1 overflow-hidden text-ellipsis whitespace-normal'>RestaurantName:</span>{ele.info.name}</h1>
                <h2 className="text-gray-800 text-md mb-1 overflow-hidden text-ellipsis whitespace-normal"><span className='font-bold text-md mb-1 overflow-hidden text-ellipsis whitespace-normal' >Location:</span>{ele.info.areaName}</h2>
                {/* <h2 className="text-gray-600 text-sm mb-1 overflow-hidden text-ellipsis whitespace-normal">{ele.info.costForTwo}</h2>
                <h2 className="text-gray-600 text-sm mb-1 overflow-hidden text-ellipsis whitespace-normal">{ele.info.cuisines.join(', ')}</h2>
                <h2 className="text-gray-600 text-sm overflow-hidden text-ellipsis whitespace-normal">{ele.info.avgRating} ★</h2> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopResScroll;

