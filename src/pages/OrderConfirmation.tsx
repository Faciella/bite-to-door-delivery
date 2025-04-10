
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Receipt, Home, Printer } from "lucide-react";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState<any>(null);
  
  useEffect(() => {
    // Get order details from location state
    if (location.state?.orderDetails) {
      setOrderDetails(location.state.orderDetails);
    } else {
      // If no order details (e.g., direct navigation to this page), redirect to home
      navigate("/");
    }
  }, [location, navigate]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "XOF",
      currencyDisplay: "symbol",
    }).format(price).replace(/\s/g, ' ');
  };

  const handlePrint = () => {
    window.print();
  };

  // If no order details yet, show loading
  if (!orderDetails) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading order details...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const { orderNumber, orderDate, items, deliveryAddress, subtotal, deliveryFee, tax, total } = orderDetails;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="receipt-card">
            <CardHeader className="border-b pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Receipt className="h-6 w-6 text-orange-500" />
                  <CardTitle className="text-2xl">Order Confirmation</CardTitle>
                </div>
                <Button variant="outline" size="sm" onClick={handlePrint} className="print:hidden">
                  <Printer className="h-4 w-4 mr-2" />
                  Print Receipt
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="pt-6">
              <div className="flex justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground">Order Number</p>
                  <p className="font-medium">{orderNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{orderDate}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Delivery Address</p>
                <p className="text-sm text-muted-foreground">
                  {deliveryAddress.street}, {deliveryAddress.city}, {deliveryAddress.state} {deliveryAddress.zipCode}
                </p>
              </div>
              
              <div className="mb-6">
                <p className="text-sm font-medium mb-2">Order Summary</p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Item</TableHead>
                      <TableHead className="text-center">Qty</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((item: any) => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell className="text-center">{item.quantity}</TableCell>
                        <TableCell className="text-right">{formatPrice(item.price)} FCFA</TableCell>
                        <TableCell className="text-right">{formatPrice(item.price * item.quantity)} FCFA</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell colSpan={3}>Subtotal</TableCell>
                      <TableCell className="text-right">{formatPrice(subtotal)} FCFA</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3}>Delivery Fee</TableCell>
                      <TableCell className="text-right">{formatPrice(deliveryFee)} FCFA</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3}>Tax</TableCell>
                      <TableCell className="text-right">{formatPrice(tax)} FCFA</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={3} className="font-bold">Total</TableCell>
                      <TableCell className="text-right font-bold">{formatPrice(total)} FCFA</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </CardContent>
            
            <CardFooter className="border-t pt-6 flex-col items-start gap-4">
              <p className="text-center w-full text-muted-foreground">
                Thank you for your order at Fatou's Place!
              </p>
              <Button 
                className="mx-auto bg-orange-500 hover:bg-orange-600"
                onClick={() => navigate("/")}
              >
                <Home className="h-4 w-4 mr-2" />
                Return to Home
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <Footer />
      
      {/* Add some print styles */}
      <style>{`
        @media print {
          .receipt-card {
            box-shadow: none !important;
            border: none !important;
          }
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default OrderConfirmation;
