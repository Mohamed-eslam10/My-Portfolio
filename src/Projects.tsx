import ProjectComp from "./ProjectComp";
import ProjectComing from "./ProjectComing";
export default function Projects() {
  return (
    <div>
        <div  id="projects" className="mb-4 scroll-mt-20">
        <h1 className="text-center text-slate-800 text-2xl font-bold mt-2">Featured Projects</h1>
        <p className="text-center text-slate-500 text-base mt-2">Here are some of my recent projects that showcase my skills and experience.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 flex-wrap gap-4">
        <ProjectComp/>
        <ProjectComp/>
        <ProjectComp/>
        <ProjectComing/>

        
        </div>
    </div>
  )
}
