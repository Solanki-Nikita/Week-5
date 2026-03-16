import React, { useState, useReducer } from "react";

/*

Initial State
This is the starting state for the reducer.
todos → array that will store all tasks.
*/
const initialState = {
  todos: []
};

/*

Reducer Function
Reducer decides HOW state changes.

Parameters:
state  → current state
action → instruction telling reducer what to do

Reducer ALWAYS returns a new state object.
*/
function reducer(state, action) {

  switch (action.type) {

    /*
    ADD_TODO
    Adds a new todo item to the list.
    action.payload contains the text.
    */
    case "ADD_TODO":
      return {
        ...state, // keep existing state properties

        // create new todos array
        todos: [
          ...state.todos, // existing todos

          // new todo object
          {
            id: Date.now(),   // unique id
            text: action.payload,
            completed: false
          }
        ]
      };


    /*
    TOGGLE_TODO
    Mark todo as completed / uncompleted.
    */
    case "TOGGLE_TODO":
      return {
        ...state,

        // map through todos and update matching id
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed } // toggle
            : todo
        )
      };


    /*
    DELETE_TODO
    Remove todo from list
    */
    case "DELETE_TODO":
      return {
        ...state,

        // filter removes matching id
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        )
      };


    /*
    CLEAR_TODOS
    Remove all todos
    */
    case "CLEAR_TODOS":
      return {
        ...state,
        todos: []
      };

    /*
    Default case
    If action type doesn't match anything
    return existing state.
    */
    default:
      return state;
  }
}

export default function TodoApp() {

  /*
  useReducer Hook

  state    → current state
  dispatch → function used to trigger actions
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  /*
  Input field state (separate from reducer)
  */
  const [input, setInput] = useState("");

  /*
  Add Todo Handler
  Called when user clicks Add button
  */
  const handleAddTodo = () => {

    // prevent empty tasks
    if (input.trim() === "") return;

    /*
    dispatch sends action to reducer
    */
    dispatch({
      type: "ADD_TODO",
      payload: input
    });

    // clear input field
    setInput("");
  };

  return (
    <div>

      {/* Title */}
      <h2>Todo List (useReducer)</h2>

      {/* Input field for new task */}
      <input
        type="text"
        value={input}
        placeholder="Enter task..."
        onChange={(e) => setInput(e.target.value)}
      />

      {/* Add button */}
      <button onClick={handleAddTodo}>
        Add
      </button>

      <hr />

      {/*  Todo List Rendering*/}
      <ul>

        {/* Loop through todos */}
        {state.todos.map((todo) => (

          <li key={todo.id}>

            {/* Todo text */}
            <span
              onClick={() =>
                dispatch({
                  type: "TOGGLE_TODO",
                  payload: todo.id
                })
              }

              /*
              If completed → line-through
              */
              style={{
                cursor: "pointer",
                textDecoration:
                  todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>

            {/* Delete button */}
            <button
              onClick={() =>
                dispatch({
                  type: "DELETE_TODO",
                  payload: todo.id
                })
              }
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

      <hr />

      {/* Clear all tasks */}
      <button
        onClick={() => dispatch({ type: "CLEAR_TODOS" })}
      >
        Clear All
      </button>

    </div>
  );
}