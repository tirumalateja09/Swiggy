
import { Link, useNavigate } from 'react-router-dom';
import swiggyicon from '../assets/swiggyIcon.webp';
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';




const Navbar = ({ setSearch }) => {
  const navigate = useNavigate();
  const totalItems = useSelector((store) => store.cart.items);
  const [check,setcheck]=useState(false)
  
  const [loggedUser, setLoggedUser] = useState(null);
 
  

  useEffect(() => {
    const Data=async ()=>{
      const userData = JSON.parse(localStorage.getItem('loggedUser'));
      setLoggedUser(userData);
      setcheck(!check);
    }
    Data();
   
  },[check]);


  // useEffect(() => {
  //   const updateUserData = () => {
  //     const userData = JSON.parse(localStorage.getItem('loggedUser'));
  //     setLoggedUser(userData);
  //   };


  //   updateUserData();


  //   window.addEventListener('storage', updateUserData);

  //   // Cleanup listener on component unmount
  //   return () => {
  //     window.removeEventListener('storage', updateUserData);
  //   };
  // }, []);


  const clickHandler = (event) => {
    setSearch(event.target.value);
  };

  const totalCount = totalItems.length > 0
    ? totalItems.reduce((acc, cur) => acc + cur.count, 0)
    : '';

  const handleLogout = () => {
    
    localStorage.removeItem('loggedUser');
    setLoggedUser(null); // Update state
    setcheck(!check);
    navigate('/'); 
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center space-x-4">
          <img src={swiggyicon} alt="Swiggy Icon" className="h-8 sm:h-10" />
          <div className="relative hidden sm:block">
            <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              onChange={(event) => clickHandler(event)}
              type="text"
              placeholder="Search"
              className="bg-gray-100 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
        <ul className="flex items-center space-x-4 sm:space-x-6">
          <li className="hidden sm:block">
            <Link to="/home" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <IoFastFoodOutline />
              <span>Home</span>
            </Link>
          </li>

          <li className="hidden sm:block">
            <Link to="/offers" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <BiSolidOffer />
              <span>Offers</span>
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link to="/help" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <IoIosHelpBuoy />
              <span>Help</span>
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link to="/" onClick={handleLogout} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaRegUser />
              <span>{(loggedUser ? "Logout" : "Login")}</span>
              {loggedUser ? console.log("Logout") : console.log("Login")}
              {console.log(loggedUser)}
              {/* <span>{check?"Login":"Logout"}</span> */}
              {/* <span>User</span> */}
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link to="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <TiShoppingCart />
              <span>Cart</span> {totalItems.length > 0 ? `: ${totalCount}` : ''}
            </Link>
          </li>

          {/* Mobile Links */}
          <li className="sm:hidden">
            <Link to="/home" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <IoFastFoodOutline />
            </Link>
          </li>

          <li className="sm:hidden">
            <Link to="/offers" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <BiSolidOffer />
            </Link>
          </li>
          <li className="sm:hidden">
            <Link to="/help" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <IoIosHelpBuoy />
            </Link>
          </li>
          <li className="sm:hidden">
            <Link to="/" onClick={handleLogout} className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <FaRegUser />
              <span>{loggedUser ? "Logout" : "Login"}</span>
            </Link>
          </li>
          <li className="sm:hidden">
            <Link to="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500">
              <TiShoppingCart />{totalItems.length > 0 ? `: ${totalCount}` : ''}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;