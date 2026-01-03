import Navbar from "../components/Navbar";
import "../styles/home.css";
import hero from "../assets/hero.png";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-left">
          <p className="subtitle">A PLATFORM FOR</p>
          <h1>
            ELECTRONICS<br />ENGINEERS
          </h1>
          <p className="desc">
            Practise hardcore HDL problems
          </p>
          <button className="cta">PRACTISE HDL</button>
        </div>

        <div className="hero-right">
          <div className="circle">
            <img src={hero} alt="electronics" />
          </div>
        </div>
      </section>
    </>
  );
}
