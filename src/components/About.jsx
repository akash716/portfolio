import aboutImg from "../assets/About2.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "motion/react"
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row md:items-center md:gap-8">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 mb-8 md:mb-0">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl max-w-full h-auto rounded-transition duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]" src={aboutImg} alt="about2" />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2">
          <div className="flex justify-center md:justify-start px-4">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl py-6 text-center md:text-left font-light tracking-lighter">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>



  )
};

export default About
