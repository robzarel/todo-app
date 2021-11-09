import { MouseEvent } from 'react';
import styled from 'styled-components';

import Icon, { ICON_TYPE_KEYS, ICON_SIZE_KEYS } from '../icon';

import { TodoItemInterface } from '../../interfaces';

interface todoItemInterface {
    data: TodoItemInterface,
    onItemClick: (id: number, currentStatus: boolean) => void 
}

const ItemWrapper = styled.li`
    padding: 6px 10px 10px 40px;
    cursor: pointer;
    background-color: #fff;
    background-repeat: no-repeat;
    background-size: contain;
    color: black;
    border-radius: 10px;
    margin: 10px;
    background-position: 3px;
    position: relative;
    display: flex;
    align-items: center;
`;

const Title = styled.p`
    margin: 0;
`;

const StyledIcon = styled(Icon)`
    position: absolute;
    left: 10px;
`;

function TodoItem(props: todoItemInterface){
    const {
        data: { id, completed, title },
        onItemClick
    } = props

    const handleItemClick = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        onItemClick(id, completed);
    };

    const iconType = 
        completed 
            ? ICON_TYPE_KEYS.ICON_CHECKBOX_CHECKED
            : ICON_TYPE_KEYS.ICON_CHECKBOX_UNCHECKED

    return (
        <ItemWrapper onClick={ handleItemClick }>
            <StyledIcon size={ ICON_SIZE_KEYS.ICON_SIZE_S } icon={ iconType } />
            <Title> { title } </Title>
        </ItemWrapper>
    );
}

export default TodoItem;