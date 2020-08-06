import React from "react";
import { AddCardContainer, AddCardTextArea } from "./styles";

interface IProps {
  onCancel: () => void;
}

export const AddCard = ({ onCancel }: IProps) => {
  return (
    <AddCardContainer>
      <AddCardTextArea placeholder="Enter a title for this card..." rows={3} />

      <section className="buttons-container">
        <button className="add-card-button">Add Card</button>
        <button className="cancel-card-button" onClick={onCancel}>
          X
        </button>
      </section>
    </AddCardContainer>
  );
};
