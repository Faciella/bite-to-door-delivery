
import React from "react";
import { MapPin, Phone, Clock, Info } from "lucide-react";
import { Restaurant } from "@/lib/types";

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">About {restaurant.name}</h2>
      
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Welcome to {restaurant.name}, where we serve the best burgers in town! 
          Our ingredients are fresh, locally sourced, and prepared daily to ensure 
          the highest quality meals for our customers.
        </p>
        
        <div className="flex items-start space-x-2">
          <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <h3 className="font-medium">Address</h3>
            <p className="text-muted-foreground">123 Food Street, Cityville, State, 12345</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-2">
          <Phone className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-muted-foreground">(123) 456-7890</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-2">
          <Clock className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <h3 className="font-medium">Hours</h3>
            <div className="text-muted-foreground">
              <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-start space-x-2">
          <Info className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <h3 className="font-medium">Additional Info</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Takeout available</li>
              <li>Outdoor seating</li>
              <li>Free WiFi</li>
              <li>Family friendly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
