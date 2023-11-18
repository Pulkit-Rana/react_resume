// import ContactInfo from "./components/NavBar/ContactInfo";
import ProfileInfo from "./components/SideBar/ProfileInfo";
import './App.css'
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    // Remove main class at the end.
    <main>
      {/* container bg color is white turn to black to see change. */}
      <div className="container">
        <ProfileInfo />
        <Header />
        <Hero />
      </div>
    </main>
  )
}

export default App;
