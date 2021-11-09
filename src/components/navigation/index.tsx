import { Link } from "react-router-dom";
import styled from 'styled-components'

const ListWrapper = styled.div`
    height: 50px;
`
const NavList = styled.ul`
    display: flex;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
    background-color: #282c34;

`;

const NavItem = styled.li`
    cursor: pointer;
    margin: 0;
    padding: 0 0 0 10px;
    & > a {
        color: #fff
    }
`;

interface navigationProps {}

function Navigation (props: navigationProps) {
    return (
        <ListWrapper  >
            <NavList>
                <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                    <Link to="/dashboard">Dashboard</Link>
                </NavItem>
            </NavList>
        </ListWrapper>
    )
}

export default Navigation;