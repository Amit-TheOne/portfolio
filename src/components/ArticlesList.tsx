interface Article {
    title: string;
    description: string;
    link: string;
    type: "Article" | "Research Paper";
}

const article: Article = {
    title: "ZenFi: A Unified Platform for Productivity and Relaxation",
    description:
        "This research paper investigates the impact of lo-fi music on productivity and mental well-being. It explores how soothing auditory environments can enhance focus, creativity, and cognitive function. The study also introduces ZenFi, a unified platform that integrates lo-fi music with productivity tools to support a balanced and efficient workflow.",
    link: "https://doi.org/10.33564/IJEAST.2024.v09i06.013",
    type: "Research Paper",
};

export const ArticlesList = () => (
    <div className="my-10 md:mt-12 mx-auto w-[80%] max-w-xl md:w-[85%] md:max-w-3xl lg:w-[75%] lg:max-w-4xl animate-slideInLeft">
        <div className="flex flex-col text-center bg-gray-800/70 rounded-2xl shadow-lg p-7 md:p-10 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3 md:mb-4">
                {article.title}
            </h3>
            <p className="text-gray-300/80 mb-7 md:mb-8 text-base">
                {article.description}
            </p>
            <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit mx-auto px-5 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-sky-500 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-sky-600 text-white font-semibold transition-all duration-300"
            >
                {article.type === "Article"
                    ? "Read Article →"
                    : "Read Research Paper →"}
            </a>
        </div>
    </div>
);
