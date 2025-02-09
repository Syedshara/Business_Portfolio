import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader, LinearFilter } from "three";
import { OrbitControls, ContactShadows } from "@react-three/drei";

const images = [
    "/src/assets/bg2.jpg",
    "/src/assets/bg2.jpg",
    "/src/assets/bg2.jpg",
    "/src/assets/bg2.jpg"
];

const RotatingCube = () => {
    const ref = useRef();
    const textures = images.map((src) => {
        const texture = new TextureLoader().load(src);
        texture.minFilter = LinearFilter;
        return texture;
    });

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.001; // Smooth rotation on Y-axis
        }
    });

    return (
        <mesh ref={ref} castShadow>
            <boxGeometry args={[7, 7, 7]} /> {/* Increased size for proportion */}
            <meshStandardMaterial attach="material-0" map={textures[0]} />
            <meshStandardMaterial attach="material-1" map={textures[1]} />
            <meshStandardMaterial attach="material-2" color="white" />
            <meshStandardMaterial attach="material-3" color="white" />
            <meshStandardMaterial attach="material-4" map={textures[2]} />
            <meshStandardMaterial attach="material-5" map={textures[3]} />
        </mesh>
    );
};

const Scene = () => {
    return (
        <Canvas shadows camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
            <RotatingCube />
            <ContactShadows position={[0, -3, 0]} opacity={0.5} blur={2} />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

const ContentSection = () => {
    return (
        <div className="flex flex-col justify-center md:items-start  text-center  md:text-left md:max-w-1/2 w-md p-6">
            <h1 className="text-3xl md:text-4xl font-bold">CREATE YOUR OWN PAGE<br />
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start gap-1 mt-2">
                <span className="self-center text-xs text-orange-500">♦</span>
                <span className="self-center text-sm text-gray-500">♦</span>
                <span className="self-center text-md text-gray-500">♦</span>
                <span className="self-center text-lg text-orange-500">♦</span>
                <span className="self-center text-xl text-gray-500">♦</span>
                <span className="self-center text-2xl text-gray-500">♦</span>
                <span className="self-center text-3xl text-gray-500">♦</span>
                <span className="self-center text-4xl text-orange-500">♦</span>
                <span className="self-center text-3xl text-gray-500">♦</span>
                <span className="self-center text-xl text-gray-500">♦</span>
                <span className="self-center text-lg text-gray-500">♦</span>
                <span className="self-center text-md text-orange-500">♦</span>
                <span className="self-center text-lg text-gray-500">♦</span>
                <span className="self-center text-sm text-gray-500">♦</span>
                <span className="self-center text-xs text-orange-500">♦</span>



            </div>

            <p className="text-base md:text-lg mt-6 text-gray-600">

                Create your own page with many combinations! We created a builder that resembles a rubik cube: just play along and choose the side you like best. All the possible sections are simply awesome and will create an amazing looking presentation page.
            </p>
        </div >
    );
};

const Section = () => {
    return (
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-100 px-6 md:px-16 py-10">
            <div className="w-full md:w-2/3 md:border-r mr-10 border-r-0" >
                <ContentSection />
            </div >
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                    <Scene />
                </div>
            </div>
        </div >
    );
};

export default Section;
