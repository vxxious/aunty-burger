import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiPlus } from "react-icons/fi";
import { menuItems, categories } from "@/data/menuData";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/utils/whatsapp";

type SortOption = "default" | "price-low" | "price-high" | "name";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const { addItem, openCart } = useCart();

  const filteredItems = useMemo(() => {
    let items = [...menuItems];

    // Filter by category
    if (selectedCategory !== "all") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        items.sort((a, b) => b.price - a.price);
        break;
      case "name":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Keep original order, but show popular items first
        items.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }

    return items;
  }, [selectedCategory, searchQuery, sortBy]);

  const handleAddToCart = (item: typeof menuItems[0]) => {
    addItem(item);
    openCart();
  };

  // Group items by category for display
  const groupedItems = useMemo(() => {
    if (selectedCategory !== "all") {
      return { [selectedCategory]: filteredItems };
    }
    
    const groups: Record<string, typeof menuItems> = {};
    filteredItems.forEach((item) => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, [filteredItems, selectedCategory]);

  const getCategoryName = (categoryId: string) => {
    return categories.find((c) => c.id === categoryId)?.name || categoryId;
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Banner */}
      <section className="bg-foreground py-16 md:py-24">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display text-background tracking-tight"
          >
            MENU
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-background/60 mt-4 text-lg font-light"
          >
            Fresh ingredients, premium quality
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 bg-background z-40 border-b border-border">
        <div className="container-custom py-4">
          {/* Search and Sort */}
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 appearance-none cursor-pointer min-w-[180px]"
            >
              <option value="default">Popular First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === "all"
                  ? "bg-foreground text-background"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category.id
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No items found. Try a different search or category.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedItems).map(([categoryId, items]) => (
                <motion.div
                  key={categoryId}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Category Header */}
                  <h2 className="text-2xl md:text-3xl font-display text-foreground mb-6 pb-3 border-b border-border">
                    {getCategoryName(categoryId)}
                  </h2>

                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-foreground/20 hover:shadow-sm transition-all"
                      >
                        <div className="flex-1 min-w-0 pr-4">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-foreground truncate">
                              {item.name}
                            </h3>
                            {item.popular && (
                              <span className="flex-shrink-0 text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                Popular
                              </span>
                            )}
                          </div>
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
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Menu;
