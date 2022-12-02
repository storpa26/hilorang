/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const FourOhFour = () => {
    return (
        <div className="h-screen flex flex-col justify-center">
            <section className="bg-websiteWhite">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-hilorangOrange">
                            404
                        </h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
                            Something's missing.
                        </p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                            Sorry, we can't find that page. You'll find lots to
                            explore on the home page.{" "}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FourOhFour;
