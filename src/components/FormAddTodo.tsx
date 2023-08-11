import { ChangeEvent, useState } from "react";

interface Props {
  addTodo: (text: string) => void; // agregamos la función addTodo indicando el parámetro qu recibirá (text) y su tipo (string) que no devolverá nada (void)
  // addTodo no devuelve nada, solo cambia el estado
  // la misma sentencia de manera opcional, notar el signo de interrogacion ?
  //addTodo?: (text: string) => void;
  // en ese caso se indica a typescript que el prop addTodo es opcional
}

const FormAddTodo = ({ addTodo }: Props) => {
  // aqui relacionamos la interface Props con el parámetro desestructurado addTodo
  const [text, setText] = useState("");
  // se aplica automáticamente la inferencia de typescript reconociendo al useState como string, se puede confirmar colocando el cursor en el texto useState
  // seria redundante colocar useState<String>
  // la inferencia en datos primitivos como boolean, numeric, string, ...
  // se hacen de manera inmediata
  // si no hiciera la inferencia como cuando el dato es personalizado, es recomendable indicar explicitamente el typecript

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const trimmedText = text.trim();
    if (!trimmedText) return;
    addTodo(trimmedText);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">
        Todo
        <input
          type="text"
          id="todo"
          placeholder="Ingrese Todo"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add todo</button>
      </label>
    </form>
  );
};

export default FormAddTodo;
