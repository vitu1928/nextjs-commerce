import { useEffect } from "react";
import Link from "next/link";
import Head from "next/head"

export default function NotFound() {
    useEffect(() => {
        let scene = document.getElementById('scene');
        // let parallax = new Parallax(scene);
    }, [])

    return(<>
        {/* <div>https://www.rafaelalucas.com</div> */}
        <Head>
            <title>Cururu Perdido</title>
        </Head>
        <section className="wrapper" style={{backgroundColor: "#5a8156"}}>
          <div className="container">
            <div id="scene" className="scene" data-hover-only="false">
              <div className="circle" data-depth="1.2" />
              <div className="one" data-depth="0.9">
                <div className="content">
                  <span className="piece" />
                  <span className="piece" />
                  <span className="piece" />
                </div>
              </div>
              <div className="two" data-depth="0.60">
                <div className="content">
                  <span className="piece" />
                  <span className="piece" />
                  <span className="piece" />
                </div>
              </div>
              <div className="three" data-depth="0.40">
                <div className="content">
                  <span className="piece" />
                  <span className="piece" />
                  <span className="piece" />
                </div>
              </div>
              <p 
                className="p404"
                data-depth="0.50"
                style={{margin: 0}}
                >
                404
              </p>
              <p 
                className="p404"
                data-depth="0.10"
                style={{margin: 0}}
                >
                404
              </p>
            </div>
            <div className="text">
              <article>
                <p>
                  Uh oh! Parece que você se perdeu. <br />
                  Volte a página inicial!
                </p>
                <button style={{ border: 0}}><Link href="/">Tô indo!</Link></button>
              </article>
            </div>
          </div>
        </section>
      </>
      )
}