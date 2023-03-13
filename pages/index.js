import Link from "next/link";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Simple Coffee Guides</title>
      </Head>
      <div className="layout">
        <header>
          <h1>Simple Coffee Guides</h1>
          <p>
            A collection of guides that'll get you some smooth, well-balanced
            coffee to kick back with.
          </p>
          <ul>
            <li>
              <Link href="/how-to-brew-v60">V60</Link>
            </li>
            <li>
              <Link href="/how-to-brew-chemex">Chemex</Link>
            </li>
          </ul>
        </header>

        <Footer />
      </div>
    </>
  );
}
