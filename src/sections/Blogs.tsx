import { BlogsComponent } from "@/components/BlogsComponent";
import { SectionHeader } from "@/components/SectionHeader";

export const Blogs = () => {
    return (
        <section id="blogs" className="pt-16 pb-10 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
            <SectionHeader
                eyebrow="Read My Thoughts"
                title="Blogs & Articles"
                description="Sharing technical insights along my journey as a developer."
            />

            <BlogsComponent />
        </section>
    );
};
