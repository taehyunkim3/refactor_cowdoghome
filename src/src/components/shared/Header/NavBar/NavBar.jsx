import { NavBarBox, NavItem } from "./style";

export const NavBar = () => {
  const navItems = [
    "홈",
    "추천",
    "집들이",
    "집사진",
    "살림수납",
    "홈스토랑",
    "취미일상",
    "3D인테리어",
    "이벤트",
  ];
  return (
    <NavBarBox>
      {navItems.map((navItem) => {
        return navItem === "집사진" ? (
          <NavItem underline color="#35c5f0">
            {navItem}
          </NavItem>
        ) : (
          <NavItem color="#2F3438">{navItem}</NavItem>
        );
      })}
    </NavBarBox>
  );
};
