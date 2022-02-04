import React from 'react';
import { Todo } from '../models/models';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {

    const handleDone = (id: number) => {

    }
    return <form className="todos__single">
        <span className="todos__singletext">
            {todo.todo}
        </span>
        <div>
            <span className="icon">
                <AiFillEdit />
            </span>
            <span className="icon">
                <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone />
            </span>


        </div>
    </form >;
};

export default SingleTodo;