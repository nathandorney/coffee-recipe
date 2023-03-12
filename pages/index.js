import Guide from "../components/Guide";

export default function Home() {
  return (
    <>
      <div className="layout">
        <h1>V60 Recipe</h1>
        <Guide />

        <footer>
          <p>Enjoy your cup of coffee, happy brewing!</p>
          <a href="https://read.cv/nathan" className="note">
            Made by @nathan
          </a>
        </footer>
      </div>
    </>
  );
}
