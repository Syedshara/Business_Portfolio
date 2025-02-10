import { useRef, useState, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { TextureLoader, LinearFilter, Euler } from "three";
import { ContactShadows } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";
import img from "./assets/bg2.jpg";

const images = [img, img, img, img];

const RotatingCube = () => {
    const ref = useRef();
    const [index, setIndex] = useState(0);

    const textures = useMemo(() => {
        return images.map((src) => {
            const texture = new TextureLoader().load(src);
            texture.minFilter = LinearFilter;
            return texture;
        });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const { rotation } = useSpring({
        rotation: [0, index * (Math.PI / 2), 0],
        config: { duration: 2000, easing: (t) => t * (2 - t) }
    });

    return (
        <a.mesh ref={ref} castShadow rotation={rotation}>
            <boxGeometry args={[window.innerWidth < 768 ? 5 : 7, window.innerWidth < 768 ? 5 : 7, window.innerWidth < 768 ? 5 : 7]} />
            <meshStandardMaterial attach="material-0" map={textures[0]} />
            <meshStandardMaterial attach="material-1" map={textures[1]} />
            <meshStandardMaterial attach="material-2" color="white" />
            <meshStandardMaterial attach="material-3" color="white" />
            <meshStandardMaterial attach="material-4" map={textures[2]} />
            <meshStandardMaterial attach="material-5" map={textures[3]} />
        </a.mesh>
    );
};

const Scene = () => {
    return (
        <Canvas shadows camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
            <RotatingCube />
            <ContactShadows position={[0, -3, 0]} opacity={0.5} blur={2} />
        </Canvas>
    );
};

const ContentSection = () => {
    return (
        <div className="flex flex-col justify-center items-center md:items-center text-center md:max-w-1/2 w-full px-4 md:px-6">
            <h1 className="text-2xl md:text-4xl font-bold">
                CREATE YOUR OWN PAGE
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-1 mt-2">
                <span className="border border-orange-400 h-0 w-24 md:w-36"></span>
                <span className="self-center text-3xl md:text-4xl text-orange-500">♦</span>
                <span className="border border-orange-400 h-0 w-24 md:w-36"></span>
            </div>

            <p className="text-sm md:text-lg mt-4 md:mt-6 text-gray-600">
                Create your own page with many combinations! We created a builder
                that resembles a Rubik's cube: just play along and choose the side
                you like best. All the possible sections are simply awesome and will
                create an amazing-looking presentation page.
            </p>
        </div>
    );
};

const Section = () => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 bg-gray-100 px-4 md:px-16 py-8 md:py-10">
            <div className="w-full md:w-2/3 md:border-r md:pr-6">
                <ContentSection />
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
                    <Scene />
                </div>
            </div>
        </div>
    );
};

export default Section;
