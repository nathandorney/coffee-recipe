import V60Guide from "../components/V60Guide";
import Footer from "../components/Footer";
import { ArrowLeft } from "phosphor-react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simple V60 Guide</title>
      </Head>
      <div className="layout">
        <Link href="/" className="back">
          <ArrowLeft size={16} weight="regular" />
          Back to all guides
        </Link>
        <h1>V60 Guide</h1>
        <V60Guide />
        <Footer />
      </div>
    </div>
  );
}
