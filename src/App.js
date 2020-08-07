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

    const toggleDone = (todoId) => {
        const newList = list.map(el => {
                    if (el.id === todoId) return {...el, done: !el.done}
                    return el;
                })
                setList(newList);
    }
    const onDelete = (todoId) => {
        const newList = [...list].filter(el => el.id !== todoId);
        setList(newList);
    };

    const edit = (todoId, newTodo) => {
        const updatedList = list.map(el => {
            if (el.id === todoId) return {...el, title: newTodo}
            return el;
        })
        setList(updatedList);
    };

    const move = (todoId, direction) => {
        const firstIndex = list.findIndex(el => el.id === todoId);
        const secondIndex = firstIndex + direction;
         if(secondIndex < 0 || secondIndex > list.length -1) {
             console.warn("CAN'T MOVE! INDEX UOT OF RANGE");
         } else {
           const newList = [...list]
           const temp = newList[firstIndex];              //ниже за коммент строчка - это реструктуризация этих трех строк
           newList[firstIndex] = newList[secondIndex];   //ниже за коммент строчка - это реструктуризация этих трех строк
           newList[secondIndex] = temp;                 //ниже за коммент строчка - это реструктуризация этих трех строк
           // [newList[firstIndex], newList[secondIndex]] = [newList[secondIndex], newList[firstIndex]];
           setList(newList);
         }
    };

    return (

        <div className="App">
            <h3>To Do List </h3>

            <TodoCreateForm create={create}/>

            <TodoList list={list}
                      toggleDone={toggleDone}
                      onDelete={onDelete}
                      edit={edit}
                      move={move}/>

        </div>
    );
}

export default App;
