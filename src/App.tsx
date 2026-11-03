// import { useState } from "react";
import { Suspense } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import TechSection from "./Components/technologies/TechSection";
import Loading from "./Components/Loading";
import type { Tech } from "./Types/techTypes";

const fetchTechs = async (): Promise<Tech[]> => {
  const res = await fetch("/techData.json");
  if (!res.ok) {
    throw new Error("Failed to fetch technologies");
  }

  const data: Tech[] = await res.json();

  return data;
};

const techsPromise = fetchTechs();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <Suspense fallback={<Loading />}>
        <TechSection techsPromise={techsPromise}></TechSection>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
