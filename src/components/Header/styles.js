import styled from "styled-components";

export const Container = styled.div`
    padding-left: 50px;
    background-color: #292929;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Title = styled.p`
    font-weight: 900;
    font-size: 25px;
    color: #E01126;
`;
export const Selector = styled.div`
margin-right: 25px;
`;
export const Select = styled.a`
    padding-right: 15px;
    cursor: pointer;
    transition: all ease 0.2s;
    &:hover{
        color: #E01126;
    }
`;