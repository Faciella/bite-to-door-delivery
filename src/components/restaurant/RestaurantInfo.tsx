
import React from "react";
import { MapPin, Phone, Clock, Info } from "lucide-react";
import { Restaurant } from "@/lib/types";

interface RestaurantInfoProps {
  restaurant: Restaurant;
}

const RestaurantInfo: React.FC<RestaurantInfoProps> = ({ restaurant }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">À propos de {restaurant.name}</h2>
      
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Bienvenue chez {restaurant.name}, où nous servons les meilleurs plats de la ville ! 
          Nos ingrédients sont frais, approvisionnés localement, et préparés quotidiennement pour 
          garantir des repas de la plus haute qualité à nos clients.
        </p>
        
        <div className="flex items-start space-x-2">
          <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <h3 className="font-medium">Adresse</h3>
            <p className="text-muted-foreground">123 Rue de la Nourriture, Dakar, Sénégal, 12345</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-2">
          <Phone className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <h3 className="font-medium">Téléphone</h3>
            <p className="text-muted-foreground">(221) 33 456 7890</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-2">
          <Clock className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <h3 className="font-medium">Heures d'ouverture</h3>
            <div className="text-muted-foreground">
              <p>Lundi - Vendredi: 11:00 - 22:00</p>
              <p>Samedi - Dimanche: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-start space-x-2">
          <Info className="w-5 h-5 text-orange-500 mt-0.5" />
          <div>
            <h3 className="font-medium">Informations supplémentaires</h3>
            <ul className="list-disc list-inside text-muted-foreground">
              <li>Plats à emporter disponibles</li>
              <li>Places en terrasse</li>
              <li>WiFi gratuit</li>
              <li>Adapté aux familles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
