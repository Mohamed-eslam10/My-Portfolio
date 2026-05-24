import { TfiEmail } from "react-icons/tfi";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { motion, type Variants } from "framer-motion";
export default function Contact() {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        }
    };
    const cardVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            }
        }
    };
    return (
        <div>
            <div id="contact" className="mb-4 scroll-mt-20 mt-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center text-slate-800 text-2xl font-bold mt-1">Get In Touch</motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}

                    className="text-center text-slate-500 text-base mt-2 p-3">I'm currently available for freelance work and new opportunities. Feel free to  reach out!</motion.p>
            </div>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col md:flex-row p-3">
                <motion.div
                    variants={cardVariants}

                    className="md:w-1/2 p-3">
                    <h2 className="text-xl font-bold text-slate-800 mb-3">Contact Information</h2>
                    <div className=" flex flex-col gap-4">
                        <motion.div
                            whileHover={{
                                y: -5,
                                scale: 1.02,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                            }}
                            className="shadow flex gap-3 items-center p-3 border border-slate-300 rounded-lg ">
                            <span className="text-blue-700 bg-blue-200 text-2xl p-2 rounded-lg"><TfiEmail /></span>
                            <div className="flex flex-col">
                                <span className="text-slate-600">Email</span>
                                <span className="font-semibold">mokee2008mes@gmail.com</span>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{
                                y: -5,
                                scale: 1.02,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                            }}
                            className="shadow flex gap-3 items-center p-3 border border-slate-300 rounded-lg ">
                            <span className="text-blue-700 bg-blue-200 text-2xl p-2 rounded-lg"><LuPhone /></span>
                            <div className="flex flex-col">
                                <span className="text-slate-600">Phone</span>
                                <span className="font-semibold">+20 1200973396</span>
                            </div>
                        </motion.div>

                        <motion.div
                            whileHover={{
                                y: -5,
                                scale: 1.02,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                            }}
                            className="shadow flex gap-3 items-center p-3 border border-slate-300 rounded-lg ">
                            <span className="text-blue-700 bg-blue-200 text-2xl p-2 rounded-lg"><IoLocationOutline /></span>
                            <div className="flex flex-col">
                                <span className="text-slate-600">Location</span>
                                <span className="font-semibold">Alexandria, Egypt</span>
                            </div>
                        </motion.div>

                    </div>

                </motion.div>
                <motion.div
                    variants={cardVariants}
                    className="border border-slate-300 rounded-lg p-3 w-full md:w-1/2">
                    <h2 className="text-lg font-semibold text-slate-800 ">Send Me a Message</h2>
                    <p className="text-slate-500">Fill out the form below and I will get back to you as soon as possible.</p>
                    <form className="flex flex-col gap-4 mt-4">
                        <input type="text" placeholder="Your Name" className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500" />
                        <input type="email" placeholder="Your Email" className="border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500" />
                        <textarea placeholder="Your Message" className="border border-slate-300 rounded-lg p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-slate-500"></textarea>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-slate-700 text-white py-2 px-4 rounded-lg hover:bg-slate-800 transition-colors duration-300 cursor-pointer"
                        >
                            Send Message
                        </motion.button>
                    </form>

                </motion.div>

            </motion.div>
        </div>
    )
}
