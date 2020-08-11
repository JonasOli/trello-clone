import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../../components/Card";
import { CardsBox } from "../../components/CardsBox";
import { TaskType } from "../../Enums/TaskType";
import { TaskPageContainer } from "./styles";

export const data = [
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
      const newItems = prevState.filter((i, idx) => idx !== dragIndex);
      newItems.splice(hoverIndex, 0, task);
      return [...newItems];
    });
  }

  function getIndex(cardId: string) {
    return tasks.findIndex((task) => task.id === cardId);
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <TaskPageContainer>
        <CardsBox
          title="To do"
          changeCardStatus={(cardId: string) =>
            changeCardStatus(cardId, TaskType.TO_DO)
          }
          status={TaskType.TO_DO}
        >
          {tasks
            .filter((task) => task.type === TaskType.TO_DO)
            .map((task) => (
              <Card
                key={task.id}
                cardData={task}
                moveItem={moveItem}
                index={getIndex(task.id)}
              />
            ))}
        </CardsBox>
        <CardsBox
          title="Doing"
          changeCardStatus={(cardId: string) =>
            changeCardStatus(cardId, TaskType.DOING)
          }
          status={TaskType.DOING}
        >
          {tasks
            .filter((task) => task.type === TaskType.DOING)
            .map((task) => (
              <Card
                key={task.id}
                cardData={task}
                moveItem={moveItem}
                index={getIndex(task.id)}
              />
            ))}
        </CardsBox>
        <CardsBox
          title="Done"
          changeCardStatus={(cardId: string) =>
            changeCardStatus(cardId, TaskType.DONE)
          }
          status={TaskType.DONE}
        >
          {tasks
            .filter((task) => task.type === TaskType.DONE)
            .map((task) => (
              <Card
                key={task.id}
                cardData={task}
                moveItem={moveItem}
                index={getIndex(task.id)}
              />
            ))}
        </CardsBox>
      </TaskPageContainer>
    </DndProvider>
  );
};
