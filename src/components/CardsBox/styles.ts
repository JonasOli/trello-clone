import styled from "styled-components";
import { colors } from "../../Utils/defaultStyles";

export const CardsBoxContainer = styled.article<any>`
  background-color: ${({ isOver }) =>
    isOver ? colors.hoverBackground : colors.lightGray};
  width: 27rem;
  height: fit-content;
  margin-left: 1rem;
  margin-top: 1rem;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  position: relative;
  white-space: normal;

  .card-container:last-child {
    margin: 0;
  }
`;

export const DropZoneContainer = styled.section`
  padding: 1rem;
`;

export const AddCardButton = styled.button`
  margin: 0.5rem;
  text-align: left;
  padding: 0.5rem;
  border: 0;
  cursor: pointer;
  color: ${colors.buttonColor};
  border-radius: 3px;
  font-size: 14px;
  background-color: transparent;

  &:hover {
    background-color: ${colors.hoverBackground};
  }
`;
