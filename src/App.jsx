import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <Navbar/>
            <Hero />
            <About />
            <section className="z-0 min-h-screen bg-blue-500" />
        </main>
    )
}
export default App
