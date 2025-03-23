import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import Image from "next/image";
import avatarHi from "@/assets/images/avatar-hi.png";
import { BeyondCode } from "@/components/BeyondCode";
import { experineceData } from "@/data/experienceData";

export const About = () => {
    return (
        <div id="about" className="py-16 md:py-20 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="A Glimps Into My Life"
                    title="About Me"
                    description="Know more about my works, experiences, hobbies & my journey."
                />

                <div className="mt-8 border-t border-white/80 w-28 mx-auto" />

                <div className="mt-12 flex flex-col gap-8">
                    <div className="grid grid-cols-1 gap-12 lg:gap-8 md:grid-cols-5 lg:grid-cols-3">
                        <Image
                            src={avatarHi}
                            className="size-[150px] md:size-[180px] lg:size-[280px] mx-auto my-auto md:col-span-5 lg:col-span-1 -rotate-2"
                            alt="Person waving hand for hi"
                        />
                        <div className="text-white text-lg md:text-xl text-justify space-y-6 lg:ml-12 lg:mt-10 tracking-wide lg:tracking-wider md:col-span-5 lg:col-span-2">
                            <p className="text-center">{`Hey There, I'm Amit!!`}</p>
                            <p>
                                A{" "}
                                <span className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                                    Full-Stack Developer, Software Engineer &
                                    MERN Stack
                                </span>
                                {` fanatics specializes in building robust solutions
                            and crafting seamless user experiences. I'm B.Tech Computer Science grad from Shri Shankaracharya Technical Campus - Bhilai. Beyond coding, I'm an active part of the tech
                            community learning, sharing, and connecting with
                            people.`}
                            </p>
                            <p>
                                {`Off-screen, I dive into Photography, exploring new
                            places, capturing moments, or getting lost in a good
                            music.  I'm always driven by creativity and curiosity.`}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-4">
                        <Card className="p-0 flex flex-col md:col-span-5 lg:col-span-2 md:items-center">
                            <CardHeader
                                title="Experiences"
                                className="px-6 py-6 tracking-wider"
                            />
                            <div className="px-10 md:px-20 py-8 -mt-10 lg:-mt-6 text-white text-base md:text-lg space-y-3 font-semibold">
                                {experineceData.map((exp) => (
                                    <p key={exp.role}>
                                        <span>{exp.experience} - </span>
                                        <span>{exp.role}</span>
                                    </p>
                                ))}
                            </div>
                        </Card>

                        <Card className="h-[320px] p-0 flex flex-col md:col-span-5 lg:col-span-2">
                            <CardHeader
                                title="Beyond the code"
                                description="Drag to play around."
                                className="px-6 py-6 md:items-center tracking-wider"
                            />
                            <BeyondCode />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};
