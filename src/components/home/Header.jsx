import { motion } from "framer-motion"
import { styles } from "../../style"
import { ComputersCanvas } from "../canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-sky-500" />
          <div className="w-1 sm:h-80 h-40 bg-sky-700" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-sky-400">Mark Joseph</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-neutral-300`}>
            My passion is to create innovation using <br className="sm:block hidden" /> programming, I also want to ride a motorcycle <br className="sm:block hidden" /> and explore some beautiful natures.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 top-[700px] w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary 
          flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero