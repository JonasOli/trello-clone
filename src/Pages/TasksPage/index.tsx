import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../../components/Card";
import { CardsBox } from "../../components/CardsBox";
import { TaskType } from "../../Enums/TaskType";
import { TaskPageContainer } from "./styles";

const data = [
  {
    id: uuidv4(),
    content: "go to the market",
    type: TaskType.TO_DO,
  },
  {
    id: uuidv4(),
    content: "cooking",
    type: TaskType.DOING,
  },
  {
    id: uuidv4(),
    content: "take a shower",
    type: TaskType.DONE,
  },
];

export const statuses = [
  { type: TaskType.TO_DO, title: "To do" },
  { type: TaskType.DOING, title: "Doing" },
  { type: TaskType.DONE, title: "Done" },
];

export const TaskPage = () => {
  const [tasks, setTasks] = useState(data);

  function changeCardStatus(cardId: string, cardStatus: TaskType) {
    const task = tasks.filter((task) => task.id === cardId);

    setTasks((prevState) => {
      const newItems = prevState
        .filter((task) => task.id !== cardId)
        .concat({ ...task[0], type: cardStatus });
      return [...newItems];
    });
  }

  function moveItem(dragIndex: number, hoverIndex: number) {
    const task = tasks[dragIndex];

    setTasks((prevState) => {
      prevState.splice(dragIndex, 1);
      prevState.splice(hoverIndex, 0, task);

      return [...prevState];
    });
  }

  function getIndex(cardId: string) {
    return tasks.findIndex((task) => task.id === cardId);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <TaskPageContainer>
        {statuses.map((status, index) => {
          return (
            <CardsBox
              key={index}
              title={status.title}
              changeCardStatus={changeCardStatus}
              status={status.type}
            >
              {tasks
                .filter((task) => task.type === status.type)
                .map((task, index) => (
                  <Card
                    key={task.id}
                    cardData={task}
                    moveItem={moveItem}
                    index={getIndex(task.id)}
                  />
                ))}
            </CardsBox>
          );
        })}
      </TaskPageContainer>
    </DndProvider>
  );
};
