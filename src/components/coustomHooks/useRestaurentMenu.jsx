// import { MENU_API } from '../utils/constants';
// import { useState , useEffect } from 'react'
// import axios from 'axios';

// const useRestaurantMenu = (resId) => {
//   const [resInfo, setResInfo] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await axios.get(MENU_API + resId);
    
//     setResInfo(data.data);
//   };

//   return resInfo;
// };

// export default useRestaurantMenu;



import { useState, useEffect } from 'react';
import axios from 'axios';
import { MENU_API } from '../utils/constants'; // Adjust path as needed

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${MENU_API}${resId}`);
        setResInfo(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [resId]);

  return { resInfo, loading };
};

export default useRestaurantMenu;
