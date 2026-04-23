import frontend from './assets/front-person.png';
import { VscGithubAlt } from "react-icons/vsc";
import { GrShare } from "react-icons/gr";

export default function ProjectComp({picture, title, description, items,code ,demo}: { picture: string, title: string, description: string, items: string[], code: string, demo: string }) {
    return (
        <div className="border border-slate-300 rounded-xl  shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <img src={picture} alt="Project" className=' w-full max-h-xs max-h-[250px] object-cover  rounded-t-xl' />
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
