import { ReactNode, useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as ArrowIcon } from "../../icons/arrow.svg";
import { ReactComponent as ChevronIcon } from "../../icons/chevron.svg";
import { ReactComponent as CogIcon } from "../../icons/cog.svg";

import { DropdownItemContainer, DropdownMenuContainer } from "./styles";

type DropdownItemProps = {
  children: ReactNode;
  leftIcon: ReactNode;
  rightIcon: ReactNode;
  goToMenu: "main" | "settings" | "fruits";
};

export const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMenuHeight(dropdownRef?.current?.firstElementChild?.clientHeight || 0);
  }, []);

  const calcHeight = (element: HTMLElement) => {
    const height = element.offsetHeight;
    setMenuHeight(height);
  };

  const DropdownItem = ({
    children,
    leftIcon,
    rightIcon,
    goToMenu,
  }: Partial<DropdownItemProps>) => {
    return (
      <DropdownItemContainer
        href="#"
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
      >
        <span className="left-icon">{leftIcon}</span>
        {children}
        <span className="right-icon">{rightIcon}</span>
      </DropdownItemContainer>
    );
  };

  return (
    <DropdownMenuContainer $height={menuHeight} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon="👨">My Profile</DropdownItem>
          <DropdownItem leftIcon="🔖">Saved</DropdownItem>
          <DropdownItem leftIcon="🎉">Events</DropdownItem>
          <DropdownItem leftIcon="🎂">Birthdays</DropdownItem>
          <DropdownItem leftIcon="🏁">Pages</DropdownItem>
          <DropdownItem leftIcon="👪">Friends</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🥑"
            rightIcon={<ChevronIcon />}
            goToMenu="fruits"
          >
            Fruits
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main">
            Go back
          </DropdownItem>
          <DropdownItem leftIcon="📱">Edit profile</DropdownItem>
          <DropdownItem leftIcon="🔈">Account</DropdownItem>
          <DropdownItem leftIcon="🔁">Passwords</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "fruits"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu="main">
            Go back
          </DropdownItem>
          <DropdownItem leftIcon="🍌">Banana</DropdownItem>
          <DropdownItem leftIcon="🍎">Apple</DropdownItem>
          <DropdownItem leftIcon="🍉">Watermelon</DropdownItem>
          <DropdownItem leftIcon="🍋">Lemon</DropdownItem>
          <DropdownItem leftIcon="🍓">Strawberry</DropdownItem>
        </div>
      </CSSTransition>
    </DropdownMenuContainer>
  );
};
