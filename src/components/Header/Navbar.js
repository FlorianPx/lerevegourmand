import { navbarArray } from "./constants";
import { NavbarItem, NavbarList, NavbarLink } from "./styledComponents";

function Items() {
  const navbarElements = navbarArray.map((element) => (
    <NavbarItem key={element}>
      <NavbarLink href={element.href}>{element.text}</NavbarLink>
    </NavbarItem>
  ));

  return navbarElements;
}

function Navbar() {
  return (
    <nav>
      <NavbarList>
        <Items />
      </NavbarList>
    </nav>
  );
}

export default Navbar;
