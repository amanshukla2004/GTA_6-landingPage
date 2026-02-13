
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

// gsap plugins are not automatically active
// you can register them using one single line of code

gsap.registerPlugin(ScrollTrigger);





const App = () => {
  return (
    <main>
      <div>
          <h1 className='text-pink text-5xl'>Welcome to the world of GTA and GSAP !!</h1>
      </div>
    </main>
)}

export default App
