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
            <div className="">
                <SectionHeader
                    eyebrow="A Glimps of Myself"
                    title="About Me"
                    description="Know more about my works, experiences & me."
                />

                <div className="mt-10 md:mt-14 lg:mt-28 flex flex-col gap-8 md:gap-14">
                    <div className="grid grid-cols-1 gap-14 lg:gap-0 md:grid-cols-5 lg:grid-cols-3 px-12 md:px-14 md:max-w-5xl lg:max-w-[84rem] mx-auto">
                        <div className="relative md:col-span-5 lg:col-span-1">
                                <div
                                    className="absolute rounded-full skew-x-[30deg] skew-y-[10deg] -rotate-[37deg] border-4 border-gray-300/70  hollow-ring-sm md:hollow-ring-md lg:hollow-ring-lg shadow-gray-400 md:shadow-gray-400 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800  to-black"
                                />
                            <Image
                                src={avatarHi}
                                className="size-[150px] md:size-[200px] lg:size-[260px] mx-auto lg:-mx-2 my-auto lg:-my-2 md:col-span-5 lg:col-span-1 -rotate-2"
                                alt="Person waving hand"
                            />
                        </div>

                        <div className="mt-8 md:mt-16 lg:mt-0 text-gray-300 text-base md:text-lg text-justify lg:text-left space-y-5 lg:-ml-8 tracking-wide md:col-span-5 lg:col-span-2">
                            <p className="text-center lg:text-left text-lg md:text-xl">
                                {`Hi, I'm Amit Dewangan!!`}
                            </p>
                            <p>
                                {`With `}
                                <span className="about-content-span">
                                    {`2+ years `}
                                </span>
                                {`of experience as a `}
                                <span className="about-content-span">
                                    {`Full Stack Developer`}
                                </span>
                                {`, I specialize in `}
                                <span className="about-content-span">
                                    {`crafting seamless digital experiences `}
                                </span>
                                {`using `}
                                <span className="about-content-span">
                                    {`MERN Stack `}
                                </span>
                                {`and `}
                                <span className="about-content-span">
                                    {`modern web technologies. `}
                                </span>
                                {`From interactive frontends to robust backends, I enjoy building applications that are performant, reliable, and impactful.`}
                            </p>

                            <p>
                                {`Driven by a passion for problem-solving and innovation, I thrive on tackling challenges, pushing technological boundaries, learning new skills, and striving to write clean, maintainable, and professional code.`}
                            </p>

                            <p>
                                {`Creativity, quality, and a dedication to excellence are the cornerstones of my work, and I'm keen to build solutions that propel success.`}
                            </p>
                        </div>
                    </div>

                    <div className="container mt-8 grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-4">
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
