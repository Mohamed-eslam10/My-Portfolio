import ProjectComp from "./ProjectComp";
import ProjectComing from "./ProjectComing";
export default function Projects() {
  return (
    <div>
      <div id="projects" className="mb-4 scroll-mt-20">
        <h1 className="text-center text-slate-800 text-2xl font-bold mt-2">Featured Projects</h1>
        <p className="text-center text-slate-500 text-base mt-2">Here are some of my recent projects that showcase my skills and experience.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 flex-wrap gap-4">
        <ProjectComp
          picture='https://th.bing.com/th/id/R.1d997df54a76c0871a1c8ced2cb9adb4?rik=gVOf3XEwWqnwCg&pid=ImgRaw&r=0'
          title="Project 1"
          description="Description for Project 1"
          items={["JavaScript", "React"]}
          code="https://github.com"
          demo="https://github.com" />
        <ProjectComp
          picture='https://tse4.mm.bing.net/th/id/OIP.F_FF1F6-f7Wh5JQMRb6TBwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3'
          title="Project 2"
          description="Description for Project 2"
          items={["TypeScript", "Node.js"]}
          code="https://github.com"
          demo="https://github.com" />
        <ProjectComing />
      </div>
    </div>
  )
}
