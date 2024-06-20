import React, { useReducer, useState } from "react";
import styled from "styled-components";

interface Task {
  id: number;
  text: string;
  column: "Todo" | "In Progress" | "Done";
}

type ActionType =
  | { type: "ADD_TASK"; payload: Task }
  | {
      type: "MOVE_TASK";
      payload: { id: number; newColumn: "Todo" | "In Progress" | "Done" };
    };

const taskReducer = (state: Task[], action: ActionType): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "MOVE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, column: action.payload.newColumn }
          : task
      );
    default:
      return state;
  }
};

const TaskBoardContainer = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
`;

const ColumnContainer = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const TaskItem = styled.div<{ column: string }>`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.column === "Todo" ? "#f1f1f1" : "#fff"};
  }
`;

const FormContainer = styled.form`
  display: flex;
  margin-top: 20px;

  input[type="text"] {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px 0 0 5px;
    background-color: #f7f7f7;
    font-size: 16px;
  }

  button {
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #219652;
    }
  }
`;

const AddTaskForm: React.FC<{ onAddTask: (text: string) => void }> = ({
  onAddTask
}) => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskText.trim()) {
      onAddTask(newTaskText);
      setNewTaskText("");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskText}
        onChange={(e) => setNewTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </FormContainer>
  );
};

const TaskManagementBoard: React.FC = () => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = (text: string) => {
    const newTask: Task = { id: Date.now(), text, column: "Todo" };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const moveTask = (id: number, newColumn: "Todo" | "In Progress" | "Done") => {
    dispatch({ type: "MOVE_TASK", payload: { id, newColumn } });
  };

  return (
    <>
      <h2>Task Management - useReducer</h2>
      <TaskBoardContainer>
        <ColumnContainer>
          <h2>Todo</h2>
          {tasks
            .filter((task) => task.column === "Todo")
            .map((task) => (
              <TaskItem
                key={task.id}
                column={task.column}
                onClick={() => moveTask(task.id, "In Progress")}
              >
                {task.text} - click to move
              </TaskItem>
            ))}
          <AddTaskForm onAddTask={addTask} />
        </ColumnContainer>
        <ColumnContainer>
          <h2>In Progress</h2>
          {tasks
            .filter((task) => task.column === "In Progress")
            .map((task) => (
              <TaskItem
                key={task.id}
                column={task.column}
                onClick={() => moveTask(task.id, "Done")}
              >
                {task.text}
              </TaskItem>
            ))}
        </ColumnContainer>
        <ColumnContainer>
          <h2>Done</h2>
          {tasks
            .filter((task) => task.column === "Done")
            .map((task) => (
              <TaskItem key={task.id} column={task.column}>
                {task.text}
              </TaskItem>
            ))}
        </ColumnContainer>
      </TaskBoardContainer>
    </>
  );
};

export default TaskManagementBoard;
