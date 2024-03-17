
const Banner = () => {
    return (
        <div className="font-lexend bg-[url(/public/images/banner.png)] lg:h-[550px] bg-no-repeat lg:p-6 flex flex-col justify-center items-center space-y-6 rounded-2xl mt-8 p-7">
            <div className="text-white text-center space-y-6">

                <p className="lg:text-5xl lg:font-bold font-semibold text-3xl lg:w-[800px] mx-auto ">Discover an exceptional cooking class tailored for you!</p>
                <p className="text-lg lg:w-[900px]">
                    Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                </p>
            </div>

            <div className="space-x-6 flex lg:flex-row flex-col gap-8 ">
                <button className="btn text-black bg-green-400">Explore Now</button>
                <button className="btn text-white bg-transparent">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;