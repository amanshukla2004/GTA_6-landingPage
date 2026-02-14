import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/hero";
import NavBar from "./sections/NavBar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/Lucia";
import PostCard from "./sections/PostCard";
import Final from "./sections/Final";
import Outro from "./sections/Outro";

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
      <Lucia />
      <PostCard />
      <Final />
      <Outro />
    </main>
  );
};

export default App;
