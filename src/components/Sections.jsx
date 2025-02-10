import React from 'react'
import Sec1 from "./sections/Sec1";
import Sec2 from "./sections/Sec2";
import { motion } from "framer-motion";
import Sec3 from './sections/Sec3';

const Sections = () => {
    return (
        <section className="w-full md:max-w-[95vw] max-w-[90vw]  mx-auto -mt-20 py-12 bg-white rounded-lg shadow-xl shadow-slate-200 relative z-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
            >
                <Sec1 />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="mt-10"
            >
                <Sec2 />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
                className="mt-10"
            >
                <Sec3 />
            </motion.div>

        </section>
    )
}

export default Sections