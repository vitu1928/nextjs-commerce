import Head from "next/head";
import Script from 'next/script';

import Contact from "../components/Contact";
import Jumbotron from "../components/Jumbotron";
import ProductList from "../components/ProductList";

import BrincosAbacate from "../public/Images/Products/BrincosAbacate.jpg"
import BrincosLaranjinhha from "../public/Images/Products/BrincosLaranjinha.jpg"
import BrincosMargarida from "../public/Images/Products/BrincosMargarida.jpg"
import BrincosLua from "../public/Images/Products/BrincosLua.jpg"

export default function Home({products}) {
    return (
        <>
            <Head>
                <title>Cururu Elegante</title>
            </Head>
            <main className="main">
                <Jumbotron />
                <ProductList products={products}/>
                <Contact/>
            </main>
        </>
    )
}

export const products = [
    {
        id: "abacate",
        name: "Abacate Elegante",
        price: 10.00,
        image: BrincosAbacate,
        emoji: "🥑",
        description: 'Uma pequena e charmosa joia em formato de abacate, perfeita para adicionar um toque de estilo e diversão ao seu visual. Esse brinco único é uma maneira encantadora de expressar sua paixão por abacates e moda. Com seu design delicado e detalhado, o brinco "Abacate Elegante" certamente se tornará uma peça querida em sua coleção de acessórios',
        url: '/api/products/abacate'
    },
    {
        id: "margarida",
        name: "Daisy Encantadora",
        price: 10.00,
        image: BrincosMargarida,
        emoji: "🌼",
        description: 'Uma adorável joia em formato de margarida, que traz um toque de delicadeza e frescor ao seu look. Este brinco encantador é perfeito para celebrar a beleza da natureza e realçar seu estilo com elegância.',
        url: '/api/products/margarida'
    },
    {
        id: "laranjinha",
        name: "Laranjinha Vibrante",
        price: 10.00,
        image: BrincosLaranjinhha,
        emoji: "🍊",
        description: 'Uma pequena joia em formato de laranja, repleta de vivacidade e energia. Esse brinco é uma declaração de estilo divertida e colorida, perfeito para animar seu visual e expressar sua personalidade alegre. Com seu design cativante, o brinco "Laranjinha Vibrante" certamente se destacará em qualquer ocasião.',
        url: '/api/products/laranjinha'
    },
    {
        id: "lua",
        name: "Lua Mística",
        price: 8.00,
        image: BrincosLua,
        emoji: "🌙",
        description: 'Uma joia celestial em formato de lua, que evoca uma aura mágica e misteriosa. Com seu design refinado e inspirado na lua, esse brinco é uma escolha perfeita para adicionar um toque de encanto e fascínio ao seu visual.',
        url: '/api/products/lua'
    }
]

export const getStaticProps = async (context) => {

    return {
        props: {
            products
        }
    }
}
