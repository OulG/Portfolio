import Header from "../Header";
import Footer from "../Footer";

function SecondLayout({ children }) {
  return (
    <>
      <Header isMain="not-link-to-home" />
      {children}
      <Footer isMain="footer-left" />
    </>
  );
}
export default SecondLayout;
