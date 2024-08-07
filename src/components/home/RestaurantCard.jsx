


import React from 'react';

const RestaurantCard = ({ resData }) => {
  const { info } = resData;

  const cost = (str) => {
    const match = str.match(/\d+/);
    return match ? match[0] : null;
  };

  return (
    <div
      key={info.id}
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full"
    >
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`}
        alt={info.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h1 className="text-xl font-semibold mb-2 truncate">{info.name}</h1>
        <div className="mb-2">
          <span className="text-lg font-semibold text-gray-900">Cuisines: </span>
          <span className="text-sm text-gray-800">{info.cuisines.join(", ")}</span>
        </div>
        <div className="mb-2">
          <span className="text-lg font-semibold text-gray-900">Price: </span>
          <span className="text-sm text-gray-800">₹{cost(info.costForTwo)}</span>
        </div>
        <div className="mb-2">
          <span className="text-lg font-semibold text-gray-900">Bonza Offer: </span>
          <span className="text-sm text-gray-800">{info.costForTwo}</span>
        </div>
        <div className="mb-2">
          <span className="text-lg font-semibold text-gray-900">Location: </span>
          <span className="text-sm text-gray-800">{info.areaName}</span>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            <span className="text-lg font-semibold text-yellow-500">{info.avgRating} ★</span>
          </div>
          <span className="bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded">{info?.sla?.deliveryTime} min</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

