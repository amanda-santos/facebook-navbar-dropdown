import styled from "styled-components";

type DropdownMenuContainerProps = {
  $height: number;
};

export const DropdownMenuContainer = styled.div<DropdownMenuContainerProps>`
  position: absolute;
  top: 56px;
  width: 300px;
  height: ${({ $height }) => $height}px;
  transform: translateX(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;

  transition: height var(--speed) ease;

  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }

  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }

  .menu-primary-exit {
    position: absolute;
  }

  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all var(--speed) ease;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }

  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all var(--speed) ease;
  }

  .menu-secondary-exit {
    position: absolute;
  }

  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all var(--speed) ease;
  }
`;
