import { HashRouter, Route, Routes } from "react-router-dom";
//import components
import HeaderSection from "../components/HeaderSection";
import FooterSection from "../components/FooterSection";
//import page components
import Home from "../pages/Home";

export default function AppRouting() {
  return (
    <HashRouter>
      <HeaderSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <FooterSection />
    </HashRouter>
  );
}