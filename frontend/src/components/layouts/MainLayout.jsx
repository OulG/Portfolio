import Footer from "../Footer";
import Header from "../Header";

function MainLayout({ children }) {
  return (
    <>
      <Header isMain="link-to-home" />
      {children}
      <Footer isMain="footer-center" />
    </>
  );
}

export default MainLayout;
