import About from "./about/page";
import Center from "./center/page";
import CenterNav from "./centerNav/page";
import Contact from "./contact/page";
import Enter from "./enter/page";
import Main from "./main/page";
import Navbar from "./navbar/page";
import { Analytics } from "@vercel/analytics/react"


export default function Home() {
  return (
    <>
    <Analytics/>
    <Navbar/>
    <Main/> 
    <About/>
    <CenterNav/>
    <Enter/>
    <Contact/>
    </>
  );
}
