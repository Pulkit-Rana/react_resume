// import ContactInfo from "./components/NavBar/ContactInfo";
import ProfileInfo from "./components/SideBar/ProfileInfo";
import './App.css'
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    // Remove main class at the end.
    <main>
      {/* container bg color is white turn to black to see change. */}
      <section className="container">
        <div className="col-3">
          <ProfileInfo />
        </div>
        <div className="col-9">
          <Header />
          <Hero />
          <Skills />
        </div>
      </section>
      <section className="S">
       
      </section>
    </main>
  )
}

export default App;
