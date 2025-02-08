import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Abside from "./components/Abside/Abside";
import Top from "./components/Top";

function App() {
  return (
    <main className="p-5 xl:p-20">
      <Header />
      <div className="xl:grid xl:grid-cols-3 xl:gap-5 xl:items-center">
        <div className="xl:col-span-2 xl:mt-15">
          <Hero />
        </div>
        <Abside />
      </div>
      <Top />
    </main>
  );
}

export default App;
