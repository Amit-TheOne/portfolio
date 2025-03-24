import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { ContactButton } from "@/components/ContactButton";

export const Contact = () => {
    return (
        <section id="contact" className="py-12 md:py-16 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Want to reach out?"
                    title="Contact"
                    description="Connect with me on my socials or email me directly to reach out."
                />

                <div className="mt-16 md:mt-20">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
                        <div
                            className="absolute inset-0 opacity-10 -z-10"
                            style={{
                                backgroundImage: `url(${grainImage.src})`,
                            }}
                        />
                        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
                            <div>
                                <h2 className="font-serif text-2xl md:text-3xl">
                                    {`Let's create something amazing together`}
                                </h2>
                                <p className="text-sm md:text-base mt-2 font-medium">
                                    {`Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.`}
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
