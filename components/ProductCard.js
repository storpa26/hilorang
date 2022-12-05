import React from "react";
import Image from "next/image";

const ProductCard = () => {
    return (
        <div className="w-full mb-5 md:m-5 max-w-sm bg-white rounded-lg shadow-md ">
            <a href="#">
                <Image
                    src="/asset/FrontImg.png"
                    alt="front-img"
                    width={400}
                    height={400}
                    priority="true"
                    objectFit="contain"
                />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                        Cream Hoodie
                    </h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900 ">
                        BDT 899
                    </span>
                    <a
                        href="#"
                        className="text-white bg-hilorangOrange hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
