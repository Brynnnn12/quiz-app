import { Outlet } from "react-router-dom";
import Footer from "../home/partials/footer";
import Header from "../home/partials/header";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
