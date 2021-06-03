import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 40px;
    z-index: 999;
    background-color: black;
    position: fixed;
    transition: all ease 0.2s;
    &:hover{
        width: 150px;
    }
   
`;
export const List = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 25ch;
    height: 100vh;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 4px;
    &:hover{
        opacity: 1;
        width: 150px;
    }
`;
export const PointList = styled.a`
    padding-left: 10px;
    font-size: 15px;
`;
export const Item = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 50px;
    cursor:pointer;
    transition: all ease 0.2s;
    &:hover{
        color:red;
    }
`;
export const Line = styled.div`
    border: 5px #555454 solid;
`;
export const Image = styled.img`
    height: 37px;
    width: 30px;
    border-radius: 50%;
`;