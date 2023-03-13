import V60Guide from "../components/V60Guide";
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
        <h1>V60 Recipe</h1>
        <V60Guide />
        <Footer />
      </div>
    </div>
  );
}
