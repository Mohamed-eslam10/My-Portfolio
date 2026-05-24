import { VscGithubAlt } from "react-icons/vsc";
import { GrShare } from "react-icons/gr";
import { motion } from "framer-motion";

export default function ProjectComp({ picture, title, description, items, code, demo }: { picture: string, title: string, description: string, items: string[], code: string, demo: string }) {
    return (
        <div className="border border-slate-300 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
            <motion.div
                whileHover={{ scale: 1.05, filter: "brightness(1.13)" }}>
                <img src={picture} alt="Project" className=' w-full h-[220px] md:h-[260px] object-cover  rounded-t-xl' />

            </motion.div>
            <div className="p-3 mt-3">
                <h2 className='font-semibold'>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex gap-3 p-3 flex-wrap ">
                {
                    items.map((item) =>
                        <span key={item} className="bg-sky-100 text-slate-900 px-3 py-1 text-sm rounded-md">{item}</span>)
                }
            </div>
            <div className="flex gap-3 p-3">
                <a href={code} className="text-white bg-gray-500 hover:underline  py-1 px-3 rounded-md flex justify-center items-center gap-2 font-semibold"><VscGithubAlt />Code</a>
                <a href={demo} className="text-white bg-black hover:underline py-1 px-3 rounded-md flex justify-center items-center gap-2 font-semibold"><GrShare />Demo</a>
            </div>
        </div>
    )
}
