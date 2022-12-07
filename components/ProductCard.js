import React from "react";
import Image from "next/image";

const ProductCard = () => {
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
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    Cream Hoodie
                </h5>

                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 ">
                        899{" "}
                        <span className="text-base text-hilorangOrange">
                            Tk
                        </span>
                    </span>
                    <button
                        href="#"
                        className="text-white bg-black hover:bg-hilorangOrange focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;