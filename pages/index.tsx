import { GetStaticProps } from "next";
import Head from "next/head";
import Script from 'next/script';

import Contact from "../components/Contact";
import Jumbotron from "../components/Jumbotron";
import ProductList from "../components/ProductList";
import { IProduct } from "../components/Product";

import crowntailBettaPicture from "../public/crowntail.jpeg";
import dragonScaleBettaPicture from "../public/dragonscale.jpg";
import halfmoonBettaPicture from "../public/halfmoon.jpg";
import veiltailBettaPicture from "../public/veiltail.jpg";

import BrincosAbacate from "../public/Images/Products/BrincosAbacate.jpg"
import BrincosMargarida from "../public/Images/Products/BrincosLaranjinha.jpg"
import BrincosLaranjinhha from "../public/Images/Products/BrincosMargarida.jpg"
import BrincosLua from "../public/Images/Products/BrincosLua.jpg"


interface IProductListProps {
    products: IProduct[]
}

export default function Home({products}: IProductListProps) {
    return (
        <>
            <Head>
                <title>Cururu Elegante</title>
                <link rel="preconnect" href="https://app.snipcart.com"/>
                <link rel="preconnect" href="https://cdn.snipcart.com"/>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
                <link rel="shortcut icon" href="../public/favicon.ico" />
            </Head>
            <main className="main">
                <Jumbotron />
                <ProductList products={products}/>
                <Contact/>
            </main>
            <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
            <div hidden id="snipcart" data-api-key="OWNlZTNlYmItZTU5OS00MmI4LThjOTAtMjY0NzAyYmI2ODAxNjM3NjIyMjY3MDMxMTIzMzUx
"></div>
        </>
    )
}

export const products: IProduct[] = [
    {
        id: "abacate",
        name: "Brincos de Abacate",
        price: 10.00,
        image: BrincosAbacate,
        description: "Um lLorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ipsam magnam eos vero voluptates adipisci sed dolores! Omnis, asperiores. Doloribus dolor debitis voluptatem quibusdam laboriosam nam dolorum magni a at!indo brinco de abacate para .....",
        url: '/api/products/abacate'
    },
    {
        id: "margarida",
        name: "Brincos de Bem-me-quer",
        price: 10.00,
        image: BrincosMargarida,
        description: "Bem-me-qLorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ipsam magnam eos vero voluptates adipisci sed dolores! Omnis, asperiores. Doloribus dolor debitis voluptatem quibusdam laboriosam nam dolorum magni a at!uer",
        url: '/api/products/margarida'
    },
    {
        id: "laranjinha",
        name: "Brincos laranjinha",
        price: 10.00,
        image: BrincosLaranjinhha,
        description: "laLorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ipsam magnam eos vero voluptates adipisci sed dolores! Omnis, asperiores. Doloribus dolor debitis voluptatem quibusdam laboriosam nam dolorum magni a at!ranjinha",
        url: '/api/products/laranjinha'
    },
    {
        id: "lua",
        name: "Brincos de Lua",
        price: 8.00,
        image: BrincosLua,
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ipsam magnam eos vero voluptates adipisci sed dolores! Omnis, asperiores. Doloribus dolor debitis voluptatem quibusdam laboriosam nam dolorum magni a at!",
        url: '/api/products/lua'
    }
]

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            products
        }
    }
}
