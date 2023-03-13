import V60Guide from "../components/V60Guide";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="layout">
        <h1>V60 Recipe</h1>
        <V60Guide />
        <Footer />
      </div>
    </div>
  );
}
