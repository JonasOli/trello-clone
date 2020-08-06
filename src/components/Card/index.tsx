import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemType } from "../../Enums/ItemType";
import { CardContainer, CardContent } from "./styles";

interface IProps {
  content: string;
  cardId: string;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}

export const Card = ({ content, cardId, index, moveItem }: IProps) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemType.CARD,
    hover: (item: any, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      // @ts-ignore
      const hoveredRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoveredRect.bottom - hoveredRect.top) / 2;
      const mousePosition = monitor.getClientOffset();
      // @ts-ignore
      const hoverClientY = mousePosition.y - hoveredRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemType.CARD, id: cardId, index },
    collect: (monitor) => ({ isDragging: !!monitor.isDragging() }),
  });

  drag(drop(ref));

  return (
    <CardContainer ref={ref} className="card-container" isDragging={isDragging}>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};
