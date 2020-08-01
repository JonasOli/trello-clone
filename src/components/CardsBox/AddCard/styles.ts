import styled from "styled-components";
import { styles } from "../../../Utils/defaultStyles";

export const AddCardContainer = styled.article`
  display: flex;
  flex-direction: column;
  margin: 1rem;

  .buttons-container {
    display: flex;

    .add-card-button {
      width: 8rem;
      margin-right: 0.5rem;
    }

    .cancel-card-button {
      width: 20%;
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
