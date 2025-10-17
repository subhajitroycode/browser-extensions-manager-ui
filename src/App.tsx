import Extensions from "./components/Extensions";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <section className="flex justify-between items-center mt-10 mb-4">
          <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
            Extensions List
          </h1>
          <Navbar />
        </section>
        <Extensions />
      </main>
    </BrowserRouter>
  );
}

export default App;
