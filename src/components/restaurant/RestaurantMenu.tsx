
import React, { useState } from "react";
import { MenuItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import MenuItemCard from "@/components/MenuItemCard";

interface RestaurantMenuProps {
  menuItems: MenuItem[];
}

const RestaurantMenu: React.FC<RestaurantMenuProps> = ({ menuItems }) => {
  const [activeCategory, setActiveCategory] = useState<string>("");
  
  // Extract unique categories
  const categories = Array.from(new Set(menuItems.map(item => item.category)));
  
  // Set initial active category if not already set
  React.useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  const filteredMenu = activeCategory
    ? menuItems.filter(item => item.category === activeCategory)
    : menuItems;

  return (
    <>
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
    </>
  );
};

export default RestaurantMenu;
