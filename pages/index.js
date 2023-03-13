import Link from "next/link";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <div className="layout">
        <header>
          <h1>Simple Coffee Recipes</h1>
          <p>
            Recipes that'll get you some smooth, well-balanced coffee to kick
            back with.
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
