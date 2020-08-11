import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { ItemType } from "../../Enums/ItemType";
import { AddCard } from "./AddCard";
import { AddCardButton, CardsBoxContainer, DropZoneContainer } from "./styles";
import { TaskType } from "../../Enums/TaskType";

interface IProps {
  title: string;
  children: any;
  changeCardStatus: (cardId: string) => void;
  status: TaskType;
}

export const CardsBox = ({
  title,
  changeCardStatus,
  children,
  status,
}: IProps) => {
  const [addCard, setAddCard] = useState(false);
  const [{ isOver }, drop] = useDrop({
    accept: ItemType.CARD,
    canDrop: (item) => {
      return item.status !== status;
    },
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
