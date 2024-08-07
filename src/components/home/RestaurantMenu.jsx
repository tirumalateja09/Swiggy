
import  { useState } from 'react';
import useRestaurantMenu from '../coustomHooks/useRestaurentMenu';
import RestaurantCategory from './RestaurantCategory';
import { useParams } from 'react-router-dom';
import Shimmer from '../Shimmer';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  
  const { resInfo, loading } = useRestaurantMenu(resId);

  if (loading) return <Shimmer />;
  if (!resInfo) return <div>Error loading data.</div>;

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
//   const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <>
      <div className="text-center mt-20">
        {console.log(name)}
        {console.log(cuisines)}
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg"><span>Bonza Offer:</span>{cuisines?cuisines.join(", "):""} - {cuisines?costForTwoMessage:""}</p>
        {categories.map((category, index) => (
          <RestaurantCategory 
            key={index} 
            data={category}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)} // toggle for own categorey items
            showItems={index === showIndex}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
