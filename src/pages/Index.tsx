
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RestaurantCard from "@/components/RestaurantCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Restaurant } from "@/lib/types";
import { Search, ChevronRight, ArrowRight } from "lucide-react";

// Mock data
const featuredRestaurants: Restaurant[] = [
  {
    id: "1",
    name: "Fatou's Place",
    imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc3QlMjBmb29kJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
    cuisine: "Senegalese, Thiebou Djeune",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "500 FCFA",
  },
  {
    id: "2",
    name: "Dakar Pizza",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D",
    cuisine: "Italian, Pizza",
    rating: 4.6,
    deliveryTime: "30-40 min",
    deliveryFee: "400 FCFA",
  },
  {
    id: "3",
    name: "Plateau Sushi",
    imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGl8ZW58MHx8MHx8fDA%3D",
    cuisine: "Japanese, Sushi",
    rating: 4.9,
    deliveryTime: "35-45 min",
    deliveryFee: "800 FCFA",
  },
];

const popularRestaurants: Restaurant[] = [
  {
    id: "4",
    name: "Yassa & Co",
    imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a3479b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFjb3N8ZW58MHx8MHx8fDA%3D",
    cuisine: "Senegalese, Yassa",
    rating: 4.7,
    deliveryTime: "20-30 min",
    deliveryFee: "300 FCFA",
  },
  {
    id: "5",
    name: "Almadies Noodles",
    imageUrl: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9vZGxlc3xlbnwwfHwwfHx8MA%3D%3D",
    cuisine: "Asian, Noodles",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: "600 FCFA",
  },
  {
    id: "6",
    name: "Dakar Salad",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D",
    cuisine: "Healthy, Salads",
    rating: 4.4,
    deliveryTime: "15-25 min",
    deliveryFee: "400 FCFA",
  },
];

const cuisines = [
  { name: "Thiebou Djeune", icon: "🍚" },
  { name: "Pizza", icon: "🍕" },
  { name: "Sushi", icon: "🍣" },
  { name: "Yassa", icon: "🍗" },
  { name: "Mafe", icon: "🥘" },
  { name: "Salads", icon: "🥗" },
  { name: "Desserts", icon: "🍰" },
  { name: "Bissap Juice", icon: "🥤" },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Search for: ${searchQuery}`);
    // In a real app, this would trigger a search and navigate to results
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Food delivery to your door
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Choose from hundreds of restaurants and get your favorite meal delivered quickly
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-md">
              <Input
                type="text"
                placeholder="Enter your delivery address"
                className="pl-10 pr-24 py-6 w-full text-black"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-600 hover:bg-orange-700"
              >
                Find
              </Button>
            </form>
          </div>
        </div>
        
        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute -top-16 left-0 w-full overflow-hidden"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Browse by Cuisine */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Browse by cuisine</h2>
            <Link to="/restaurants" className="text-orange-500 hover:text-orange-600 flex items-center">
              <span className="mr-1">View all</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {cuisines.map((cuisine) => (
              <a
                key={cuisine.name}
                href="#"
                className="flex flex-col items-center p-4 bg-white hover:bg-gray-50 rounded-lg border border-gray-100 shadow-sm transition-colors"
              >
                <span className="text-3xl mb-2">{cuisine.icon}</span>
                <span className="font-medium">{cuisine.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Restaurants */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Restaurants</h2>
            <Link to="/restaurants" className="text-orange-500 hover:text-orange-600 flex items-center">
              <span className="mr-1">View all</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Near You */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Popular near you</h2>
            <Link to="/restaurants" className="text-orange-500 hover:text-orange-600 flex items-center">
              <span className="mr-1">View all</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting your favorite dishes delivered to your door is easier than ever
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Browse Restaurants</h3>
              <p className="text-muted-foreground">
                Find your favorite restaurants or discover new places
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Place Your Order</h3>
              <p className="text-muted-foreground">
                Choose the dishes you want and add them to your cart
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Get your food delivered to your door in minutes
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Download our app</h2>
              <p className="text-lg opacity-90">
                Enjoy the full experience on your phone
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                App Store
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
