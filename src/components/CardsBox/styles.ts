import styled from "styled-components";
import { colors } from "../../Utils/colors";

export const CardsBoxContainer = styled.article<any>`
  background-color: ${({ isOver }) => (isOver ? "#cecece" : colors.lightGray)};
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
