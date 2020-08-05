import React, {useState} from 'react';
import './App.css';
import TodoCreateForm from "./TodoCreateForm";
import TodoList from "./TodoList";


const initialList = [
    {id: 1, title: 'first Todo', done: false},
    {id: 2, title: 'second Todo', done: false},
    {id: 3, title: 'third Todo', done: false},
];

function App() {

    const [list, setList] = useState(initialList);

    const create = (title) => {
        console.log(title);
        const newItem = {id: Math.random(), title: title, done: false}
        const updatedList = [...list, newItem];
        setList(updatedList);
    };

    const markAsDone = (todoId) => {
        const newList = [...list].map(el => {
            if (el.id === todoId) return {...el, done: true}
            return el;
        })
        setList(newList);
    };

    const unMark = (todoId) => {
        const newList = [...list].map(el => {
            if (el.id === todoId) return {...el, done: false}
            return el;
        })
        setList(newList);
    };

    const remove = (todoId) => {
        const newList = [...list].filter(el => el.id !== todoId);
        setList(newList);
    };

    const todoUpdate = (todoId, newTodo) => {
        const updatedList = [...list].map(el => {
            if (el.id === todoId) return {...el, title: newTodo}
            return el;
        })
        setList(updatedList);
    };


    return (

        <div className="App">
            <h3>To Do List </h3>

            <TodoCreateForm create={create}/>

            <TodoList list={list}
                      markAsDone={markAsDone}
                      unMark={unMark}
                      remove={remove}
                      todoUpdate={todoUpdate}/>

        </div>
    );
}

export default App;
