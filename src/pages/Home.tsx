import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiStar } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { menuItems, testimonials, businessInfo } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/whatsapp";
import { FiPlus } from "react-icons/fi";
import heroBurger from "@/assets/hero-burger.jpg";

const Home = () => {
  const featuredItems = menuItems.filter((item) => item.popular).slice(0, 4);
  const { addItem, openCart } = useCart();

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem(item);
    openCart();
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBurger}
            alt="Delicious burger"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-gradient" />
        </div>

        {/* Content */}
        <div className="relative container-custom pt-20">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block text-brand-gold font-medium mb-4"
            >
              {businessInfo.location}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display text-brand-cream leading-none mb-6"
            >
              THE BEST
              <br />
              <span className="text-brand-gold">BURGERS</span>
              <br />
              IN ABUJA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-brand-cream/80 text-lg md:text-xl mb-8 max-w-lg"
            >
              {businessInfo.tagline}. Fresh ingredients, signature sauces, and
              burgers made with care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/menu" className="btn-hero inline-flex items-center gap-2">
                Order Now
                <FiArrowRight />
              </Link>
              <Link to="/menu" className="btn-hero-outline inline-flex items-center gap-2">
                View Menu
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Customer Favorites
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-2">
              POPULAR PICKS
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-foreground/20 hover:shadow-sm transition-all"
              >
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="font-medium text-foreground truncate">
                    {item.name}
                  </h3>
                  <p className="text-lg font-semibold text-foreground mt-1">
                    {formatPrice(item.price)}
                  </p>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAddToCart(item)}
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                  aria-label={`Add ${item.name} to cart`}
                >
                  <FiPlus className="w-5 h-5" />
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-lg font-semibold hover:bg-foreground/90 transition-colors"
            >
              View Full Menu
              <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-background/60 font-medium uppercase tracking-wider text-sm">
              Why Aunty Burgers
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-background mt-2">
              WHAT MAKES US SPECIAL
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Fresh Ingredients",
                description:
                  "We source the freshest ingredients daily. No frozen patties here.",
              },
              {
                title: "Handcrafted Quality",
                description:
                  "Every burger is made with care using our signature recipe.",
              },
              {
                title: "Quick Delivery",
                description:
                  "Order via WhatsApp for fast delivery anywhere in Abuja.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 border border-background/10 rounded-xl"
              >
                <h3 className="text-xl font-display text-background mb-3">
                  {feature.title}
                </h3>
                <p className="text-background/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Customer Reviews
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-2">
              WHAT PEOPLE SAY
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar
                      key={i}
                      className="w-4 h-4 fill-foreground text-foreground"
                    />
                  ))}
                </div>
                <p className="text-foreground mb-4">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display text-background mb-6">
              READY TO ORDER?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-xl mx-auto">
              Skip the queue and order directly via WhatsApp. We'll have your
              food ready in no time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${businessInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
                Order on WhatsApp
              </a>
              <Link 
                to="/menu" 
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground font-semibold px-8 py-4 rounded-lg hover:bg-background/90 transition-colors"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
