import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/hero";
//import Hero2 from "./sections/Hero2";
import NavBar from "./sections/NavBar";
import ComingSoon from "./sections/ComingSoon";

// gsap plugins are not automatically active
// you can register them using one single line of code

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      {/* <ComingSoon /> */}
    </main>
  );
};

export default App;

{
  /* <nav>
        <img src="/images/nav-logo.svg" className="scale-90" />
        <img src="/images/menu.svg" className="w-10" />
      </nav> */
}
