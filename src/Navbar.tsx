

export default function Navbar() {


    const list: string[] = ['Home', 'About', 'Skills', 'Projects', 'Contact']
    return (
        <div>
            <nav className="flex justify-between items-center p-3 sm:mx-3 ">
                <div>
                    <h1 className='text-2xl text-blue-600 font-bold'>ME</h1>
                </div>
                <ul className="flex gap-3 text-sm sm:text-base sm:gap-5 justify-center items-center">
                    {list.map((item) =>
                        <div>
                            <li className="text-gray-800 group relative">
                                <a href="\">{item}
                                </a>
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>

                            </li>
                        </div>

                    )}
                </ul>
            </nav>
        </div>
    )
}
