import BestSellerSection from "../components/HomePage/BestSellerSection";
import IntroSection from "../components/HomePage/IntroSection";
import ServiceSection from "../components/HomePage/ServiceSection";
import TrendingOutfitSection from "../components/HomePage/TrendingOutfitSection";
import { sanityClient } from "../lib/sanity";

export default function Home({ bestSellerProducts, trendingOutfitProducts }) {
    return (
        <div className="md:px-24 flex flex-col space-y-20">
            <IntroSection />
            <BestSellerSection bestSellerProducts={bestSellerProducts} />
            <TrendingOutfitSection
                trendingOutfitProducts={trendingOutfitProducts}
            />
            <ServiceSection />
        </div>
    );
}

export const getServerSideProps = async () => {
    const bestSellerQuery = `*[_type == "product" &&  "Best Seller" in categories[]->title]`;
    const trendingOutfitQuery = `*[_type == "product" &&  "Trending Outfit" in categories[]->title]`;

    const bestSellerProducts = await sanityClient.fetch(bestSellerQuery);
    const trendingOutfitProducts = await sanityClient.fetch(
        trendingOutfitQuery
    );

    await Promise.all([bestSellerProducts, trendingOutfitProducts]);

    return {
        props: {
            bestSellerProducts,
            trendingOutfitProducts,
        },
    };
};
