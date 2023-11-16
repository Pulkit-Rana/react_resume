// import ContactInfo from "./components/NavBar/ContactInfo";
import ProfileInfo from "./components/SideBar/ProfileInfo";
import Navbar from "./components/NavBar/Navbar";
import './components/NavBar/Navbar.css'

function App() {
  return (
    // Remove main class at the end.
    <main>
      {/* container bg color is white turn to black to see change. */}
      <section className="container">
        <ProfileInfo />
        <Navbar />
      </section>
    </main>
  )
}

export default App;
