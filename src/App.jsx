import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import Shimmer from "./components/Shimmer";



// Dynamic imports
const Home = lazy(() => import("./components/Home"));
const Help = lazy(() => import("./components/Help"));
const Offers = lazy(() => import("./components/Offers"));

const Cart = lazy(() => import("./components/Cart"));
const Navbar = lazy(() => import("./components/Navbar"));
const RestaurantMenu=lazy(()=>import("./components/home/RestaurantMenu"))
const Login=lazy(()=>import('./components/Authentication/Login'))
const Signin = lazy(() => import("./components/Authentication/Signin"));
const Footer=lazy(()=>import("./components/Footer"))





export const App = () => {
  const [search,setSearch]=useState(null);
  const loginData=JSON.parse(localStorage.getItem('loggedUser'));
  return (
    <BrowserRouter>

      <Suspense fallback={<Shimmer/>}>
        <Navbar  setSearch={setSearch} />
        <Routes>
          <Route path='/' element={ loginData ?  <Navigate to={'/'} /> : <Login/> }/>
          <Route path="/home" element={<Home search={search} />} />
          <Route path="/restaurantmenu/:resId" element={<RestaurantMenu />} />
          <Route path="/help" element={<Help />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer/>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
