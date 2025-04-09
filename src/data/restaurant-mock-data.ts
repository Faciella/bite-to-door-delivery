
import { Restaurant, MenuItem } from "@/lib/types";

// Mock restaurant data
export const restaurantData: Restaurant = {
  id: "1",
  name: "Fatou's Place",
  imageUrl: "https://images.unsplash.com/photo-1586816001966-79b736744398?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc3QlMjBmb29kJTIwcmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  cuisine: "African, Continental",
  rating: 4.8,
  deliveryTime: "25-35 min",
  deliveryFee: "500 FCFA",
};

// Mock menu items
export const menuItems: MenuItem[] = [
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
