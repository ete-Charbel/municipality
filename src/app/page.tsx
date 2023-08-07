import HomeText from "@/components/HomeText";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <>
        <div className="wrapper">
          <header>
            <img src="Home_images/Mountain.png" className="background" />
            <img src="Home_images/Trees.png" className="foreground" />
            <h1 className="title ">Welcome!</h1>
          </header>
          <section>
            <HomeText />
          </section>
        </div>
      </>
    </>
  );
}
