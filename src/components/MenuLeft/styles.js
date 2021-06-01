import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 50px;
    z-index: 999;
    background-color: black;
    position: fixed;
    transition: all ease 0.2s;
    &:hover{
        width: 150px;
    }
`;
export const List = styled.div`
    max-width: 25ch;
    height: 100vh;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
    &:hover{
        opacity: 1;
        width: 150px;
    }
`;

export const PointList = styled.a`
    
`;