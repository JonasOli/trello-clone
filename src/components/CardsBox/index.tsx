import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemType } from "../../Enums/ItemType";
import { AddCard } from "./AddCard";
import { AddCardButton, CardsBoxContainer, DropZoneContainer } from "./styles";

interface IProps {
  title: string;
  children: any;
  changeCardStatus: (cardId: string) => void;
}

export const CardsBox = ({ title, changeCardStatus, children }: IProps) => {
  const [addCard, setAddCard] = useState(false);
  const [{ isOver }, drop] = useDrop({
    accept: ItemType.CARD,
    drop: (item: any) => changeCardStatus(item.id),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  return (
    <CardsBoxContainer ref={drop} isOver={isOver}>
      <h1>{title}</h1>

      <DropZoneContainer>{children}</DropZoneContainer>

      {addCard && <AddCard onCancel={() => setAddCard(false)} />}

      {!addCard && (
        <AddCardButton onClick={() => setAddCard(true)}>
          + Add another card
        </AddCardButton>
      )}
    </CardsBoxContainer>
  );
};
