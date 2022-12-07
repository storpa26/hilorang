import React from "react";
import Image from "next/image";

const ProductShowcaseCard = () => {
    return (
        <div className="w-full mb-5 md:m-5 max-w-sm bg-white rounded-lg shadow-md ">
            <Image
                src="/asset/FrontImg.png"
                alt="front-img"
                width={400}
                height={400}
                priority="true"
                objectFit="contain"
            />
            <a href="#" className="cursor-pointer">
                <div className="flex justify-between px-5 py-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                        Cream Hoodie
                        <div className="text-sm font-medium text-gray-400">
                            Collection 2021
                        </div>
                    </h5>

                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900 ">
                            899{" "}
                            <span className="text-base text-hilorangOrange">
                                Tk
                            </span>
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProductShowcaseCard;
