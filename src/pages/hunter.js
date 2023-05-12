import { useState } from "react";
import HunterInfo from "../components/HunterSection";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import { ContactHunter } from "../components/Contact/contactHunter";
import BlogSidebar from "../components/Sidebar/blogSideBar";

const Hunter = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
      <>
      <ScrollToTop />
      <BlogSidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HunterInfo />
      <ContactHunter />
      </>
    )
  }
  
  export default Hunter