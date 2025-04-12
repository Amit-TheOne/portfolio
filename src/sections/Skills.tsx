import { SkillItems } from "@/components/SkillItems";
import { SectionHeader } from "@/components/SectionHeader";
import { skillsData } from "@/data/skillsData";

export const Skills = () => {
    return (
        <div id="skills" className="py-16 md:py-20 lg:py-24">
            <SectionHeader
                eyebrow="Toolset Overview"
                title="Skills"
                description="The technologies and tools I use to build and ship applications."
            />

            <div className="mt-14 md:mt-20 w-[87%] md:w-[85%] lg:max-w-7xl mx-auto">
                <div className="flex flex-col gap-14 overflow-x-clip px-3">
                    <SkillItems
                        skillItems={skillsData}
                        className=""
                        itemsWrapperClassName="animate-move-left hover:[animation-play-state:paused] [animation-duration:70s]"
                    />
                    <SkillItems
                        skillItems={skillsData}
                        className="flex-row-reverse"
                        itemsWrapperClassName="animate-move-right hover:[animation-play-state:paused] [animation-duration:60s]"
                    />
                </div>
            </div>
        </div>
    );
};
