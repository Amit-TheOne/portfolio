import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { ContactButton } from "@/components/ContactButton";

export const Contact = () => {
    return (
        <section id="contact" className="py-14 md:py-16 lg:py-24">
            <div className="">
                <SectionHeader
                    eyebrow="Have something in mind?"
                    title="Contact"
                    description="Connect with me on socials or drop an email to reach out."
                />

                <div className="mt-16 mb-2 md:mt-20 lg:mb-0 mx-auto w-[80%] md:w-[85%] md:max-w-4xl lg:w-[83%] lg:max-w-5xl">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                        <div
                            className="absolute inset-0 opacity-10 -z-10"
                            style={{
                                backgroundImage: `url(${grainImage.src})`,
                            }}
                        />
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-center">
                            <div>
                                <h2 className="font-serif text-2xl md:text-3xl">
                                    {`Want to work or collaborate together?`}
                                </h2>
                                <p className="text-sm md:text-base mt-3 md:mt-4 font-medium">
                                    {`I'm open to freelance projects, collaborations and full-time roles. Let's connect over a virtual coffee and chat!`}
                                </p>
                            </div>
                            <div>
                                <ContactButton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
