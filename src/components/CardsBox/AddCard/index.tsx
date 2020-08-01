import React from "react";
import { Button } from "../../Button";
import { AddCardContainer, AddCardTextArea } from "./styles";

export const AddCard = () => {
  return (
    <AddCardContainer>
      <AddCardTextArea placeholder="Enter a title for this card..." rows={3} />

      <section className="buttons-container">
        <Button className="add-card-button" type="add">Add Card</Button>
        <Button className="cancel-card-button" type="primary">X</Button>
      </section>
    </AddCardContainer>
  );
};
