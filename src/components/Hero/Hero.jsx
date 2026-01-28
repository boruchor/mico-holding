import "./Hero.css";
import bg from "../../assets/bg.webp";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="hero-wrapper"
      {/* style={{ backgroundImage: `url(${bg})` }} */}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src={logo}
        alt=""
        className="hero-logo"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
      />

      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        UNDER MAINTENANCE
      </motion.div>
    </motion.div>
  );
}
