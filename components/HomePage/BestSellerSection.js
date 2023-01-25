import React from "react";
import ProductCard from "../ProductCard";

const BestSellerSection = ({ bestSellerProducts }) => {
    return (
        <div>
            {bestSellerProducts ? (
                <div>
                    <div className="flex justify-between items-center">
                        <span className="w-3/5 font-semibold md:text-3xl text-2xl text-black">
                            Our best seller product
                        </span>
                        <button className="flex items-center text-white bg-hilorangOrange hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base md:px-6 px-1 md:py-3 py-1 text-center">
                            <span className="md:mr-2">See all product</span>
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full grid items-center md:grid-cols-3 justify-items-center mt-16">
                        {bestSellerProducts.map((eachProduct) =>
                            eachProduct.defaultProductVariant.map(
                                (eachVariant) => (
                                    <ProductCard
                                        key={eachVariant._key}
                                        cardData={eachVariant}
                                    />
                                )
                            )
                        )}
                    </div>
                </div>
            ) : (
                <div>loading...</div>
            )}
        </div>
    );
};

export default BestSellerSection;
