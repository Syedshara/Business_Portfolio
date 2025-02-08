import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        hidden: { opacity: 0, scaleY: 0, transformOrigin: "top" },
        visible: { opacity: 1, scaleY: 1, transition: { duration: 0.3, ease: "easeInOut" } },
        exit: { opacity: 0, scaleY: 0, transition: { duration: 0.2, ease: "easeInOut" } }
    };

    return (
        <nav className={`max-w-md md:max-w-3xl lg:max-w-7xl lg:mx-20  mx-auto rounded-xl bg-white py-2 px-4 flex justify-between items-center lg:bg-opacity-95 mt-3 transition-all duration-300 fixed z-50 top-0 left-0 right-0 shadow-lg ${isOpen == true ? "rounded-b-none" : ""} `}>
            <h1 className="md:text-md text-md font-medium px-2">Material Kit 3</h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 text-sm">
                <button className="text-gray-700 font-normal">Pages</button>
                <button className="text-gray-700 font-normal">Sections</button>
                <button className="text-gray-700 font-normal">Docs</button>
                <button className="bg-slate-800 text-white px-4 rounded-md shadow-md shadow-slate-400 py-3">
                    Free Download
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-700 py-2" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Smooth Dropdown Mobile Menu */}
            <motion.div
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                exit="exit"
                variants={menuVariants}
                className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 md:hidden origin-top rounded-b-xl"
            >
                <button className="text-gray-700 font-normal">Pages</button>
                <button className="text-gray-700 font-normal">Sections</button>
                <button className="text-gray-700 font-normal">Docs</button>
                <button className="bg-slate-800 text-white px-4 rounded-md shadow-md shadow-slate-400 py-3">
                    Free Download
                </button>
            </motion.div>
        </nav>
    );
};

export default Navigation;
