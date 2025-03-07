import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { socialData } from "@/data/socialData";

export const Contact = () => {
    return (
        <section className="py-12 md:py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Want to reach out?"
                    title="Contact"
                    description="Connect with me on my socials or email me directly to reach out."
                />

                <div className="mt-16 md:mt-20 lg:mt-24 gap-8">
                    <Card className="p-0 flex flex-col ">
                        <nav className="flex flex-row gap-8 md:gap-12 lg:gap-14 items-center flex-wrap px-4 md:px-10 lg:px-24 pt-10 text-base md:text-lg font-medium">
                            {socialData.slice(0, 5).map((link) => {
                                const Component = link.iconType;

                                return (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        target="blank"
                                        className="inline-flex items-center gap-4 px-4 md:px-8 py-2 md:py-3 text-gray-900 hover:text-white fill-gray-900 hover:fill-white bg-gradient-to-r from-emerald-300 to-sky-400 outline outline-2 outline-transparent hover:bg-gradient-to-r hover:from-emerald-300/70 hover:to-sky-400/70 hover:outline-white rounded-xl mx-auto transition-all duration-[400ms] hover:cursor-pointer"
                                    >
                                        <Component className="size-5" />
                                        <span className="">{link.title}</span>
                                    </a>
                                );
                            })}
                        </nav>

                        <nav className="flex items-center px-4 md:px-10 lg:px-24 pt-8 md:pt-12 lg:pt-14 pb-10 mx-auto my-auto text-base md:text-lg font-medium">
                            {socialData.slice(5).map((link) => {
                                const Component = link.iconType;

                                return (
                                    <div
                                        key={link.title}
                                        className="flex flex-col md:flex-row items-center gap-4 px-4 md:px-8 py-2 md:py-3 text-gray-900 hover:text-white fill-gray-900 hover:fill-white bg-gradient-to-r from-emerald-300 to-sky-400 outline outline-2 outline-transparent hover:bg-gradient-to-r hover:from-emerald-300/70 hover:to-sky-400/70 hover:outline-white rounded-xl mx-auto transition-all duration-[400ms] hover:cursor-default"
                                    >
                                        <div className="inline-flex items-center gap-4 mx-auto">
                                            <Component className="size-5" />
                                            <span className="">
                                                {link.title}
                                            </span>
                                        </div>

                                        <div className="flex text-wrap items-center gap-2 relative z-0 px-3 ml-3">
                                            <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-300  to-cyan-900 hover:bg-none rounded-2xl blur-sm -mx-2 -my-1 transition-all duration-1000 cursor-text hover:select-text" />
                                            <span className="">
                                                {link.href}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </nav>
                    </Card>
                </div>
            </div>
        </section>
    );
};
