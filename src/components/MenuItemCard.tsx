
import React from "react";
import { MenuItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useCart } from "@/hooks/useCart";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(item);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div className="food-card flex flex-col h-full">
      <div className="overflow-hidden">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="food-card-image"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold mb-1">{item.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-2 flex-grow">
          {item.description}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold">{formatPrice(item.price)}</span>
          <Button
            size="sm"
            className="text-white bg-orange-500 hover:bg-orange-600"
            onClick={handleAddToCart}
          >
            <PlusCircle className="w-4 h-4 mr-2" /> Add
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
