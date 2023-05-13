'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { staggerContainer, planetVariants, fadeIn } from '../utils/motion'

import { NewFeatures, TypingText, TitleText, StartSteps } from "../components";
import { newFeatures } from '../constants'


const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >

      <motion.div
        variants={fadeIn('left', 'tween', 0.25, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| What's new" />
        <TitleText title={<>What's new about Metaversus</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px] text-white">
          {newFeatures.map((feature, index) => {
            return (
              <NewFeatures
                key={feature.title}
                {...feature}
              />
            )
          })}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/whats-new.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>

    </motion.div>
  </section>
);


export default WhatsNew;
