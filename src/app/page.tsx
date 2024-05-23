import About from "./about/page";
import Contact from "./contact/page";
import Enter from "./enter/page";
import Main from "./main/page";
import Navbar from "./navbar/page";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Main/>
    <About/>
    <Enter/>
    <Contact/>
    </>
  );
}
