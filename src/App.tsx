import { useState } from "react";
import FormAddTodo from "./components/FormAddTodo";
import Todos from "./components/Todos";

export interface Todo {
  // la primera letra mayúscula
  text: string;
  complete: boolean;
}

const initialTodos = [
  //typescript tiene inferencia de datos de manera automática
  // no es necesario estar indicando a cada elemento su tipo de datos
  {
    text: "Learn React",
    complete: false,
  },
  {
    text: "Learn Typescript",
    complete: true,
  },
];

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  //useState será un array y tendrá la estructura del Todo
  // otra forma de representar esto, useState<Array<Todo>>

  const addTodo = (text: string) => {
    const newTodo = {
      text,
      complete: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (selectedTodo: Todo) => {
    setTodos((prevTodos) => {
      // prev significa el estado anterior
      return prevTodos.map((todo) => {
        if (todo === selectedTodo) return { ...todo, complete: !todo.complete };
        return todo;
      });
    });
  };

  const removeTodo = (selectedTodo: Todo) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo !== selectedTodo);
    });
  };
  return (
    <div className="container">
      <h1>Todo</h1>
      <FormAddTodo addTodo={addTodo} />
      <div>
        <Todos todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      </div>
    </div>
  );
};

export default App;
