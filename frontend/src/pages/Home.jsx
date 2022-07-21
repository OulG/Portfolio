import "../styles/_Home.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <section className="home">
      <div className="container-double">
        <div className="waves">
          <Header />
        </div>
        <div className="yellow-bottom">
          <Footer />
        </div>
      </div>
    </section>
  );
}
