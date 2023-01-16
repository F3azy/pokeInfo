import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PokeballList from "./Components/PokeballList";
import "./styles/App.css"

function App() {
  return (
    <div className='App'>
      <Header />
      <PokeballList />
      <Footer />
    </div>
  );
}

export default App;
