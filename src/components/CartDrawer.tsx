import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/whatsapp";
import OrderForm from "./OrderForm";

const CartDrawer = () => {
  const {
    state,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  const [showOrderForm, setShowOrderForm] = useState(false);

  const handlePlaceOrder = () => {
    if (state.items.length === 0) return;
    setShowOrderForm(true);
  };

  const handleOrderPlaced = () => {
    clearCart();
    closeCart();
  };

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-card z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-xl font-display tracking-wide text-foreground">
                Your Cart ({totalItems})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Close cart"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <p className="text-lg">Your cart is empty</p>
                  <p className="text-sm mt-2">Add some items to get started</p>
                </div>
              ) : (
                state.items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-xl"
                  >
                    {/* Details */}
                    <div className="flex-1 min-w-0 pr-4">
                      <h3 className="font-medium text-foreground truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(item.price)} each
                      </p>
                      <p className="text-sm font-semibold text-foreground mt-1">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="p-1.5 bg-background hover:bg-foreground/5 rounded-lg transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus className="w-4 h-4" />
                        </button>
                        <span className="w-6 text-center font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-1.5 bg-background hover:bg-foreground/5 rounded-lg transition-colors"
                          aria-label="Increase quantity"
                        >
                          <FiPlus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        aria-label="Remove item"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-border p-4 space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="font-medium text-foreground">Subtotal:</span>
                  <span className="font-bold text-foreground">
                    {formatPrice(totalPrice)}
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handlePlaceOrder}
                  className="w-full flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold py-4 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Place Order via WhatsApp
                </motion.button>

                <button
                  onClick={clearCart}
                  className="w-full text-center text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear Cart
                </button>
              </div>
            )}
          </motion.div>

          {/* Order Form Modal */}
          <OrderForm
            isOpen={showOrderForm}
            onClose={() => setShowOrderForm(false)}
            items={state.items}
            total={totalPrice}
            onOrderPlaced={handleOrderPlaced}
          />
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
