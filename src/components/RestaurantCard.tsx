
import React from "react";
import { Link } from "react-router-dom";
import { Restaurant } from "@/lib/types";
import { Star, Clock, DollarSign } from "lucide-react";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <div className="food-card h-full flex flex-col">
        <div className="overflow-hidden">
          <img
            src={restaurant.imageUrl}
            alt={restaurant.name}
            className="food-card-image"
          />
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg">{restaurant.name}</h3>
            <div className="flex items-center bg-orange-50 px-2 py-1 rounded text-sm">
              <Star className="w-4 h-4 text-orange-500 mr-1" />
              <span>{restaurant.rating}</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm mb-3">{restaurant.cuisine}</p>
          <div className="flex mt-auto items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>{restaurant.deliveryFee}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
