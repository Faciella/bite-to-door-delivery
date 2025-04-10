
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { Trash, Plus, Minus, CreditCard, MapPin } from "lucide-react";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliveryAddress((prev) => ({ ...prev, [name]: value }));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "XOF",
      currencyDisplay: "symbol",
    }).format(price).replace(/\s/g, ' ');
  };

  const deliveryFee = 500;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  const handlePlaceOrder = async () => {
    // Validate delivery address
    const { street, city, state, zipCode } = deliveryAddress;
    if (!street || !city || !state || !zipCode) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez remplir tous les champs d'adresse de livraison",
        variant: "destructive",
      });
      return;
    }

    // Validate cart items
    if (items.length === 0) {
      toast({
        title: "Panier vide",
        description: "Votre panier est vide. Ajoutez des articles avant de passer à la caisse.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Generate order details for receipt
      const orderDetails = {
        orderNumber: `CMD-${Math.floor(100000 + Math.random() * 900000)}`,
        orderDate: new Date().toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        items: [...items],
        deliveryAddress,
        subtotal,
        deliveryFee,
        tax,
        total
      };
      
      toast({
        title: "Commande passée avec succès!",
        description: "Votre repas est en préparation et sera livré bientôt.",
      });
      
      clearCart();
      
      // Navigate to order confirmation page with order details
      navigate("/order-confirmation", { state: { orderDetails } });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Un problème est survenu lors de la commande. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Paiement</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Summary */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-bold mb-4">Votre commande chez Fatou's Place</h2>
                
                {items.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">Votre panier est vide</p>
                    <Button 
                      onClick={() => navigate("/")}
                      variant="outline"
                    >
                      Parcourir les restaurants
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="space-y-4 mb-4">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between border-b pb-4">
                          <div className="flex">
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-md mr-3"
                            />
                            <div>
                              <h3 className="font-medium">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">{formatPrice(item.price)} FCFA</p>
                              <div className="flex items-center mt-2">
                                <Button
                                  type="button"
                                  size="icon"
                                  variant="outline"
                                  className="h-7 w-7"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button
                                  type="button"
                                  size="icon"
                                  variant="outline"
                                  className="h-7 w-7"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="font-medium">
                              {formatPrice(item.price * item.quantity)} FCFA
                            </span>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-red-500 hover:text-red-700 mt-2 h-8 w-8"
                              onClick={() => removeItem(item.id)}
                            >
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        variant="outline"
                        onClick={clearCart}
                      >
                        Vider le panier
                      </Button>
                    </div>
                  </>
                )}
              </div>
              
              {/* Delivery Address */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Adresse de livraison</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="street">Adresse</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="street"
                        name="street"
                        placeholder="123 Rue Principale"
                        className="pl-9"
                        value={deliveryAddress.street}
                        onChange={handleAddressChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="city">Ville</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Dakar"
                      value={deliveryAddress.city}
                      onChange={handleAddressChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">Région</Label>
                    <Input
                      id="state"
                      name="state"
                      placeholder="Dakar"
                      value={deliveryAddress.state}
                      onChange={handleAddressChange}
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="zipCode">Code postal</Label>
                    <Input
                      id="zipCode"
                      name="zipCode"
                      placeholder="11500"
                      value={deliveryAddress.zipCode}
                      onChange={handleAddressChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Payment & Order Summary */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-xl font-bold mb-4">Méthode de paiement</h2>
                <Tabs 
                  defaultValue={paymentMethod} 
                  onValueChange={(value) => setPaymentMethod(value)}
                >
                  <TabsList className="grid grid-cols-2 mb-4">
                    <TabsTrigger value="card">Carte</TabsTrigger>
                    <TabsTrigger value="cash">Espèces</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="card">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Numéro de carte</Label>
                        <div className="relative">
                          <CreditCard className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            className="pl-9"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Date d'expiration</Label>
                          <Input id="expiry" placeholder="MM/AA" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cvc">CVC</Label>
                          <Input id="cvc" placeholder="123" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="nameOnCard">Nom sur la carte</Label>
                        <Input id="nameOnCard" placeholder="John Doe" />
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="cash">
                    <div className="py-6 text-center text-muted-foreground">
                      <p>Vous paierez en espèces à la livraison de votre commande.</p>
                      <p className="mt-2">Veuillez préparer le montant exact.</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold mb-4">Résumé de commande</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sous-total</span>
                    <span>{formatPrice(subtotal)} FCFA</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Frais de livraison</span>
                    <span>{formatPrice(deliveryFee)} FCFA</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxe</span>
                    <span>{formatPrice(tax)} FCFA</span>
                  </div>
                  
                  <div className="h-px bg-gray-200 my-2"></div>
                  
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>{formatPrice(total)} FCFA</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handlePlaceOrder}
                  className="w-full bg-orange-500 hover:bg-orange-600"
                  disabled={items.length === 0 || isSubmitting}
                >
                  {isSubmitting ? "Traitement..." : "Passer la commande"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Checkout;
