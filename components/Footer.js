import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="w-full mt-20">
                <div className="h-96 bg-hilorangDarkBlue">
                    <div className="h-full mx-8 py-8 md:mx-32">
                        <div className="flex flex-col h-4/5">
                            <div className="mb-5 md:mb-10">
                                <div className="scale-175 w-28 h-10 relative md:w-56 md:h-14 sm:w-">
                                    <Image
                                        src="/asset/Logo_Invert.svg"
                                        alt="logo"
                                        width={250}
                                        height={250}
                                        className="static p-0.5 "
                                        priority
                                    />
                                </div>
                            </div>
                            <span className=" text-gray-500">
                                Looking for an e commerce website? We offer a
                                turn key ecommerce website with the latest
                                technology. Get your online store today!
                            </span>
                        </div>
                        <div className="flex text-white ">
                            <FaFacebook
                                color="#FF6633"
                                size="2em"
                                className="m-4"
                            />
                            <FaInstagram
                                color="#FF6633"
                                size="2em"
                                className="m-4"
                            />
                            <FaTiktok
                                color="#FF6633"
                                size="2em"
                                className="m-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-7 bg-hilorangOrange"></div>
        </div>
    );
};

export default Footer;
