import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import { businessInfo } from "@/data/menuData";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Build WhatsApp message with form data
    const message = `Hello Aunty Burgers

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${businessInfo.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Message sent",
      description: "We'll get back to you shortly via WhatsApp.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
            CONTACT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-background/60 mt-4 text-lg font-light"
          >
            We'd love to hear from you
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-6">
                GET IN TOUCH
              </h2>
              <p className="text-muted-foreground mb-8">
                Have a question, feedback, or want to place a large order? We're
                here to help. Reach out via any of the channels below.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-foreground/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center">
                    <FiPhone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Call Us</p>
                    <p className="text-muted-foreground">{businessInfo.phone}</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border hover:border-foreground/20 transition-colors"
                >
                  <div className="w-12 h-12 bg-whatsapp/10 rounded-xl flex items-center justify-center">
                    <FaWhatsapp className="w-5 h-5 text-whatsapp" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">
                      Quick orders and inquiries
                    </p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center">
                    <FiMapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">
                      {businessInfo.location}
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 bg-foreground/5 rounded-xl flex items-center justify-center">
                    <FiClock className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Opening Hours</p>
                    <p className="text-muted-foreground">{businessInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="font-medium text-foreground mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href={businessInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href={businessInfo.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                  >
                    <FaTiktok className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://wa.me/${businessInfo.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-6 md:p-8 rounded-xl border border-border">
                <h3 className="text-2xl font-display text-foreground mb-6">
                  SEND A MESSAGE
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow"
                      placeholder="08012345678"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-shadow resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-foreground text-background font-semibold py-4 rounded-lg hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Your message will be sent via WhatsApp for quick response
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
