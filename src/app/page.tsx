import Image from "next/image";
import HeroSection from "./component/HeroSection";
import CoffeeMenu from "./component/CoffeeMenu";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CoffeeMenu />
    </div>
  );
}
