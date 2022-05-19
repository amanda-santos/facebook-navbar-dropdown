import { NavbarContainer, NavContainer } from "./styles";

type NavBarProps = {
  children: React.ReactNode;
};

export function NavBar({ children }: NavBarProps) {
  return (
    <NavbarContainer>
      <NavContainer>{children}</NavContainer>
    </NavbarContainer>
  );
}
