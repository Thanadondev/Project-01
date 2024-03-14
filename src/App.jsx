import Navbar from "./Navbar"
import Main from "./Main"
import About from "./About"
import CardList from "./wisdoms"
import ScrollToTopButton from "./ScrollToTop"
import Footer from "./Footer"
export default function App() {
  return (
    <>
    <Navbar />
    <Main />
    <About />
    <CardList />
    <ScrollToTopButton />
    <Footer />
    </>
  )
}