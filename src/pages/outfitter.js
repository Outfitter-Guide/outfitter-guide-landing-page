import { useState } from "react";
import { ContactOutfitter } from "../components/Contact/contactOutfitter";
import Navbar from "../components/Navbar";
import OutfitterInfo from "../components/OutfitterSection";
import ScrollToTop from "../components/ScrollToTop";
import BlogSidebar from "../components/Sidebar/blogSideBar";

const Outfitter = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

    return (
      <>
      <ScrollToTop />
      <BlogSidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <OutfitterInfo />
      <ContactOutfitter />
      </>
    )
  }
  
  export default Outfitter