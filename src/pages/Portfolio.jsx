import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Sec1 from "../components/sections/Sec1";
import Sec2 from "../components/sections/Sec2";
import img from "../assets/bg.jpg";

export default function Portfolio() {



    return (
        <div className="relative min-h-screen bg-slate-200">
            <div className="h-[65vh] bg-cover bg-center pt-4 relative z-0" style={{ backgroundImage: `url(${img})` }} >
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <Navigation />
                <header className="w-full text-center py-32 text-white relative z-20">
                    <h1 className="text-6xl font-bold">Material Kit 3</h1>
                    <p className="text-lg mt-4">Free & Open Source Web UI Kit built over Bootstrap 5.</p>
                    <p>Join over 1.6 million developers around the world.</p>
                </header>
            </div>

            <section className="w-full max-w-[95vw] mx-auto -mt-20 py-12 px-10 bg-white rounded-lg shadow-xl shadow-slate-200 relative z-30">
                <Sec1 />
                <Sec2 />

            </section>

        </div>
    );
}
