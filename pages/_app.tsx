import "../styles/globals.scss";
import "../styles/404.scss";
import type {AppProps} from 'next/app'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";


function MyApp({Component, pageProps}: AppProps) {
    return <div className="app">
        <Head>
            <link rel="shortcut icon" href="/Images/Icons/favicon.ico" />
        </Head>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
    </div>
}

export default MyApp
