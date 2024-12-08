import { FC } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";

const Home: FC = () => {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <Features />
      <ProductGrid />
    </div>
  );
};

export default Home;
