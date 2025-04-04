import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { portfolioProjects } from "@/data/projectsData";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

export const Projects = () => {
    return (
        <section id="projects" className="py-12 md:py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Explore my Work"
                    title="Projects"
                    description="See how I transformed concepts into engaging experiences."
                />

                <div className="mt-14 md:mt-20 flex flex-col gap-20">
                    {portfolioProjects.map((project, projectIndex) => (
                        <Card
                            key={project.title}
                            className="px-8 pt-8 pb-0 md:pt-10 md:px-12 lg:px-14 sticky top-16"
                            style={{
                                top: `calc(96px + ${projectIndex * 20}px)`,
                            }}
                        >
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-10">
                                    <h3 className="font-serif text-2xl md:text-4xl">
                                        {project.title}
                                    </h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                                    <p className="text-sm md:text-base text-white/75 mt-4 md:mt-5">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-col md:flex-row gap-5 md:gap-6 mt-7">
                                        {project.previewLink && (
                                            <a
                                                href={project.previewLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <button className="bg-white text-gray-950 border border-white h-10 md:h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex justify-center items-center gap-3 hover:bg-gray-500 hover:text-white hover:border-gray-500 transition-all duration-[600ms]">
                                                    <span>View Project</span>
                                                    <ArrowUpRightIcon className="size-4" />
                                                </button>
                                            </a>
                                        )}

                                        <a
                                            href={project.repoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <button className="bg-white text-gray-950 border border-white h-10 md:h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex justify-center items-center gap-3 hover:bg-gray-500 hover:text-white hover:border-gray-500 transition-all duration-[600ms]">
                                                <span>View Code</span>
                                                <ArrowUpRightIcon className="size-4" />
                                            </button>
                                        </a>
                                    </div>
                                </div>

                                <div className="relative">
                                    <Image
                                        src={project.image}
                                        alt={`${project.title} preview`}
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
