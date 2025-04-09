
import React from "react";
import { Star, Clock, DollarSign } from "lucide-react";
import { Restaurant } from "@/lib/types";

interface RestaurantHeaderProps {
  restaurant: Restaurant;
}

const RestaurantHeader: React.FC<RestaurantHeaderProps> = ({ restaurant }) => {
  return (
    <div className="relative h-64 md:h-80 overflow-hidden">
      <img
        src={restaurant.imageUrl}
        alt={restaurant.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
        <div className="container mx-auto px-4 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white">{restaurant.name}</h1>
          <p className="text-white/80">{restaurant.cuisine}</p>
          
          <div className="flex flex-wrap gap-3 mt-3">
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
              <Star className="w-4 h-4 text-yellow-400 mr-1" />
              <span className="text-white text-sm">{restaurant.rating}</span>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
              <Clock className="w-4 h-4 text-white mr-1" />
              <span className="text-white text-sm">{restaurant.deliveryTime}</span>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
              <DollarSign className="w-4 h-4 text-white mr-1" />
              <span className="text-white text-sm">{restaurant.deliveryFee} delivery</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHeader;
