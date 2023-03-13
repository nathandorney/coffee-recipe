import Chemex from "../components/Chemex";
import Footer from "../components/Footer";
import { ArrowLeft } from "phosphor-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="layout">
        <Link href="/" className="back">
          <ArrowLeft size={16} weight="regular" />
          Back to all recipes
        </Link>
        <h1>Chemex Recipe</h1>
        <Chemex />
        <Footer />
      </div>
    </div>
  );
}
