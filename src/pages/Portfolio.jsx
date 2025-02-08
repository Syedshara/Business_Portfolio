import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Sec1 from "../components/sections/Sec1";
import Sec2 from "../components/sections/Sec2";
import img from "../assets/bg.jpg";

export default function Portfolio() {
    const sentence = "Material Kit 3";
    return (
        <div className="relative min-h-screen bg-slate-200">
            <div>
                <Navigation />
                <div className="h-[600px] bg-cover bg-center pt-4 relative z-0" style={{ backgroundImage: `url(${img})` }} >
                    <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
                    <header className="w-full h-full text-center text-white relative z-20 flex flex-col justify-center items-center">
                        <h1 className="text-6xl font-bold">
                            {sentence.split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="text-lg mt-4"
                        >
                            Free & Open Source Web UI Kit built over Bootstrap 5.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.5 }}
                        >
                            Join over 1.6 million developers around the world.
                        </motion.p>
                    </header>
                </div>

                <section className="w-full max-w-[95vw] mx-auto -mt-20 py-12 px-10 bg-white rounded-lg shadow-xl shadow-slate-200 relative z-20">


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

                </section>
            </div>
        </div>
    );
}
