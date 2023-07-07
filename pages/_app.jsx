import "../styles/globals.scss";
import "../styles/404.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";


function MyApp({ Component, pageProps }) {
    return <div className="app">
        <Head>
            <link rel="shortcut icon" href="/Images/Icons/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />
        </Head>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </div>
}

export default MyApp
