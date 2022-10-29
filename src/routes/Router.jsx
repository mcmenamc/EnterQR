import { BrowserRouter, Routes, Route } from "react-router-dom";
//* Components
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

//* Views
import { Home } from "../views/Home";


export const Router = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
