import React from 'react';
import TodoListItem from "./TodoListItem";


function TodoList(props) {

    const {list, markAsDone, unMark, remove, todoUpdate} = props;

    return (
        <div className="form-group">
            {list.map(el => <TodoListItem todo={el}
                                          key={el.id}
                                          markAsDone={markAsDone}
                                          unMark={unMark}
                                          remove={remove}
                                          todoUpdate={todoUpdate}/>)}

        </div>
    );
}

export default TodoList;
