import "./App.css";
import { useState } from "react";
import ToggleButton from "./components/ToggleButton";
import DeleteButton from "./components/DeleteButton";

function App() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    };

    const contentChangeHandler = (event) => {
        setContent(event.target.value);
    };

    const [todoList, setTodoList] = useState([
        { id: 1, title: "리액트 공부하기", content: "리액트 기초를 공부해봅시다.", isDone: false },
        { id: 2, title: "리액트 공부하기", content: "리액트 기초를 공부해봅시다.", isDone: true },
    ]);

    // add new todo item to working list
    const saveTodoHandler = () => {
        const newTodo = {
            id: todoList.length + 1,
            title,
            content,
            isDone: false,
        };
        setTodoList([...todoList, newTodo]);
    };

    // add a todo item to done list
    const toggleHandler = (id) => {
        console.log("toggle id:", id);
        todoList[id - 1].isDone = !todoList[id - 1].isDone;
        setTodoList([...todoList]);
    };

    // delete a todo item
    const deleteHandler = (id) => {
        console.log("delete id:", id);
        todoList[id - 1].isDone = "삭제";
        setTodoList([...todoList]);
    };

    return (
        <div id="root">
            <div className="layout">
                <div className="container">
                    <div>My Todo List</div>
                    <div>React</div>
                </div>
                <div className="add-form">
                    <div className="input-group">
                        <label className="form-label">제목</label>
                        <input className="add-input input-body" type="text" name="title" value={title} onChange={titleChangeHandler} />
                        <label className="form-label">내용</label>
                        <input className="add-input" type="text" name="body" value={content} onChange={contentChangeHandler} />
                    </div>
                    <button className="add-button" onClick={saveTodoHandler}>
                        추가하기
                    </button>
                </div>
                <div className="list-container">
                    <h2 className="list-title">Working...🎈</h2>
                    <div className="list-wrapper">
                        {todoList
                            .filter((item) => item.isDone === false)
                            .map((item) => {
                                return (
                                    <div className="todo-container" key={item.id}>
                                        <h2 className="todo-title">{item.title}</h2>
                                        <p>{item.content}</p>
                                        <div className="button-set">
                                            <DeleteButton handler={deleteHandler} id={item.id} />
                                            <ToggleButton handler={toggleHandler} id={item.id}>
                                                완료
                                            </ToggleButton>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                    <h2 className="list-title">Done...! 🤹‍♀️</h2>
                    <div className="list-wrapper">
                        {todoList
                            .filter((item) => item.isDone === true)
                            .map((item) => {
                                return (
                                    <div className="todo-container" key={item.id}>
                                        <h2 className="todo-title">{item.title}</h2>
                                        <p>{item.content}</p>
                                        <div className="button-set">
                                            <DeleteButton handler={deleteHandler} id={item.id} />
                                            <ToggleButton handler={toggleHandler} id={item.id}>
                                                취소
                                            </ToggleButton>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
