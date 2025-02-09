import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

const images = ["/src/assets/bg.jpg", "/src/assets/bg.jpg", "/src/assets/bg.jpg", "/src/assets/bg2.jpg"];


const RotatingBox = ({ scrollProgress }) => {
    const ref = useRef();
    const textures = images.map((src) => new TextureLoader().load(src));

    useFrame(() => {
        ref.current.rotation.x = scrollProgress.current * Math.PI * 2;
    });

    return (
        <mesh ref={ref}>
            <boxGeometry args={[8, 3, 3]} />
            {textures.map((texture, index) => (
                <meshStandardMaterial key={index} map={texture} />
            ))}
        </mesh>
    );
};

const Scene = () => {
    const scrollProgress = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            scrollProgress.current = scrollY / maxScroll;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <RotatingBox scrollProgress={scrollProgress} />
        </Canvas>
    );
};


export default function App() {
    return (
        <div style={{ height: "120vh" }}>
            <Scene />
        </div>
    );
}
