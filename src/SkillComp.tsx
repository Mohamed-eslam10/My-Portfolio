
export default function SkillComp({ logo, title, description, items }: { logo: React.ReactNode, title: string, description: string, items: string[] }) {
    return (
        <div className=" border border-slate-300 flex flex-col  gap-2 p-4 rounded-lg  shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <h1 className="bg-blue-200 text-blue-600  w-11 h-11 flex justify-center items-center text-2xl p-3 rounded-md">
                {logo}

            </h1>
            <div>
                <p className="text-slate-900 font-semibold">{title}</p>
                <p className="text-slate-700 mb-2">{description}</p>

            </div>
            <div>
                <div className="flex gap-3 flex-wrap">
                    {items?.map((item) =>
                        <div key={item} className="bg-sky-100 text-slate-900 px-3 py-1 text-sm rounded-md">
                            {item}
                        </div>
                    )}


                </div>
            </div>

        </div>
    )
}
