import Image from "next/image";
import { socialData } from "@/data/socialData";
import Link from "next/link";
import { TypeText } from "@/components/TypeText";
import { HeroOrbitWrapper } from "@/components/HeroOrbitWrapper";

export const Hero = () => {
    const words: string[] = ["Hey! I'm", "Amit Dewangan"];

    return (
        <div
            id="home"
            className="py-56 md:py-56 lg:py-60 relative z-0 overflow-x-clip"
        >
            <div className="absolute inset-0 -z-30 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: "url(/grain.jpg)",
                    }}
                />

                <div className="size-[380px] md:size-[410px] absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_500px_inset] shadow-gray-950" />
                <div className="size-[620px] hero-ring" />
                <div className="size-[820px] hero-ring" />
                <div className="size-[1020px] hero-ring" />
                <div className="size-[1220px] hero-ring" />
                <div className="size-[1420px] hero-ring" />

                <HeroOrbitWrapper />
            </div>

            <div className="w-full md:container">
                <div className="flex flex-col items-center -mt-6 md:-mt-8 lg:-mt-10 ">
                    <Image
                        src="/avatar-computer.png"
                        alt="Person peeking from behind the laptop"
                        className="size-[100px] md:size-[120px]"
                        width={500}
                        height={500}
                        priority
                    />
                    <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex rounded-lg items-center gap-4">
                        <div className="bg-green-500 size-2.5 rounded-full relative">
                            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large" />
                        </div>
                        <div className="text-xs md:text-sm font-medium">
                            Looking for full-time Roles!
                        </div>
                    </div>
                </div>

                <div className="max-w-lg mx-auto">
                    <TypeText
                        text={words[0]}
                        delay={1}
                        className="font-serif mt-10 text-center text-xl md:text-2xl tracking-widest"
                        minHeight="2rem"
                    />
                    <TypeText
                        text={words[1]}
                        delay={2 + words[0].length * 0.1}
                        className="font-serif mt-4 text-center text-4xl md:text-5xl tracking-wider"
                        minHeight="3rem"
                    />

                    <div className="flex flex-col gap-4 mt-4 md:mt-6 text-center text-slate-300">
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
                                <Component className="size-6 fill-[url(#tech-icon-gradient)] hover:fill-white/90 transition-all duration-300 ease-in-out hover:scale-110" />
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
