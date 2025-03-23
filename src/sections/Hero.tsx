import avatarImage from "@/assets/images/avatar-computer.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import { socialData } from "@/data/socialData";
import Link from "next/link";

export const Hero = () => {
    return (
        <div
            id="hero"
            className="py-40 md:py-56 lg:py-60 relative z-0 overflow-x-clip"
        >
            <div className="absolute inset-0 -z-30 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `url(${grainImage.src})`,
                    }}
                />
                <div className="size-[620px] hero-ring" />
                <div className="size-[820px] hero-ring" />
                <div className="size-[1020px] hero-ring" />
                <div className="size-[1220px] hero-ring" />
                <div className="size-[1420px] hero-ring" />

                <HeroOrbit
                    size={430}
                    rotation={-14}
                    shouldOrbit
                    orbitDuration="30s"
                    shouldSpin
                    spinDuration="3s"
                >
                    <SparkleIcon className="size-8 text-emerald-300/20" />
                </HeroOrbit>

                <HeroOrbit
                    size={440}
                    rotation={79}
                    shouldOrbit
                    orbitDuration="32s"
                    shouldSpin
                    spinDuration="3s"
                >
                    <SparkleIcon className="size-5 text-emerald-300/20" />
                </HeroOrbit>

                <HeroOrbit
                    size={520}
                    rotation={-41}
                    shouldOrbit
                    orbitDuration="34s"
                >
                    <div className="size-2 rounded-full bg-emerald-300/20" />
                </HeroOrbit>

                <HeroOrbit
                    size={530}
                    rotation={178}
                    shouldOrbit
                    orbitDuration="36s"
                    shouldSpin
                    spinDuration="3s"
                >
                    <SparkleIcon className="size-10 text-emerald-300/20" />
                </HeroOrbit>

                <HeroOrbit
                    size={550}
                    rotation={20}
                    shouldOrbit
                    orbitDuration="38s"
                    shouldSpin
                    spinDuration="6s"
                >
                    <StarIcon className="size-12 text-emerald-300" />
                </HeroOrbit>

                <HeroOrbit
                    size={590}
                    rotation={98}
                    shouldOrbit
                    orbitDuration="40s"
                    shouldSpin
                    spinDuration="6s"
                >
                    <StarIcon className="size-8 text-emerald-300" />
                </HeroOrbit>

                <HeroOrbit
                    size={650}
                    rotation={-5}
                    shouldOrbit
                    orbitDuration="42s"
                >
                    <div className="size-2 rounded-full bg-emerald-300/20" />
                </HeroOrbit>

                <HeroOrbit
                    size={710}
                    rotation={144}
                    shouldOrbit
                    orbitDuration="44s"
                    shouldSpin
                    spinDuration="3s"
                >
                    <SparkleIcon className="size-14 text-emerald-300/20" />
                </HeroOrbit>

                <HeroOrbit
                    size={720}
                    rotation={85}
                    shouldOrbit
                    orbitDuration="46s"
                >
                    <div className="size-3 rounded-full bg-emerald-300/20" />
                </HeroOrbit>

                <HeroOrbit
                    size={770}
                    rotation={-72}
                    shouldOrbit
                    orbitDuration="48s"
                    shouldSpin
                    spinDuration="6s"
                >
                    <StarIcon className="size-16 text-emerald-300/80" />
                </HeroOrbit>
            </div>

            <div className="container">
                <div className="flex flex-col items-center md:-mt-8 lg:-mt-10">
                    <Image
                        src={avatarImage}
                        className="size-[100px] md:size-[120px]"
                        alt="Person peeking from behind the laptop"
                    />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex rounded-lg items-center gap-4">
                        <div className="bg-green-500 size-2.5 rounded-full relative">
                            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" />
                        </div>
                        <div className="text-sm font-medium">
                            Looking for full-time Roles!
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto">
                    <p className="mt-8 text-center text-white/70 md:text-lg">
                        {`Hey, I'm`}
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl text-center mt-3 tracking-wider">
                        Amit Dewangan
                    </h1>
                    <div className="flex flex-col gap-4 mt-4 md:mt-6 text-center text-white/70">
                        <p className="text-xl md:text-2xl">
                            Full Stack Developer & Software Engineer
                        </p>
                        <p className="text-base md:text-lg">
                            {`"Building Applications & Embracing Creativity"`}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-10 md:mt-12 gap-8 md:gap-11">
                    {socialData.map((link) => {
                        const Component = link.iconType;

                        return (
                            <Link
                                key={link.title}
                                href={link.href}
                                target="blank"
                                className="relative group"
                                rel="noopener noreferrer"
                            >
                                <Component className="size-5 md:size-6 fill-[url(#tech-icon-gradient)] hover:fill-white/90 transition-all duration-300 ease-in-out" />
                                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-xs bg-gray-800 text-white px-2 py-1 rounded">
                                    {link.title}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
