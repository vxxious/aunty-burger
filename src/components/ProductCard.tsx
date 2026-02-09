import { motion } from "framer-motion";
import { FiPlus, FiCheck } from "react-icons/fi";
import { useState } from "react";
import type { MenuItem } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/whatsapp";
import { toast } from "@/hooks/use-toast";

interface ProductCardProps {
  item: MenuItem;
  index?: number;
}

const ProductCard = ({ item, index = 0 }: ProductCardProps) => {
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(item);
    setIsAdded(true);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    });
    setTimeout(() => {
      setIsAdded(false);
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileHover={{ 
        y: -2,
        transition: { duration: 0.2 }
      }}
      className="group relative flex items-center justify-between p-5 bg-card rounded-xl border border-border transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:via-transparent group-hover:to-transparent transition-all duration-500" />
      
      <div className="relative flex-1 min-w-0 pr-4">
        <div className="flex items-center gap-2">
          <motion.h3 
            className="font-medium text-foreground truncate group-hover:text-foreground transition-colors duration-200"
          >
            {item.name}
          </motion.h3>
          {item.popular && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-shrink-0 text-xs font-medium text-accent-foreground bg-accent/80 px-2 py-0.5 rounded"
            >
              Popular
            </motion.span>
          )}
        </div>
        <motion.p 
          className="text-lg font-semibold text-foreground mt-1 transition-colors duration-200"
        >
          {formatPrice(item.price)}
        </motion.p>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleAddToCart}
        className={`relative flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 overflow-hidden ${
          isAdded 
            ? "bg-accent text-accent-foreground" 
            : "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
        }`}
        aria-label={`Add ${item.name} to cart`}
      >
        <motion.div
          initial={false}
          animate={{ 
            rotate: isAdded ? 360 : 0,
            scale: isAdded ? [1, 1.2, 1] : 1
          }}
          transition={{ duration: 0.3 }}
        >
          {isAdded ? (
            <FiCheck className="w-5 h-5" />
          ) : (
            <FiPlus className="w-5 h-5" />
          )}
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
