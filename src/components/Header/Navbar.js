import { navbarArray } from "./constants";
import { NavbarItem, NavbarList } from "./styledComponents";

function Navbar() {
  const navbarElements = navbarArray.map((element) => (
    <NavbarItem key={element}>{element.toUpperCase()}</NavbarItem>
  ));
  return (
    <nav>
      <NavbarList>{navbarElements}</NavbarList>
    </nav>
  );
}

export default Navbar;
