import { LuCodeXml } from "react-icons/lu";
import SkillComp from "./SkillComp";
import { MdOutlineColorLens } from "react-icons/md";
import { AiOutlineMobile } from "react-icons/ai";

export default function Skills() {
  return (
    <div id="skills" className="scroll-mt-20">
      <header>
        <h1 className="text-center text-slate-800 text-2xl font-bold mt-2">Skills & Expertise</h1>
        <p className="text-center text-slate-500 text-base mt-2">Here are my key skills and areas of expertise.</p>
      </header>
      <div  className="grid grid-cols-1  md:grid-cols-3 md:p-10 gap-4 mt-4 p-5 flex-wrap">
        <SkillComp logo={<LuCodeXml />} title="Frontend Development" description="Building responsive and performant web applications with modern frameworks and libraries." items={["React", "TypeScript", "Redux", "React Router"]} />
        <SkillComp logo={<MdOutlineColorLens />} title="UI/UX Design" description="Creating intuitive and beautiful user interfaces with attention to detail and user experience." items={["Figma", "Tailwind", "CSS3","Bootstrap"]} />
        <SkillComp logo={<AiOutlineMobile />} title="Responsive Design" description="Ensuring seamless user experience across all devices and screen sizes." items={["Mobile-First", "Flexbox", "Grid", "Media Queries"]} />
      </div>

    </div>
  )
}
