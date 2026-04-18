
import frontPerson from './assets/front-person.png'
import { GoTriangleRight } from "react-icons/go";
import {motion} from 'framer-motion'
export default function About() {
    
    return (
        <div id='about' className='scroll-smooth'>
            <h1 className="text-center text-slate-800 text-2xl font-bold mt-2">About Me</h1>
            <div className='flex flex-col md:flex-row items-center gap-6 mt-4 p-3'>
                <div>
                    <img src={frontPerson} alt="Profile Picture" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9 }}
                >
                    <div className='text-slate-800 text-lg flex flex-col gap-3 mb-4'>
                        <p>Hello! I am a Front-End Developer who enjoys building clean and user-friendly web interfaces.</p>
                        <p>I enjoy turning ideas into real web pages and learning new technologies step by step.</p>
                        <p>Right now, I am focused on improving my skills and building more complex projects.</p>

                    </div>
                    <div>
                        <h3 className='font-medium'>Here are a few technologies I have been working with:</h3>
                        <div className="flex gap-10 mt-3">
                            <ul className="text-slate-700">
                                <li className='flex items-center'><GoTriangleRight />HTML</li>

                                <li className='flex items-center'><GoTriangleRight />CSS</li>
                                <li className='flex items-center'><GoTriangleRight />JavaScript</li>
                                <li className='flex items-center'><GoTriangleRight />Bootstrap</li>
                            </ul>
                            <ul className='text-slate-700'>
                                <li className='flex items-center'><GoTriangleRight />Tailwind CSS</li>
                                <li className='flex items-center'><GoTriangleRight />React.js</li>
                                <li className='flex items-center'><GoTriangleRight />TypeScript</li>
                                <li className='flex items-center'><GoTriangleRight />Git & Github</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>

    )
}
