import { motion } from "framer-motion";
import { FiClock, FiMapPin, FiInstagram } from "react-icons/fi";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import { businessInfo } from "@/data/menuData";

const About = () => {
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
            ABOUT US
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-background/60 mt-4 text-lg font-light max-w-xl mx-auto"
          >
            Abuja's favorite burger destination
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display text-foreground mb-8">
                OUR STORY
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                {businessInfo.story.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-xl border border-border text-center"
            >
              <div className="w-14 h-14 bg-foreground/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiClock className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-2">
                OPENING HOURS
              </h3>
              <p className="text-muted-foreground">{businessInfo.hours}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Open every day of the week
              </p>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-xl border border-border text-center"
            >
              <div className="w-14 h-14 bg-foreground/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiMapPin className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-2">
                LOCATION
              </h3>
              <p className="text-muted-foreground">{businessInfo.location}</p>
              <p className="text-sm text-muted-foreground mt-2">
                Delivery available across Abuja
              </p>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-xl border border-border text-center"
            >
              <div className="w-14 h-14 bg-foreground/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                <FiInstagram className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-xl font-display text-foreground mb-2">
                FOLLOW US
              </h3>
              <div className="flex justify-center gap-3 mt-4">
                <a
                  href={businessInfo.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-foreground/5 rounded-lg hover:bg-foreground hover:text-background transition-colors"
                >
                  <FiInstagram className="w-5 h-5" />
                </a>
                <a
                  href={businessInfo.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-foreground/5 rounded-lg hover:bg-foreground hover:text-background transition-colors"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${businessInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-foreground/5 rounded-lg hover:bg-foreground hover:text-background transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-background/60 font-medium uppercase tracking-wider text-sm">
              Our Promise
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-background mt-2 mb-12">
              WHAT WE STAND FOR
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Quality", desc: "Premium ingredients only" },
              { title: "Passion", desc: "Made with care always" },
              { title: "Speed", desc: "Quick service guaranteed" },
              { title: "Satisfaction", desc: "Your happiness matters" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 border border-background/10 rounded-xl"
              >
                <h3 className="text-xl font-display text-background">
                  {value.title}
                </h3>
                <p className="text-background/70 text-sm mt-2">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
