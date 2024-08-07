import HomeFoodScroll from "./home/HomeFoodScroll"
import TopResScroll from "./home/TopResScroll"
import BodyRestaurant from "./home/BodyRestaurant"
import { useEffect } from "react"

const Home = ({search}) => {

  useEffect(()=>{
    document.title="Home";
  },[])
  return (
   <>
   {console.log(search)}
   <div className="ms-14 me-14">
   <HomeFoodScroll/>
   <TopResScroll/>
   <BodyRestaurant search={search}/>
  
   </div>
 
   </>

      

  )
}

export default Home