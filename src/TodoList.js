import React from 'react';
import TodoListItem from "./TodoListItem";


function TodoList(props) {

    const {list, onDelete, todoUpdate, toggleDone, edit, move} = props;

    return (
        <div className="form-group">
            {list.map(el => <TodoListItem id={el.id}
                                          title={el.title}
                                          done={el.done}
                                          key={el.id}
                                          toggleDone={toggleDone}
                                          onDelete={onDelete}
                                          edit={edit}
                                          move={move}/>)}

        </div>
    );
}

export default TodoList;
