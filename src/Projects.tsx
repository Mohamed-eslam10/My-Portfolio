import ProjectComp from "./ProjectComp";
import ProjectComing from "./ProjectComing";
import { motion, type Variants } from "framer-motion";
import eCommerce from "./assets/e-commerce.png";
export default function Projects() {

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      }
    },
  };
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      }
    },
  };


  return (
    <div>
      <div id="projects" className="mb-4 scroll-mt-20">
        <motion.h1
          className="text-center text-slate-800 text-2xl font-bold mt-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}

        >
          Featured Projects
        </motion.h1>
        <motion.p
          className="text-center text-slate-500 text-base mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects that showcase my skills and experience.
        </motion.p>
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 flex-wrap gap-4">
        <motion.div variants={cardVariants}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          >
          <ProjectComp
            picture={eCommerce}
            title="E-commerce"
            description="A fully responsive E-commerce application focused on performance and user experience"
            items={["Next", "Tailwind","Swiper","Typescript","Zustand",]}
            code="https://github.com/Mohamed-eslam10/E-commerce"
            demo="https://e-commerce-41.vercel.app/" />
        </motion.div>
       
        {/* coming */}
        <motion.div variants={cardVariants}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          transition={{ type: "spring", stiffness: 300 }}
          >
          <ProjectComing />

        </motion.div>
      </motion.div>
    </div>
  )
}

