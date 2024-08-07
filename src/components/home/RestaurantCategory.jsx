
import Items from './Items';

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); 
  };

  const { title, itemCards } = data?.card?.card;

  return (
    <>
     {console.log(data)}
    <div className="max-w-screen-md mx-auto my-5 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">{title} - ({itemCards.length})</span>
        <span>⬇️</span>
      </div>
      {console.log(itemCards)}
      {showItems && <Items items={itemCards} actionKey={"Add +"} />}
    </div>
    </>
   
  );
};

export default RestaurantCategory;
