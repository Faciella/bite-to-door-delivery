
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Restaurant, MenuItem } from "@/lib/types";
import RestaurantHeader from "@/components/restaurant/RestaurantHeader";
import RestaurantInfo from "@/components/restaurant/RestaurantInfo";
import RestaurantMenu from "@/components/restaurant/RestaurantMenu";
import { restaurantData, menuItems } from "@/data/restaurant-mock-data";

const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real app, this would fetch data from an API
    setTimeout(() => {
      setRestaurant(restaurantData);
      setMenu(menuItems);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading restaurant details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Restaurant not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <RestaurantHeader restaurant={restaurant} />
      
      {/* Restaurant Info & Menu */}
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <Tabs defaultValue="menu" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="info">Information</TabsTrigger>
          </TabsList>
          
          <TabsContent value="menu">
            <RestaurantMenu menuItems={menu} />
          </TabsContent>
          
          <TabsContent value="info">
            <RestaurantInfo restaurant={restaurant} />
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
