import NavBar from "../components/NavBar";
import "@fontsource/poppins";
import "../styles/globals.css";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <div>
            <div className="mt-4 mx-8 md:mx-32">
                <NavBar />
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    );
}

export default MyApp;
