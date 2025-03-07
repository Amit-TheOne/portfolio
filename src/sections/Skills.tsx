import { SkillItems } from "@/components/SkillItems";
import { SectionHeader } from "@/components/SectionHeader";
import { skillsData } from "@/data/skillsData";

export const Skills = () => {
    return (
        <div className="py-16 md:py-20 lg:py-24">
            <div className="container">
                <SectionHeader
                    eyebrow="Overview of"
                    title="My Skills"
                    description="Explore the technologies and tools I use to craft exceptional products."
                />
            </div>

            <div className="mt-14 md:mt-20 w-[87%] md:w-[80%] mx-auto">
                <div className="flex flex-col gap-14 overflow-x-clip px-3">
                    <SkillItems
                        skillItems={skillsData}
                        className=""
                        itemsWrapperClassName="animate-move-left [animation-duration:70s]"
                    />
                    <SkillItems
                        skillItems={skillsData}
                        className="flex-row-reverse"
                        itemsWrapperClassName="animate-move-right [animation-duration:60s]"
                    />
                </div>
            </div>
        </div>
    );
};
