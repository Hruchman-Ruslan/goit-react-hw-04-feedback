import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const Item = styled.li`
  :first-child {
    filter: drop-shadow(0px 0px 30px #00ffff);
  }
  :nth-child(2n) {
    filter: drop-shadow(0px 0px 30px #ffbb00);
  }
  :last-child {
    filter: drop-shadow(0px 0px 30px #ff0101);
  }
`;

export const Button = styled.button`
  padding: 15px 20px;
  font-weight: 700;
  border: 1px solid tomato;
  border-radius: 12px;
  text-transform: capitalize;

  &:hover,
  :focus {
    background-color: aqua;
    color: tomato;

    transition: color 500ms cubic-bezier(0.4, 0, 0.2, 1),
      background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
