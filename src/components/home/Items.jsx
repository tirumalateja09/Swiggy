import React from 'react';
import { CDN_URL, NOIMAGE } from '../utils/constants'; 
import { addItems ,removeItems} from '../redux-toolkit/cartSlice';
import { useDispatch } from 'react-redux';

const Items = ({ items,actionKey }) => {

  const dispatch=useDispatch();



  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

    const handleRemoveItem = (item) => {
    dispatch(removeItems(item));
  };
  return (
    <>
      {/* <div>Items</div> */}
      {console.log(items)}
      <div>
        {items.map((item, index) => {
          const info = item?.card?.info;
          if (!info) return null; // Handle case where info might be missing

          const imageUrl = info.imageId ? `${CDN_URL}${info.imageId}` : NOIMAGE;

          return (
            <div key={index} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between ">
              <div className="w-9/12">
                <div className="py-2">
                  <span className="font-semibold">{info.name}</span>
                  <span className="ml-2">
                    - ₹
                    {info.price ? info.price / 100 : info.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-s">{info.description}</p>
              </div>
              <div className="w-3/12 p-4">
               
                <div className='absolute '>
                <button
                 className="p-2  ms-14  rounded-lg bg-black text-white shadow-lg "
               onClick={() => actionKey === "Add +" ? handleAddItem(item) : handleRemoveItem(item)}
              >
                {actionKey === "Add +" ? "Add +" : "Remove -"} 
              </button>
                </div>
                <img src={imageUrl} alt={info.name} className="w-full" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Items;