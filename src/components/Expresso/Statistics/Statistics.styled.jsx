import styled from 'styled-components';

export const List = styled.ul`
  /* display: flex;
  justify-content: center; */
`;

export const Item = styled.li`
  :first-child {
    filter: drop-shadow(0px 0px 30px #00ffff);
  }
  :nth-child(2n) {
    filter: drop-shadow(0px 0px 30px #ffbb00);
  }
  :nth-child(3n) {
    filter: drop-shadow(0px 0px 30px #ff0101);
  }
  :nth-child(4n) {
    filter: drop-shadow(0px 0px 30px #ff6701);
  }
  :last-child {
    filter: drop-shadow(0px 0px 30px #ff01c0);
  }
`;

export const Text = styled.p`
  :first-child {
    filter: drop-shadow(0px 0px 30px #00ffff);
  }
  :nth-child(2n) {
    filter: drop-shadow(0px 0px 30px #ffbb00);
  }
  :nth-child(3n) {
    filter: drop-shadow(0px 0px 30px #ff0101);
  }
  :nth-child(4n) {
    filter: drop-shadow(0px 0px 30px #ff6701);
  }
  :last-child {
    filter: drop-shadow(0px 0px 30px #ff01c0);
  }

  font-weight: 700;
`;
