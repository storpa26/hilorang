import React from "react";
import Image from "next/image";

const IntroSection = () => {
    return (
        <div className="w-full mt-14 h-auto flex justify-center flex-col-reverse md:flex-row">
            <div className="flex flex-col mt-10">
                <span className="font-semibold md:mt-10 md:text-6xl text-5xl text-hilorangDarkText">
                    All Your Style
                </span>
                <span className="font-semibold my-3 md:my-10 md:text-6xl text-5xl text-hilorangOrange">
                    Are Here
                </span>
                <span className="md:w-2/4 mb-6 md:mb-14 text-gray-500">
                    Introducing Hilorang, a company dedicated to creating
                    high-quality clothing. Our collection includes a wide range
                    of products.
                </span>

                <button className="w-40 text-white bg-hilorangOrange hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">
                    Explore Now
                </button>
            </div>

            <div>
                <Image
                    src="/asset/FrontImg.png"
                    alt="front-img"
                    width={600}
                    height={600}
                    priority="true"
                    // objectFit="contain"
                />
            </div>
        </div>
    );
};

export default IntroSection;
