import Chemex from "../components/Chemex";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <div className="layout">
        <h1>Chemex Recipe</h1>
        <Chemex />
        <Footer />
      </div>
    </div>
  );
}
