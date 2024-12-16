import { FC } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";

const Home: FC = () => {
  return (
    <div>
      <Hero /> 
      <Features />
      <ProductGrid />
    </div>
  );
};

export default Home;
