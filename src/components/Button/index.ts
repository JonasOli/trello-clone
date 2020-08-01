import styled from "styled-components";

const buttonType = {
  primary: {
    color: "#fff",
    backgroudColor: "#3d99ce",
  },
  add: {
    color: "#fff",
    backgroudColor: "#5aac44",
  },
};

export const Button = styled.button<any>`
  font-size: 14px;
  border-radius: 3px;
  padding: 0.5rem;
  border: 0;
  cursor: pointer;
  background-color: ${({ type }) => {
    //@ts-ignore
    return buttonType[type].backgroudColor;
  }};
  color: ${({ type }) => {
    //@ts-ignore
    return buttonType[type].color;
  }};
`;
