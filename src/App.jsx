import { Header } from "./components/Header"
import { MainArticle } from "./components/MainArticle"
import { NewContainer } from "./components/NewContainer"
import { ArticlesContainer } from "./components/ArticlesContainer"
import { Attribution } from "./components/Attribution"

function App() {
  
  return (
    <main className="px-4 pt-6 lg:px-40 lg:pt-20 font-Inter">
      <Header />
      <div className="md:flex md:gap-8 md:mb-10">
        <MainArticle />
        <NewContainer />
      </div>

      <ArticlesContainer />
      <Attribution />
    </main>
  );
}

export default App
