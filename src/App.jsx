import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import "./index.css"

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
