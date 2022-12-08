/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                hilorangOrange: "#FF6633",
                hilorangDarkText: "#23254B",
                hilorangDarkBlue: "#121329",
            },
        },
    },
    plugins: [],
};
