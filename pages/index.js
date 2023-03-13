import Link from "next/link";
import Footer from "../components/Footer";
import V60Guide from "../components/V60Guide";

export default function Home() {
  return (
    <>
      <div className="layout">
        <header>
          <h1>V60 Recipe</h1>
          <p>
            A simple recipe that'll get you some smooth, well-balanced coffee to
            kick back with.
          </p>
        </header>

        <V60Guide />

        <Footer />
      </div>
    </>
  );
}
