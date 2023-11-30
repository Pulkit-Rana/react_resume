// import ContactInfo from "./components/NavBar/ContactInfo";
import ProfileInfo from "./components/SideBar/ProfileInfo";
import './App.css'
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import { WorkExp } from "./components/WorkExp/WorkExp";
import { Projects } from "./components/Projects/Projects";

function App() {
  return (
    <main>
      <div className="container">
        <div className="col-md-3">
          <ProfileInfo />
        </div>
        <div className="col-md-9">
          <Header />
          <Hero />
          <Skills />
          <WorkExp />
          <Projects />
        </div>
      </div>
    </main>
  )
}

export default App;
