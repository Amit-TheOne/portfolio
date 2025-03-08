export const Footer = () => {
    return (
        <footer className="relative -z-10 overflow-x-clip">
            <div className="absolute h-[300px] md:h-[400px] w-[1200px] md:w-[1600px] lg:w-[2000px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
            <div className="border-t border-white/15 py-8 w-[90%] lg:max-w-7xl mx-auto text-base text-center">
                <div className="text-white">{`Made with 🤍 by Amit :)`}</div>
            </div>
        </footer>
    );
};
