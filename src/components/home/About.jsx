import React from 'react'
import { Tilt } from 'react-tilt'

import { motion } from 'framer-motion'
import { styles } from '../../style'
import { services } from '../../constant'
import { fadeIn, textVariant } from '../../utils/motion'

import { SectionWrapper } from '../widget'

import { AndroidPhoneCanvas } from '../canvas'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />

          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <div className='row-span-3'>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Objective</h2>
        </motion.div>

        {/* <AndroidPhoneCanvas /> */}
      </div>

      <motion.p
        className='mt-4 text-secondary text-[17px]
        max-w-3xl leading-[30px]'
        variants={fadeIn("", "", 0.1, 1)}>
        To be a part of the team that seek both excellence and strong design to success in achieving
        that goals of the organization at the same time, continue learning new things and reach new level of knowledge,
        Seeking and obtaining a position that will allow me to utilize my skills.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")