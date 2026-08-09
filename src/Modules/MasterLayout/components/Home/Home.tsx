import Cat from "./Cat";
import Hero from "./Hero";
import NavBar from "./NavBar";
import NewBook from "./NewBook";

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <Hero />
        <Cat />
        <NewBook />
      </div>
    </>
  )
}
