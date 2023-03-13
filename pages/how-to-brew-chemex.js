import Chemex from "../components/Chemex";
import Footer from "../components/Footer";
import { ArrowLeft } from "phosphor-react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Simple Chemex Guide</title>
      </Head>
      <div className="layout">
        <Link href="/" className="back">
          <ArrowLeft size={16} weight="regular" />
          Back to all guides
        </Link>
        <h1>Chemex Guide</h1>
        <Chemex />
        <Footer />
      </div>
    </div>
  );
}
