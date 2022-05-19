import { NavBar } from "./components/Navbar";
import { NavItem } from "./components/NavItem";

import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";

import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";

import { GlobalStyles } from "./globalStyles";
import { DropdownMenu } from "./components/DropdownMenu";

function App() {
  return (
    <>
      <GlobalStyles />
      <NavBar>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<BoltIcon />}>
          <DropdownMenu />
        </NavItem>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </NavBar>
    </>
  );
}

export default App;
