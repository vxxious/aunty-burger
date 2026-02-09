import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiX, FiMaximize2 } from "react-icons/fi";

// Import all gallery images
import burgerFries from "@/assets/burger-fries.jpg";
import burgerMain from "@/assets/burger-main.jpg";
import heroBurger from "@/assets/hero-burger.jpg";
import hotdogs from "@/assets/hotdogs.jpg";
import loadedFries from "@/assets/loaded-fries.jpg";
import miniBurger from "@/assets/mini-burger.jpg";
import platter from "@/assets/platter.jpg";
import wings from "@/assets/wings.jpg";

interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  { src: heroBurger, title: "Signature Cheese Burger", category: "Burgers" },
  { src: burgerMain, title: "Classic Beef Burger", category: "Burgers" },
  { src: miniBurger, title: "Mini Burger Selection", category: "Burgers" },
  { src: burgerFries, title: "Burger & Fries Combo", category: "Combos" },
  { src: wings, title: "Glazed Chicken Wings", category: "Wings" },
  { src: hotdogs, title: "Gourmet Hot Dogs", category: "Hot Dogs" },
  { src: loadedFries, title: "Loaded Fries", category: "Sides" },
  { src: platter, title: "Party Platter", category: "Platters" },
];

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [autoplay, setAutoplay] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay for hero slideshow
  useEffect(() => {
    if (!autoplay || selectedIndex !== null) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [autoplay, selectedIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "ArrowRight") navigateLightbox(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const navigateLightbox = useCallback((direction: number) => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      const newIndex = prev + direction;
      if (newIndex < 0) return galleryImages.length - 1;
      if (newIndex >= galleryImages.length) return 0;
      return newIndex;
    });
  }, []);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setAutoplay(false);
  };

  return (
    <div className="min-h-screen bg-background pt-16 md:pt-20">
      {/* Hero Slideshow */}
      <section className="relative h-[50vh] md:h-[70vh] overflow-hidden bg-foreground">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <img
              src={galleryImages[currentSlide].src}
              alt={galleryImages[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Slideshow Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12 md:pb-16">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-accent text-sm font-medium uppercase tracking-wider">
                {galleryImages[currentSlide].category}
              </span>
              <h1 className="text-4xl md:text-6xl font-display text-background mt-2">
                {galleryImages[currentSlide].title}
              </h1>
            </motion.div>
          </div>
        </div>

        {/* Slideshow Controls */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
            className="p-2 bg-background/20 backdrop-blur-sm rounded-full text-background hover:bg-background/30 transition-colors"
            aria-label="Previous slide"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % galleryImages.length)}
            className="p-2 bg-background/20 backdrop-blur-sm rounded-full text-background hover:bg-background/30 transition-colors"
            aria-label="Next slide"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-8 bg-accent" 
                  : "w-1.5 bg-background/40 hover:bg-background/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Gallery Header */}
      <section className="py-12 md:py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display text-foreground">
              OUR GALLERY
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              A visual journey through our menu. Every dish crafted with premium ingredients and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                  index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className={`aspect-square ${index === 0 || index === 5 ? "md:aspect-auto md:h-full" : ""}`}>
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/0 to-foreground/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="p-3 bg-background/20 backdrop-blur-sm rounded-full"
                    >
                      <FiMaximize2 className="w-6 h-6 text-background" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-accent text-xs font-medium uppercase tracking-wider">
                      {image.category}
                    </span>
                    <h3 className="text-background font-medium mt-1">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/95 backdrop-blur-md flex items-center justify-center"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 p-3 text-background/70 hover:text-background transition-colors z-10"
              aria-label="Close lightbox"
            >
              <FiX className="w-8 h-8" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(-1);
              }}
              className="absolute left-4 p-3 text-background/70 hover:text-background transition-colors z-10"
              aria-label="Previous image"
            >
              <FiChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox(1);
              }}
              className="absolute right-4 p-3 text-background/70 hover:text-background transition-colors z-10"
              aria-label="Next image"
            >
              <FiChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
              />
              <div className="text-center mt-4">
                <span className="text-accent text-sm font-medium uppercase tracking-wider">
                  {galleryImages[selectedIndex].category}
                </span>
                <h3 className="text-background text-xl font-display mt-1">
                  {galleryImages[selectedIndex].title}
                </h3>
                <p className="text-background/60 text-sm mt-2">
                  {selectedIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
