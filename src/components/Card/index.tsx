import React from "react";
import { useDrag } from "react-dnd";
import { ItemType } from "../../Enums/ItemType";
import { CardContainer } from "./styles";

interface IProps {
  content: string;
  cardId: string;
}

export const Card = ({ content, cardId }: IProps) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemType.CARD, id: cardId },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  return (
    <CardContainer
      ref={drag}
      className="card-container"
      isDragging={isDragging}
    >
      {content}
    </CardContainer>
  );
};
