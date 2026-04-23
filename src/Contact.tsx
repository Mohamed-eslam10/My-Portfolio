import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

export default function Contact() {
    return (
        <div>
            <div id="contact" className="mb-4 scroll-mt-20 mt-10">
                <h1 className="text-center text-slate-800 text-2xl font-bold mt-2">Get In Touch</h1>
                <p className="text-center text-slate-500 text-base mt-2 p-3">I'm currently available for freelance work and new opportunities. Feel free to  reach out!</p>
            </div>
            <div className="flex flex-col md:flex-row p-3">
                <div className="md:w-1/2 p-3">
                    <h2 className="text-xl font-bold text-slate-800 mb-3">Contact Information</h2>
                    <div className=" flex flex-col gap-4">
                        <div className="shadow flex gap-3 items-center p-3 border border-slate-300 rounded-lg ">
                            <span className="text-blue-700 bg-blue-200 text-2xl p-2 rounded-lg"><TfiEmail /></span>
                            <div className="flex flex-col">
                                <span className="text-slate-600">Email</span>
                                <span className="font-semibold">mokee2008mes@gmail.com</span>
                            </div>
                        </div>

                        <div className="shadow flex gap-3 items-center p-3 border border-slate-300 rounded-lg ">
                            <span className="text-blue-700 bg-blue-200 text-2xl p-2 rounded-lg"><LuPhone /></span>
                            <div className="flex flex-col">
                                <span className="text-slate-600">Phone</span>
                                <span className="font-semibold">+20 1200973396</span>
                            </div>
                        </div>

                        <div className="shadow flex gap-3 items-center p-3 border border-slate-300 rounded-lg ">
                            <span className="text-blue-700 bg-blue-200 text-2xl p-2 rounded-lg"><IoLocationOutline /></span>
                            <div className="flex flex-col">
                                <span className="text-slate-600">Location</span>
                                <span className="font-semibold">Alexandria, Egypt</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="border border-slate-300 rounded-lg p-3 w-full md:w-1/2">
                    <h2 className="text-lg font-semibold text-slate-800 ">Send Me a Message</h2>
                    <p className="text-slate-500">Fill out the form below and I will get back to you as soon as possible.</p>
                    <form className="flex flex-col gap-4 mt-4">
                        <input type="text" placeholder="Your Name" className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <input type="email" placeholder="Your Email" className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        <textarea placeholder="Your Message" className="border border-slate-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        <button className="bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors duration-300 cursor-pointer">Send Message</button>
                    </form>

                </div>

            </div>
        </div>
    )
}
