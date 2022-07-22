import avatar from "../assets/avatar.png";
import "../styles/_AboutMe.scss";

export default function AboutMe() {
  return (
    <section className="about-me">
      <img src={avatar} alt="avatar" />
      <h1>Lou Gain</h1>
      <hr />
      <h2>Developpeuse web</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
        eveniet nobis! Amet fugit quaerat autem nemo dolore! Consequatur culpa
        cumque asperiores incidunt dolorum natus amet qui odio aspernatur aut
        sequi soluta mollitia, harum expedita pariatur, nemo laborum
        consequuntur nihil velit inventore praesentium excepturi maiores rerum.
        Quo aut facilis numquam qui.
      </p>
    </section>
  );
}
