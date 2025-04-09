
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuItemCard from "@/components/MenuItemCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Restaurant, MenuItem } from "@/lib/types";
import { Star, Clock, DollarSign, Info, MapPin, Phone } from "lucide-react";

// Mock data
const restaurantData: Restaurant = {
  id: "1",
  name: "Fatou's Place",
  imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc3QlMjBmb29kJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  cuisine: "African, Continental",
  rating: 4.8,
  deliveryTime: "25-35 min",
  deliveryFee: "500 FCFA",
};

const menuItems: MenuItem[] = [
  {
    id: "1",
    restaurantId: "1",
    name: "Classic Burger",
    description: "Beef patty with cheese, lettuce, tomato, and special sauce",
    price: 4500,
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww",
    category: "Burgers",
  },
  {
    id: "2",
    restaurantId: "1",
    name: "Chicken Burger",
    description: "Grilled chicken breast with avocado, bacon, and honey mustard",
    price: 5000,
    imageUrl: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWNrZW4lMjBidXJnZXJ8ZW58MHx8MHx8fDA%3D",
    category: "Burgers",
  },
  {
    id: "3",
    restaurantId: "1",
    name: "French Fries",
    description: "Crispy golden fries with sea salt",
    price: 2000,
    imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlbmNoJTIwZnJpZXN8ZW58MHx8MHx8fDA%3D",
    category: "Sides",
  },
  {
    id: "4",
    restaurantId: "1",
    name: "Vanilla Milkshake",
    description: "Creamy vanilla milkshake topped with whipped cream",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWlsa3NoYWtlfGVufDB8fDB8fHww",
    category: "Drinks",
  },
  {
    id: "5",
    restaurantId: "1",
    name: "Onion Rings",
    description: "Beer-battered onion rings served with dipping sauce",
    price: 2500,
    imageUrl: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9uaW9uJTIwcmluZ3N8ZW58MHx8MHx8fDA%3D",
    category: "Sides",
  },
  {
    id: "6",
    restaurantId: "1",
    name: "Chocolate Shake",
    description: "Rich chocolate milkshake made with premium ice cream",
    price: 2750,
    imageUrl: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwc2hha2V8ZW58MHx8MHx8fDA%3D",
    category: "Drinks",
  },
];

const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // In a real app, this would fetch data from an API
    setTimeout(() => {
      setRestaurant(restaurantData);
      setMenu(menuItems);
      
      // Extract unique categories
      const uniqueCategories = Array.from(new Set(menuItems.map(item => item.category)));
      setCategories(uniqueCategories);
      if (uniqueCategories.length > 0) {
        setActiveCategory(uniqueCategories[0]);
      }
      
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

  const filteredMenu = activeCategory
    ? menu.filter(item => item.category === activeCategory)
    : menu;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
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
      
      {/* Restaurant Info & Menu */}
      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <Tabs defaultValue="menu" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="info">Restaurant Info</TabsTrigger>
          </TabsList>
          
          <TabsContent value="menu">
            {/* Categories */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex space-x-2 pb-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    className={activeCategory === category ? "bg-orange-500 hover:bg-orange-600" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenu.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="info">
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
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default RestaurantDetails;
