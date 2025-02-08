import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

const Counter = ({ number }) => {
    const [count, setCount] = useState(0);
    const [elapsed, setElapsed] = useState(0);
    const rem = (number / 12);



    useAnimationFrame((t, delta) => {
        if (count < number) {
            setElapsed((prev) => prev + delta);

            let progress = count / number;
            let speed = rem * (1 - progress) + 0.01;

            setCount((prev) => Math.min(number, prev + speed));
        }
    });

    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold"
        >
            {Math.floor(count)}
        </motion.span>
    );
};

export default Counter;
