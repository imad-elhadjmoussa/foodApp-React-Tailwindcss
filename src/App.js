import { useEffect, useState } from "react";
import { Hero } from "./Components/Hero";
import { Menu } from "./Components/Menu";
import { Navbar } from "./Components/Navbar";
import { Menuitem } from "./Components/Menuitem";
import { Sidebar } from "./Components/Sidebar";

function App() {
  const [show, setShow] = useState(false);

  const handel = () => {
    console.log(show)
    setShow((prev) => {
      return !prev;
    });
    console.log(show)
  }


  return (
    <div className="App relative">
      <Navbar handel={handel} />
      <Hero />
      <Menu />
      <Menuitem />
      { show && <Sidebar handel={handel} />}
    </div>
  );
}

export default App;
