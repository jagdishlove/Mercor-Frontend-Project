import React from "react";
import { motion } from "framer-motion";
import "./HomePage.scss";
import svg1 from "../../Assets/SVG/blob1.svg";
import svg2 from "../../Assets/SVG/dollar.svg";

function HomePage() {
  return (
    <div className="home-page">
      <motion.div
        className="first"
        initial={{ opacity: 0, y: -10 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <img src={svg2} alt="first" width={100} height={200} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="second"
      >
        <img src={svg2} alt="first" width={100} height={200} />
      </motion.div>
      <motion.div
        className="middle"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={svg1} alt="first" width={100} height={200} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="third"
      >
        <img src={svg2} alt="first" width={100} height={200} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="forth"
      >
        <img src={svg2} alt="first" width={100} height={200} />
      </motion.div>
    </div>
  );
}

export default HomePage;
