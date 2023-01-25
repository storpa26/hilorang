import React from "react";
import Image from "next/image";
import CMSImg from "./CMScomponent/CMSImg";

const ProductShowcaseCard = ({ cardData }) => {
    return (
        <div className="w-full mb-5 md:m-5 max-w-sm bg-white rounded-lg shadow-md md:hover:scale-125">
            <CMSImg key={cardData._key} imgProps={cardData.images[0]} />
            <a className="cursor-pointer">
                <div className="flex justify-between px-5 py-5">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                        {cardData.title}
                        <div className="text-sm font-medium text-gray-400">
                            Brand new product
                        </div>
                    </h5>

                    <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-gray-900 ">
                            {cardData.price}
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
