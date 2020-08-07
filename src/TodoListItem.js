import React, {useState} from 'react';

const trash = (<svg className="bi bi-trash" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
    <path
        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
    <path fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>)


const pencil = (<svg className="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                     xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd"
          d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
    <path fillRule="evenodd"
          d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
</svg>)


function TodoListItem(props) {


    const {id, title, done, toggleDone, onDelete, edit, move} = props;

    const titleStyle = done ? {textDecoration: "line-through", listStyleType: "none"} : {listStyleType: "none"};

    const [isEditMode, setIsEditMode] = useState(false);
    const [updateTodo, setUpdateTodo] = useState(title);

    const inputHandler = (e) => {
        setUpdateTodo(e.target.value)
    };

    const saveButtonHandler = () => {
        edit(id, updateTodo);
        setIsEditMode(false);
    };

    // if(isEditMode) {
    //     return (<div>
    //         <input value={newTodo} onChange={inputHandler}/>
    //         <button className="btn btn-outline-success ml-2 mt-2" onClick={saveButtonHandler}>Save</button>
    //     </div>
    //     );
    // } else {
    //     return (<div>
    //                <span className="title" style={titleStyle}>
    //                  {todoTitle}
    //                </span>
    //             <button className="btn btn-outline-success ml-2 mt-2" onClick={() => toggleDone(todoId)}>
    //                 {isTodoDone ? 'Undone' : 'Done'}
    //             </button>
    //             <button className="btn btn-outline-warning ml-3 mt-2"
    //                     onClick={() => setIsEditMode(true)}>{pencil}</button>
    //             <button className="btn btn-outline-danger ml-2 mt-2" onClick={() => onDelete(todoId)}>{trash}</button>
    //         </div>
    //     );
    // }
    // }

    return (
        <div className="form-group">
            {isEditMode ? (
                <div>
                    <input value={updateTodo} onChange={inputHandler}/>
                    <button className="btn btn-outline-success ml-2 mt-2" onClick={saveButtonHandler}>Save</button>
                </div>
            ) : (
                <div>
                   <span className="title" style={titleStyle}>
                     {title}
                   </span>
                    <button className="btn btn-outline-success ml-2 mt-2" onClick={() => toggleDone(id)}>
                        {done ? 'Undone' : 'Done'}
                    </button>
                    <button className="btn btn-outline-warning ml-3 mt-2" onClick={() => setIsEditMode(true)}>{pencil}</button>
                    <button className="btn btn-outline-danger ml-2 mt-2" onClick={() => onDelete(id)}>{trash}</button>
                    <button className="btn btn-outline-warning ml-3 mt-2" onClick={() => move (id, -1)}>Up</button>
                    <button className="btn btn-outline-warning mt-2" onClick={() => move (id, 1)}>Down</button>
                </div>
            )}

        </div>

    );
}

export default TodoListItem;
