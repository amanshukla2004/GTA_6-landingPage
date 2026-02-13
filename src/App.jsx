import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/hero";

import NavBar from "./sections/NavBar";
import ComingSoon from "./sections/ComingSoon";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";

// gsap plugins are not automatically active
// you can register them using one single line of code

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
    </main>
  );
};

export default App;
