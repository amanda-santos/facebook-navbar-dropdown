import styled from "styled-components";

export const DropdownItemContainer = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;

  &:hover {
    background-color: #525357;
  }

  span.right-icon {
    margin-left: auto;
  }

  span.left-icon {
    margin-right: 8px;
  }
`;
