import { LuCodeXml } from "react-icons/lu";
import SkillComp from "./SkillComp";
import { MdOutlineColorLens } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";
import { motion,type Variants } from "framer-motion";
export default function Skills() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      }
    }
  };
  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };
  return (
    <div id="skills" className="scroll-mt-20">
      <header>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-slate-800 text-2xl font-bold mt-2">Skills & Expertise
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-base mt-2">Here are my key skills and areas of expertise.</motion.p>
      </header>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true , amount: 0.2}}
        className="grid grid-cols-1  md:grid-cols-3 md:p-10 gap-4 mt-4 p-5 flex-wrap">
        <motion.div variants={cardVariants}>
          <SkillComp logo={<LuCodeXml />} title="Frontend Development" description="Building responsive and performant web applications with modern frameworks and libraries." items={["React", "TypeScript", "Redux", "React Router"]} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <SkillComp logo={<MdOutlineColorLens />} title="UI/UX Design" description="Creating intuitive and beautiful user interfaces with attention to detail and user experience." items={["Figma", "Tailwind", "CSS3", "Bootstrap"]} />
        </motion.div>
        <motion.div variants={cardVariants}>
          <SkillComp logo={<AiOutlineMobile />} title="Responsive Design" description="Ensuring seamless user experience across all devices and screen sizes." items={["Mobile-First", "Flexbox", "Grid", "Media Queries"]} />
        </motion.div>
      </motion.div>

    </div>
  )
}
