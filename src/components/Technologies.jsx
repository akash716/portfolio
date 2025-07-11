import { RiReactjsLine } from "react-icons/ri"
import { TbBrandCss3 } from "react-icons/tb"
import { TbBrandHtml5 } from "react-icons/tb"
import { TbBrandJavascript } from "react-icons/tb"
import { RiTailwindCssLine } from "react-icons/ri"
import { RiGithubFill } from "react-icons/ri"
import { motion } from "motion/react"

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 pb-4">
          <TbBrandHtml5 className="text-7xl text-orange-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 pb-4">
          <TbBrandCss3 className="text-7xl text-blue-400 " />
        </motion.div>

        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 pb-4">
          <TbBrandJavascript className="text-7xl text-yellow-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 pb-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 pb-4">
          <RiTailwindCssLine className="text-7xl" />
        </motion.div>

        <motion.div
          variants={iconVariants(2.0)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 pb-4">
          <RiGithubFill className="text-7xl" />
        </motion.div>
      </div>
    </div>
  )
}

export default Technologies
