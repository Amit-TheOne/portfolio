import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroOrbitWrapper = () => {
    return (
        <>
            {/* 1st Orbit */}
            <HeroOrbit
                size={425}
                rotation={170}
                shouldOrbit
                orbitDuration="30s"
                shouldSpin
                spinDuration="3s"
            >
                <StarIcon className="size-6 text-emerald-300/60" />
            </HeroOrbit>

            <HeroOrbit
                size={450}
                rotation={10}
                shouldOrbit
                orbitDuration="31s"
                shouldSpin
                spinDuration="3s"
            >
                <SparkleIcon className="size-6 text-white/50 animate-pulse" />
            </HeroOrbit>


            {/* 2nd Orbit */}
            <HeroOrbit
                size={480}
                rotation={-90}
                shouldOrbit
                orbitDuration="32s"
            >
                <div className="size-2 rounded-full bg-emerald-300/20" />
            </HeroOrbit>

            <HeroOrbit
                size={520}
                rotation={85}
                shouldOrbit
                orbitDuration="33s"
                shouldSpin
                spinDuration="3s"
            >
                <SparkleIcon className="size-7 text-white/90 animate-pulse" />
            </HeroOrbit>

            <HeroOrbit
                size={550}
                rotation={-32}
                shouldOrbit
                orbitDuration="34s"
                shouldSpin
                spinDuration="4s"
            >
                <StarIcon className="size-10 text-emerald-300" />
            </HeroOrbit>

            <HeroOrbit
                size={590}
                rotation={195}
                shouldOrbit
                orbitDuration="35s"
                shouldSpin
                spinDuration="3s"
            >
                <StarIcon className="size-9 text-emerald-300" />
            </HeroOrbit>


            {/* 3rd Orbit */}
            <HeroOrbit
                size={630}
                rotation={-10}
                shouldOrbit
                orbitDuration="36s"
            >
                <div className="size-2 rounded-full bg-emerald-300/20" />
            </HeroOrbit>

            <HeroOrbit
                size={680}
                rotation={148}
                shouldOrbit
                orbitDuration="37s"
                shouldSpin
                spinDuration="4s"
            >
                <SparkleIcon className="size-10 text-white/70 animate-pulse" />
            </HeroOrbit>

            <HeroOrbit
                size={710}
                rotation={85} 
                shouldOrbit 
                orbitDuration="38s"
            >
                <div className="size-3 rounded-full bg-emerald-300/30" />
            </HeroOrbit>

            <HeroOrbit
                size={740}
                rotation={-80}
                shouldOrbit
                orbitDuration="39s"
                shouldSpin
                spinDuration="4s"
            >
                <StarIcon className="size-10 text-emerald-300/60" />
            </HeroOrbit>


            {/* 4th Orbit */}
            <HeroOrbit
                size={770}
                rotation={120}
                shouldOrbit
                orbitDuration="40s"
                shouldSpin
                spinDuration="3s"
            >
                <StarIcon className="size-7 text-emerald-300" />
            </HeroOrbit>

            <HeroOrbit
                size={820}
                rotation={-52}
                shouldOrbit
                orbitDuration="41s"
                shouldSpin
                spinDuration="4s"
            >
                <SparkleIcon className="size-9 text-white/60 animate-pulse" />
            </HeroOrbit>

            <HeroOrbit
                size={850}
                rotation={170}
                shouldOrbit
                orbitDuration="42s"
                shouldSpin
                spinDuration="3s"
            >
                <SparkleIcon className="size-7 text-white animate-pulse" />
            </HeroOrbit>

            <HeroOrbit 
                size={860} 
                rotation={-7} 
                shouldOrbit 
                orbitDuration="43s"
            >
                <div className="size-3 rounded-full bg-emerald-300/20" />
            </HeroOrbit>


            {/* 5th Orbit */}
            <HeroOrbit
                size={920}
                rotation={-25}
                shouldOrbit
                orbitDuration="44s"
                shouldSpin
                spinDuration="4s"
            >
                <StarIcon className="size-8 text-emerald-300" />
            </HeroOrbit>

            <HeroOrbit
                size={940}
                rotation={105}
                shouldOrbit
                orbitDuration="45s"
                shouldSpin
                spinDuration="3s"
            >
                <SparkleIcon className="size-6 text-white animate-pulse" />
            </HeroOrbit>

            <HeroOrbit
                size={970}
                rotation={-65}
                shouldOrbit
                orbitDuration="46s"
            >
                <div className="size-3 rounded-full bg-emerald-300/30" />
            </HeroOrbit>

            <HeroOrbit
                size={1030}
                rotation={154}
                shouldOrbit
                orbitDuration="47s"
                shouldSpin
                spinDuration="4s"
            >
                <StarIcon className="size-9 text-emerald-300" />
            </HeroOrbit>
        </>
    );
};
