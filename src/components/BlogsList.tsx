interface Blog {
    title: string;
    description: string;
    link: string;
}

const blogs: Blog[] = [];

export const BlogsList = () => (
    <div className="my-10 md:mt-12 mx-auto w-[80%] max-w-lg md:w-[85%] md:max-w-4xl lg:w-[85%] lg:max-w-6xl animate-slideInRight">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <div
                        key={blog.title}
                        className="flex flex-col justify-between bg-gray-800/70 rounded-2xl shadow-lg p-6 md:p-7 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div>
                            <h3 className="text-xl font-semibold text-gray-100 mb-2 md:mb-3">
                                {blog.title}
                            </h3>
                            <p className="text-gray-300/80 mb-4 md:mb-5">
                                {blog.description}
                            </p>
                        </div>

                        <a
                            href={blog.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent hover:text-white w-fit transition-all duration-300"
                        >
                            Read Blog &rarr;
                        </a>
                    </div>
                ))
            ) : (
                <div className="col-span-3 text-center text-gray-400 md:text-lg">
                    Blogs coming soon! <br />
                    Stay tuned for the new upcoming blogs.
                </div>
            )}
        </div>
    </div>
);
