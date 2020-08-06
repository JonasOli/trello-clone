import styled from "styled-components";
import { styles, colors } from "../../../Utils/defaultStyles";

export const AddCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  .buttons-container {
    display: flex;

    .add-card-button,
    .cancel-card-button {
      padding: 0.5rem;
      border: 0;
      border-radius: 3px;
      cursor: pointer;
    }

    .add-card-button {
      width: 8rem;
      margin-right: 0.5rem;
      background-color: #5aac44;
      color: #fff;

      &:hover {
        background-color: #64bf4b;
      }
    }

    .cancel-card-button {
      color: ${colors.fontColor};
      width: 3rem;

      &:hover {
        background-color: ${colors.hoverBackground};
      }
    }
  }
`;

export const AddCardTextArea = styled.textarea`
  resize: none;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 0;
  box-shadow: ${styles.boxShadow};
  border-radius: 3px;
  font-family: inherit;

  &::placeholder {
    color: inherit;
  }
`;
