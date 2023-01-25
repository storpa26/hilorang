import React from "react";
import ProductShowcaseCard from "../ProductShowcaseCard";
import outfitData from "../../public/asset/data/outfit.json";

const TrendingOutfitSection = ({ trendingOutfitProducts }) => {
    return (
        <div>
            {trendingOutfitProducts ? (
                <div>
                    <div className="md:pr-20 flex justify-between items-center">
                        <span className="w-3/5 font-semibold md:text-3xl text-2xl text-black">
                            Trending Outfit of the season
                        </span>
                        <button className="flex items-center text-white bg-hilorangOrange hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base md:px-6 px-6 md:py-3 py-3 text-center">
                            <span>Explore</span>
                        </button>
                    </div>
                    <div className="w-full grid items-center md:grid-cols-3 justify-items-center mt-16">
                        {trendingOutfitProducts.map((eachProduct) =>
                            eachProduct.defaultProductVariant.map(
                                (eachVariant) => (
                                    <ProductShowcaseCard
                                        key={eachVariant._key}
                                        cardData={eachVariant}
                                    />
                                )
                            )
                        )}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default TrendingOutfitSection;
