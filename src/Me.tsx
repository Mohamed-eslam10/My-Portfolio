import { VscGithubAlt } from "react-icons/vsc";
import { SlSocialLinkedin } from "react-icons/sl";
import { useState, useEffect } from "react";

export default function Me() {
    const [name, setName] = useState('');
    const docs = 'Mohamed Eslam';
    useEffect(() => { 
        let i = 0;
        const typing = setInterval(() => {
            setName(docs.slice(0, i+1));
            i++;
            if(i === docs.length){
                clearInterval(typing);
            }
        }, 120);
        return () => clearInterval(typing);

    }, [])
    return (
        <div className=" min-h-[91vh] flex flex-col justify-center items-center gap-4">
            <h1 className="text-center text-base sm:text-2xl  sm:mb-2">Hi, I'm <span className="text-blue-600 font-semibold border-r-2 pr-1 animate-pr-1">{name}</span></h1>
            <p className="text-slate-600  text-center font-medium">Frontend Developer</p>
            <p className="text-slate-500 text-center p-2 w-full sm:w-[85%] md:w-[70%] lg:w-[60%] mx-auto text-sm sm:text-base">I transform designs into interactive high-performance web experiences,
                turn ideas into elegant and responsive user interfaces,passionate about clean code and seamless user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-2">
                <button className="bg-blue-600 cursor-pointer text-white h-10 px-4  text-xs sm:text-base sm:px-2 rounded-md hover:bg-blue-700">View My Work</button>
                <button className="border cursor-pointer border-blue-600 text-blue-600  h-10 px-4  text-xs sm:text-base sm:px-2 rounded-md hover:bg-blue-100">Get In Touch</button>
            </div>
            <div className="flex gap-4">
                <a href="https://github.com/Mohamed-eslam10"><VscGithubAlt className="text-slate-700 text-2xl" /></a>
                <a href="https://www.linkedin.com/in/mohamed-eslam-1010mo"><SlSocialLinkedin className="text-slate-700 text-2xl" /></a>

            </div>
        </div>
    )
}
