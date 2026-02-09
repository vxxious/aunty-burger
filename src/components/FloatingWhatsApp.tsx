import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { businessInfo } from "@/data/menuData";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={`https://wa.me/${businessInfo.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
      aria-label="Order on WhatsApp"
    >
      <FaWhatsapp className="w-7 h-7" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
