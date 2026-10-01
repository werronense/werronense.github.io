import { Route, Routes, BrowserRouter } from "react-router";
import Home from "./pages/home/Home.tsx";
import Portfolio from "./pages/portfolio/Portfolio.tsx";
import NotFound from "./pages/not-found/NotFound.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
