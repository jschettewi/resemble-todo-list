import React from 'react';
import './MainPage.css';
import { useState, useEffect } from "react";
import { useTodoLists } from './gen/todo_app/v1/todo_lists_rsm_react';
import { useTodoList } from './gen/todo_app/v1/todo_list_rsm_react';
import '@fortawesome/fontawesome-free/css/all.css';

interface MainPageArgs {
  selectedTodoList: any;
}

const MainPage = ({ selectedTodoList } : MainPageArgs) => {
  console.log("HERE")
  console.log(selectedTodoList?.id)

  const [todolistId, settodolistId] = useState(selectedTodoList?.id);

  const [todo, setTodo] = useState("");
  
  const { useListTodos, mutators } = useTodoList({ id: todolistId });

  console.log(useTodoList({ id: todolistId }))

  const { response /* , isLoading */ } = useListTodos({todolistId: todolistId});

  const todos = response?.todos || [];


  const onSubmitTodo = (event: any) => {
    event.preventDefault();
    console.log(selectedTodoList?.id)
    // console.log(todolistId)
    mutators.addTodo({ todolistId: selectedTodoList?.id, todo: todo }).then(() => setTodo(""));
  };

  // Update todos when selectedTodoListId changes
  useEffect(() => {
    settodolistId(selectedTodoList?.id);
  }, [selectedTodoList]);

  return (
    <>
      <div className="main">
        <main>
          {selectedTodoList?.id && ( // Render only if selectedTodoList has an id
            <>
            <div className="todo-and-name">
              <h2 className="todo-list-name">{selectedTodoList?.name}</h2>
              <div className="todo-content">
                {todos.map(({ id, text, complete }) => (
                  <Todo key={id} text={text} id={id} complete={complete} 
                  selectedTodoList={selectedTodoList}/>
                ))}
              <div/>
            </div>
            </div>
              <div className="todo-input-container">
                <form onSubmit={onSubmitTodo} className="todo-form">
                  <input
                    required
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="What's Next?"
                    className="new-todo-input"
                  />
                  <button type="submit" className="new-todo-submit-button">Add</button>
                </form>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
};

interface TodoArgs {
  id: string;
  text: string;
  complete: boolean;
  selectedTodoList: any;
}

const Todo = ({ id, text, complete, selectedTodoList }: TodoArgs) => {

  const { useListTodos, mutators } = useTodoList({ id: selectedTodoList?.id });

  const { response /* , isLoading */ } = useListTodos({todolistId: selectedTodoList?.id});

  const onCompleteTodo = () => {
    mutators.completeTodo( { todoId: id })
  }

  const onDeleteTodo = () => {
    mutators.deleteTodo( { todoId: id });
  }

  return (
    <div key={id} className="todo">
      <button onClick={() => onDeleteTodo()} className="todo-delete-button">
        <i className="fa fa-trash"></i>
      </button>
      <button
        className={`todo-item ${complete ? "complete" : ""}`}
        onClick={() => onCompleteTodo()}
      >
        <span>{text}</span>
      </button>
    </div>
  );
};

export default MainPage;