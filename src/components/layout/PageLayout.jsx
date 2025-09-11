import { Footer } from "./Footer";
import { Header } from "./Header";

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-[112px] ">{children}</main>
      <Footer />
    </>
  );
}
