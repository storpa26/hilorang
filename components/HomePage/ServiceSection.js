import Head from "next/head";
import Image from "next/image";

const ServiceSection = () => {
    return (
        <div className="w-full flex flex-col justify-between md:flex-none">
            <div className="md:w-3/5 flex">
                <div>
                    <Image
                        src="/asset/ServicePhoto_1.png"
                        alt="front-img"
                        width={400}
                        height={400}
                        priority="true"
                        objectFit="contain"
                    />
                </div>
                <div className="flex flex-col justify-center p-5">
                    <Image
                        src="/asset/ServicePhoto_2.png"
                        alt="front-img"
                        width={350}
                        height={350}
                        priority="true"
                        objectFit="contain"
                    />
                </div>
            </div>

            <div className="md:w-2/5 flex flex-col mt-10">
                <span className="font-semibold md:mt-10 md:text-6xl text-5xl text-hilorangDarkText">
                    Why <br /> Choose Us
                </span>

                <span className="mb-6 md:my-14 text-gray-500">
                    Get lost on the beautiful beaches of United, or get caught
                    up in the wildness of the night life. Its up to you. Nihil
                    quaeque moderatius quo ut, eu vix noster fierent
                </span>

                <button className="w-40 text-white bg-hilorangOrange hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">
                    Contact
                </button>
            </div>
        </div>
    );
};

export default ServiceSection;
