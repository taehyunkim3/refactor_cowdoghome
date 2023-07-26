import { NavBarBox, NavItem } from "./style";

export const NavBar = () => {
  const navItems = ["사진", "동영상"];
  return (
    <NavBarBox>
      {navItems.map((navItem) => {
        return navItem === "사진" ? (
          <NavItem underline color="#black">
            {navItem}
          </NavItem>
        ) : (
          <NavItem color="#828c94">{navItem}</NavItem>
        );
      })}
    </NavBarBox>
  );
};
