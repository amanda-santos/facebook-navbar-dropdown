import { ReactNode, useState } from "react";
import { NavItemContainer, NavItemIcon } from "./styles";

type NavItemProps = {
  icon: ReactNode;
  children?: ReactNode;
};

export const NavItem = ({ icon, children }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavItemContainer>
      <NavItemIcon href="#" onClick={() => setIsOpen(!isOpen)}>
        {icon}
      </NavItemIcon>

      {isOpen && children}
    </NavItemContainer>
  );
};
