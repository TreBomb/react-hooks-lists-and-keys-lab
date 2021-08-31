import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map((link, id) => {
      console.log(link, links[id])
      return <a key={id} href={"#" + link}>{link}</a>})
    }
  </nav>;
}

export default NavBar;
