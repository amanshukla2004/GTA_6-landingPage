import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/hero";

import NavBar from "./sections/NavBar";
import ComingSoon from "./sections/ComingSoon";
import FirstVideo from "./sections/FirstVideo";


// gsap plugins are not automatically active
// you can register them using one single line of code

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />


      <FirstVideo />
       
    </main>
  );
};

export default App;


