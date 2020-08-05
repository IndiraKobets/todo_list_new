import React, {useState} from 'react';


function TodoCreateForm(props) {

    const [inputValue, setInputValue] = useState('')

    const onCreate = () => {
        props.create(inputValue);
        setInputValue('');
    };

    return (
        <div >

            <input value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            <button className="btn btn-outline-success ml-3" onClick={onCreate}>create</button>

        </div>
    );
}

export default TodoCreateForm;
