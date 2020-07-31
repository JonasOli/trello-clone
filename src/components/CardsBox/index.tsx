import React from "react";
import { useDrop } from "react-dnd";
import { ItemType } from "../../Enums/ItemType";
import { CardsBoxContainer, DropZoneContainer } from "./styles";

interface IProps {
  title: string;
  children: any;
  changeCardStatus: (cardId: string) => void;
}

export const CardsBox = ({ title, changeCardStatus, children }: IProps) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemType.CARD,
    drop: (item: any) => changeCardStatus(item.id),
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  return (
    <CardsBoxContainer ref={drop} isOver={isOver}>
      <h1>{title}</h1>
      <DropZoneContainer>{children}</DropZoneContainer>
    </CardsBoxContainer>
  );
};
