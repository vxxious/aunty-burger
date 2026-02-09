import { motion } from "framer-motion";
import { FiTruck, FiClock, FiDollarSign, FiCreditCard, FiMapPin, FiHelpCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { businessInfo } from "@/data/menuData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const deliveryHighlights = [
  {
    icon: FiMapPin,
    title: "Delivery Areas",
    description: "We deliver across Abuja — Lugbe, Area1, Jabi, Wuse, Garki, Maitama, Gwarinpa, Jabi, Asokoro, and more.",
  },
  {
    icon: FiClock,
    title: "Delivery Time",
    description: "25–60 minutes depending on your location within Abuja.",
  },
  {
    icon: FiDollarSign,
    title: "Minimum Order",
    description: "No minimum order required. Order as little or as much as you want!",
  },
  {
    icon: FiCreditCard,
    title: "Payment",
    description: "Bank transfer, payment validate orders. Details shared via WhatsApp after ordering.",
  },
];

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "You can order directly through all our social media or through the website by adding items to your cart and checking out via WhatsApp, or message us directly on WhatsApp. We'll confirm your order and share payment details.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver across Abuja including Wuse, Garki, Maitama, Asokoro, Gwarinpa, Jabi, Utako, Life Camp, Lugbe, and surrounding areas. If you're unsure, just ask — we'll do our best to reach you!",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery typically takes 25–60 minutes depending on your location and order volume. During peak hours (weekends, holidays), it may take slightly longer. We'll keep you updated via WhatsApp.",
  },
  {
    question: "Is there a minimum order amount?",
    answer:
      "No, there's no minimum order. Whether you want a single hot dog or a full platter, we've got you covered.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfer, After placing your order on WhatsApp or any of our social media platforms, we'll send you our bank account details for transfer. You can also pay the rider in cash upon delivery.",
  },
  {
    question: "Can I customize my order?",
    answer:
      "Absolutely! You can add extras like cheese, beef patty, chicken, or sausage to any item. Just let us know your preferences in the WhatsApp message or use the Extras section on our menu.",
  },
  {
    question: "Do you offer catering or bulk orders?",
    answer:
      "Yes! We handle event catering and bulk orders. Contact us via WhatsApp at least 24 hours in advance for large orders so we can prepare everything fresh for you.",
  },
  {
    question: "What are your operating hours?",
    answer: `We're open ${businessInfo.hours}. Orders placed outside these hours will be fulfilled the next business day.`,
  },
  {
    question: "Can I cancel or modify my order?",
    answer:
      "You can cancel or modify your order within 5 minutes of placing it by messaging us on WhatsApp. After that, preparation may have already started.",
  },
  {
    question: "Is there a delivery fee?",
    answer:
      "Delivery fees vary based on your location within Abuja. We'll let you know the exact fee when you place your order on WhatsApp.",
  },
];

const DeliveryFAQ = () => {
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
            DELIVERY & FAQ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-background/60 mt-4 text-lg font-light max-w-xl mx-auto"
          >
            Everything you need to know about ordering from Aunty Burgers
          </motion.p>
        </div>
      </section>

      {/* Delivery Highlights */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-2">
              DELIVERY INFO
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border text-center"
              >
                <div className="w-14 h-14 bg-foreground/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-lg font-display text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order Steps */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Simple & Quick
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-2">
              HOW TO ORDER
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Browse & Add",
                description: "Explore our menu and add your favorite items to the cart.",
              },
              {
                step: "02",
                title: "Checkout via WhatsApp",
                description: "Fill in your details and we'll send your order summary to WhatsApp.",
              },
              {
                step: "03",
                title: "Pay & Enjoy",
                description: "Complete payment via bank transfer or cash on delivery. Sit back and enjoy!",
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <span className="text-5xl font-display text-foreground/10">
                  {item.step}
                </span>
                <h3 className="text-xl font-display text-foreground mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Got Questions?
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-2">
              <FiHelpCircle className="inline-block w-10 h-10 mr-3 -mt-1" />
              FAQ
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-foreground/20"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display text-background mb-4">
              STILL HAVE QUESTIONS?
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-lg mx-auto">
              Reach out to us on WhatsApp and we'll be happy to help.
            </p>
            <a
              href={`https://wa.me/${businessInfo.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat with Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DeliveryFAQ;
