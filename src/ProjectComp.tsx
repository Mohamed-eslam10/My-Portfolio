import frontend from './assets/front-person.png';
export default function ProjectComp() {
    return (
        <div className="border border-slate-300 rounded-xl  shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <img src={frontend} alt="Project" className=' w-full max-h-xs max-h-[250px] object-cover  rounded-t-xl' />
            <div className="p-3 mt-3">
                <h2 className='font-semibold'>Project Title</h2>
                <p>Project description goes here. It should be a brief overview of the project, highlighting its main features and technologies used.</p>

            </div>
            <div className="flex gap-3 p-3">
                <a href="#" className="text-white bg-black hover:underline py-1 px-3 rounded-md">View</a>
                <a href="#" className="text-white bg-gray-500 hover:underline py-1 px-3 rounded-md"> Code</a>
            </div>
        </div>
    )
}
