import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import {Home} from "./routes/routes";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import LoadingRing from "./utils/Loader";
import Hero from "./Hero";

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div className="flex justify-center items-center h-screen"><LoadingRing/></div>}>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
