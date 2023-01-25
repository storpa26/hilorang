import React, { useState } from "react";
import Image from "next/image";
import CMSImg from "./CMScomponent/CMSImg";

const ProductCard = ({ cardData }) => {
    return (
        <div className="w-full mb-5 md:m-5 max-w-sm bg-white rounded-lg shadow-md ">
            <CMSImg key={cardData._key} imgProps={cardData.images[0]} />
            <div className="px-5 py-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                    {cardData.title}
                </h5>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900 ">
                        {cardData.price}
                        <span className="text-base text-hilorangOrange">
                            Tk
                        </span>
                    </span>
                    <button className="text-white bg-black hover:bg-hilorangOrange focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
