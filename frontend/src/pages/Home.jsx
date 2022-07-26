import SecondLayout from "../components/layouts/SecondLayout";

import "../styles/_Home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="container-double">
        <SecondLayout>
          <div className="waves-box" />
          <div className="yellow-box">
            <h1>Lou Gain</h1>
          </div>
        </SecondLayout>
      </div>
    </section>
  );
}
