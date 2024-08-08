import HomeFoodScroll from "./home/HomeFoodScroll";
import TopResScroll from "./home/TopResScroll";
import BodyRestaurant from "./home/BodyRestaurant";
import { useEffect } from "react";
import { createContext } from 'react';

const Home = ({ search }) => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
  {console.log(loggedUser)}


  return (
    <div className="ms-14 me-14">
      {loggedUser ? (
        <>
          <HomeFoodScroll />
          <TopResScroll />
          <BodyRestaurant search={search} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen">
          
          <img
            // src="https://foaps.co/wp-content/uploads/2022/04/swiggy-restaurant-registration-2-scaled.jpg" 
            src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?size=626&ext=jpg&ga=GA1.1.111242494.1723050049&semt=ais_hybrid"
            alt="Please Login"
            className="mb-36"
          />
          {/* <h2 className="text-xl font-bold text-orange-500 relative ">Please Login</h2> */}
        </div>
      )}
    </div>
  );
};

export default Home;