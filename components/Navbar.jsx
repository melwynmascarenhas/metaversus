'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { navVariants } from '../utils/motion'

const Navbar = () => (
  <nav>
    <motion.div
      variants={navVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img src="/search.svg" alt="search" className="w-[24]px h-[24]px object-contain" />
        <h2 className="font-extrabold text-[24]px leading-[30]px text-white"> METAVERSUS</h2>
        <img src="/menu.svg" alt="menu" className="w-[24]px h-[24]px object-contain" />
      </div>
    </motion.div>
  </nav>
);

export default Navbar;
