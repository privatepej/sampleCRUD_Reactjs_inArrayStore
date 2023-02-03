import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

const Todolist = () => {
  const [state, setState] = useState({
    todo: " ",
    todolist: [],
  });

  const [edit, setEdit] = useState({
    editIndex: "",
    editTodo: " ",
  });

  const [isUpdate, setiIsUpdate] = useState(false);

  const { todo, todolist } = state;
  const { editTodo, editIndex } = edit;

  const handleOnchangeEdit = (e) => {
    const { name, value } = e.target;

    setEdit({ ...edit, [name]: value });
  };
  // Edit
  const handleOnClickEdit = (index) => {
    setiIsUpdate(true);
    setEdit({ ...edit, editIndex: index });
  };
  // Cancel
  const handleOnClickCancel = () => {
    setiIsUpdate(false);
  };
  // change
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  //console.log("state", state);

  // Create
  const createTodo = () => {
    const list = todolist; // current laman
    list.push(todo); //current - index
    setState({ todo: " ", todolist: list });
  };
  // Delete
  const deleteTodo = (index) => {
    const list = todolist; // current laman
    list.splice(index, 1); //current + current todo so nadagdagan array
    setState({ todo: " ", todolist: list });
  };
  //UPDATE
  const updateTodo = (index) => {
    const list = todolist; // current laman
    list[index] = editTodo;
    setState({ ...state, todolist: list });
  };
  return (
    <>
      <div className="todolist-main">
        <div className="form-wrapper">
          <input
            type="text"
            name="todo"
            placeholder="create todolist"
            value={todo}
            onChange={handleOnchange}
          />
          <button onClick={createTodo}>ADD</button>
        </div>
        <div className="table-main">
          <div className="header-wrapper">
            <span>To Do</span>
            <span>Action</span>
          </div>
          {todolist.length ? (
            todolist.map((value, index) => (
              <ToDoItem
                key={index}
                index={index}
                value={value}
                deleteTodo={deleteTodo}
                handleOnClickEdit={handleOnClickEdit}
              />
            ))
          ) : (
            <span>no Records found!</span>
          )}
          {isUpdate ? (
            <div className="form-wrapper">
              <input
                type="text"
                name="editTodo"
                placeholder="Update todo"
                value={editTodo}
                onChange={handleOnchangeEdit}
              />
              <button onClick={() => updateTodo(editIndex)}>Update</button>
              <button onClick={handleOnClickCancel}>Cancel</button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Todolist;
