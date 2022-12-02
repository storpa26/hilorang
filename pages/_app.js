import NavBar from "../components/NavBar";
import "@fontsource/poppins";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <div className="mt-8 mx-8 md:mx-32">
            <NavBar />
            <Component {...pageProps} />
        </div>
    );
}

export default MyApp;
