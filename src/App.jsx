import { Outlet } from "react-router";
import { Router } from "./routes/Router";

import "./assets/css/App.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Router />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;