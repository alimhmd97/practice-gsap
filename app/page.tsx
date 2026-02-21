import About from "@/components/about/about";
import Cocktail from "@/components/cocktail/cocktail";
import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import gsap from "gsap";
import{ScrollTrigger,SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger,SplitText);
export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Cocktail />
    <About />
    </>
  );
}
