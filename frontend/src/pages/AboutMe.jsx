import avatar from "../assets/avatar.png";
import "../styles/_AboutMe.scss";
import MainLayout from "../components/layouts/MainLayout";
import "../styles/_Main.scss";

export default function AboutMe() {
  return (
    <MainLayout>
      <div className="about-me">
        <img src={avatar} alt="avatar" />
        <h1>Lou Gain</h1>
        <hr />
        <h2>Developpeuse web</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
          eveniet nobis! Amet fugit quaerat autem nemo dolore! Consequatur
          cumque asperiores incidunt dolorum natus amet qui odio aspernatur aut
          sequi soluta mollitia, harum expedita pariatur, nemo consequuntur
          nihil velit inventore praesentium excepturi maiores facilis numquam
          qui.
        </p>
      </div>
    </MainLayout>
  );
}
