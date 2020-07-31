import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../../components/Card";
import { CardsBox } from "../../components/CardsBox";
import { TaskType } from "../../Enums/TaskType";
import { TaskPageContainer } from "./styles";

export const TaskPage = () => {
  const [tasks, setTasks] = useState([
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
  ]);

  function changeCardStatus(cardId: string, cardStatus: TaskType) {
    const task = tasks.filter((task) => task.id === cardId);
    task[0].type = cardStatus;
    setTasks(tasks.filter((task) => task.id !== cardId).concat(task));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <TaskPageContainer>
        <CardsBox
          title="To do"
          changeCardStatus={(cardId: string) =>
            changeCardStatus(cardId, TaskType.TO_DO)
          }
        >
          {tasks
            .filter((task) => task.type === TaskType.TO_DO)
            .map((task) => (
              <Card key={task.id} cardId={task.id} content={task.content} />
            ))}
        </CardsBox>
        <CardsBox
          title="Doing"
          changeCardStatus={(cardId: string) =>
            changeCardStatus(cardId, TaskType.DOING)
          }
        >
          {tasks
            .filter((task) => task.type === TaskType.DOING)
            .map((task) => (
              <Card key={task.id} cardId={task.id} content={task.content} />
            ))}
        </CardsBox>
        <CardsBox
          title="Done"
          changeCardStatus={(cardId: string) =>
            changeCardStatus(cardId, TaskType.DONE)
          }
        >
          {tasks
            .filter((task) => task.type === TaskType.DONE)
            .map((task) => (
              <Card key={task.id} cardId={task.id} content={task.content} />
            ))}
        </CardsBox>
      </TaskPageContainer>
    </DndProvider>
  );
};
