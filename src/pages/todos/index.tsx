import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { setupTodos, updateTodoStatus } from '../../redux/slices/todos';

import List from '../../components/todoList';
import Modal from '../../components/modal';

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
const ModalTitle = styled.p`
    color: #fff
`;


function App() {
    const [isModalOpen, toogleModal] = useState(false);
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

    const openModal = () => { toogleModal(true); }
    const closeModal = () => { toogleModal(false); }

    const renderModal = () => {
        return (
            <Modal>
                <ModalTitle>this is modal window</ModalTitle>
                <button onClick={ closeModal }>Hide modal</button>
            </Modal>
        );
    }

    return (
        <Wrapper>
            <button onClick={ openModal }>show modal</button>
            { isModalOpen && renderModal() }
            <List todos={ todos } onItemClick={ changeTodoItemStatus }/>
        </Wrapper>
    );
}

export default App;
