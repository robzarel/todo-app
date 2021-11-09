import { useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setupTodos, updateTodoStatus } from '../../redux/slices/todos';

import List from '../../components/todoList';

const Wrapper = styled.div`
    text-align: center;
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`

function App() {
    const dispatch = useAppDispatch();
    const { todos } = useAppSelector((state) => state.todos);
  
    useEffect(() => {
        const fetchTodos = async () => {
            const result = await axios('https://jsonplaceholder.typicode.com/todos');

            dispatch(setupTodos(result.data));
        };

        todos.length === 0 && fetchTodos();
    }, [dispatch, todos.length]);
    
    const changeTodoItemStatus = (id: number, completed: boolean) => {    

      dispatch(updateTodoStatus({ id, completed }));
  }
  
  return (
    <Wrapper>
        <List todos={ todos } onItemClick={ changeTodoItemStatus }/>
    </Wrapper>
  );
}

export default App;
