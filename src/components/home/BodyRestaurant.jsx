import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSortDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import RestaurantCard from './RestaurantCard';
import { SWIGGY_API } from '../utils/constants';
import Shimmer from '../Shimmer';

const BodyRestaurant = ({ search }) => {
  const BodyResURL = "http://localhost:3000/BodyRes";
  const BodyResCDN = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const [resData, setResData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [sortOrder, setSortOrder] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchData = async () => {
    setLoading(true); // Start loading
    try {
      const res = await axios.get(SWIGGY_API);
      const restaurants = res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setResData(restaurants);

      // Apply search filtering immediately after fetching data
      if (search) {
        const filteredData = restaurants.filter((ele) =>
          ele.info.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilterData(filteredData);
      } else {
        setFilterData(restaurants);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  const clickHandler = () => {
    setFilterData(resData.filter((ele) => ele.info.avgRating >= 4));
  };

  const cost = (str) => {
    const match = str.match(/\d+/);
    return match ? match[0] : null;
  };

  const handlePriceFilter = (minPrice, maxPrice) => {
    setFilterData(
      resData.filter((ele) => {
        const price = cost(ele.info.costForTwo);
        return price !== null && price >= minPrice && price <= maxPrice;
      })
    );
  };

  const deliveryTimeHandler = () => {
    setFilterData(resData.filter((ele) => Number(ele.info?.sla?.deliveryTime) <= 35));
  };

  const handleSortOrder = (order) => {
    setSortOrder(order);
    sortRestaurants(order);
    setIsDropdownOpen(false);
  };

  const sortRestaurants = (order) => {
    const sortedData = [...resData].sort((a, b) => {
      const aCost = Number(cost(a.info.costForTwo));
      const bCost = Number(cost(b.info.costForTwo));
      return order === 'low-to-high' ? aCost - bCost : bCost - aCost;
    });
    setFilterData(sortedData);
  };

  const totalResHandler = () => {
    setFilterData(resData);
  };

  // Render Shimmer if loading
  if (loading) return <Shimmer />;

  return (
    <>
      <h1 className='font-semibold text-gray-900 ms-9 mb-8 mt-16 text-2xl md:text-2xl lg:text-2xl'>Restaurants with Online Food Delivery in Hyderabad</h1>
      <div className='flex mb-9'>
        <button onClick={clickHandler} className='border border-gray-500 px-6 py-2 rounded-full mx-2 text-md'>Rating 4.0+</button>
        <button onClick={() => handlePriceFilter(0, 200)} className='border border-gray-500 px-6 py-2 rounded-full mx-2'>Rs0-Rs200</button>
        <button onClick={() => handlePriceFilter(200, 300)} className='border border-gray-500 px-6 py-2 rounded-full mx-2'>Rs200-Rs300</button>
        <button onClick={() => handlePriceFilter(300, 400)} className='border border-gray-500 px-6 py-2 rounded-full mx-2'>Rs300-Rs400</button>
        <button onClick={deliveryTimeHandler} className='border border-gray-500 px-6 py-2 rounded-full mx-2'>Fast Delivery</button>
        
        {/* Custom Sort Dropdown */}
        <div className="relative mx-2">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
            className="border border-gray-500 px-8 py-2 rounded-full flex "
          >
            Sort by Price
            <FaSortDown className="ml-2 absolute top-2 right-3" />
          </button>
          {isDropdownOpen && (
            <div className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg mt-1 w-40">
              <button onClick={() => handleSortOrder('low-to-high')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">Low to High</button>
              <button onClick={() => handleSortOrder('high-to-low')} className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left">High to Low</button>
            </div>
          )}
        </div>
        <button onClick={totalResHandler} className='border border-gray-500 px-6 py-2 rounded-full mx-2 text-md'>Total Restaurant</button>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filterData.map((ele) => (
          <Link key={ele.info.id} to={"/restaurantmenu/" + ele.info.id}>
            <RestaurantCard resData={ele} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default BodyRestaurant;