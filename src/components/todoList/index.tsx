import styled from 'styled-components'

import TodoItem from '../todoItem';

import { TodoItemInterface } from '../../interfaces';

const TodoList = styled.ul`
    text-align: left;
    list-style: none;
    padding: 5px;
    margin: 0;
`;

export interface listProps {
    todos: Array<TodoItemInterface>,
    onItemClick: (id: number, currentStatus: boolean) => void 
};

function List(props: listProps) {
    const { todos, onItemClick } = props;

    const readyTodos = todos.filter(element => element.completed === true)
    const handleItemClick = (id: number, completed: boolean) => {
        onItemClick(id, completed)
    }

    const todoItems = todos.map((item) => {
       return (
            <TodoItem
                key={ item.id.toString() }
                data={ item }
                onItemClick={ handleItemClick }
            />
       );
    })

    return (
        <TodoList >
            <p>всего задач <b>{ todoItems.length }</b></p>
            <p>выполненных задач <b>{ readyTodos.length }</b></p>
            
            { todoItems }
        </TodoList>
    );
}

export default List;