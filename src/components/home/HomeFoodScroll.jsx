
import  { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { FoodScrollCDN } from '../utils/constants'; // Ensure this path is correct
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FoodScrollURL } from '../utils/constants';

const HomeFoodScroll = () => {
  const [data, setData] = useState([]);
  const scrollRef = useRef(null);

  const getProducts = async () => {
    try {
      const res = await axios.get(FoodScrollURL);
      setData(res.data.infoWithStyle.info); 
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const itemWidth = scrollRef.current.firstChild.clientWidth; // Width of the first child
      const itemsToScroll = 2; // Number of items to scroll at once
      const scrollTo = direction === 'left'
        ? scrollLeft - (itemWidth * itemsToScroll)
        : scrollLeft + (itemWidth * itemsToScroll);
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
        <h2 className='font-semibold text-black text-2xl ms-24 mt-24'>What's on your mind?</h2>
      <div className="absolute right-0 top-0 flex space-x-2 bg-white p-2 rounded-full shadow-md me-9 mt-4">
        <FaArrowLeft onClick={() => scroll('left')} className="cursor-pointer" />
        <FaArrowRight onClick={() => scroll('right')} className="cursor-pointer" />
      </div>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide" ref={scrollRef}>
        <div className="grid grid-flow-col auto-cols-max gap-0 mt-14 w-52 h-52 ">
          {data.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-1 inline-block mx-1">
              <p className="text-gray-500">{item.price}</p>
              {item.imageId && (
                <img src={`${FoodScrollCDN}${item.imageId}`} alt={item.name} className="w-40 h-40 object-cover rounded-lg" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFoodScroll;