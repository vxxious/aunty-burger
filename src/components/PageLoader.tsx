import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Animated burger stack */}
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-muted"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-brand-gold"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm font-medium text-muted-foreground tracking-wider uppercase"
        >
          Loading
        </motion.span>
      </div>
    </motion.div>
  );
};

export default PageLoader;
