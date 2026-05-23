import { motion, useScroll } from 'framer-motion';
export default function ScrollLine() {
    const { scrollYProgress } = useScroll();
    return (
        <div className='bg-violet-700'>
            <motion.div
                className="absolute bottom-0 left-0 h-0.5 w-full z-50 origin-left bg-blue-600"
                style={{ scaleX: scrollYProgress }}
            />
        </div>
    )
}
