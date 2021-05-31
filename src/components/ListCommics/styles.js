import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const ListArea = styled.div`
    overflow-x: hidden;
`;

export const List = styled.div`

`;
export const Subtitle = styled.text`
    font-size: 15px;
    font-weight: bold;
`;

export const Item = styled.div`
    display: inline-block;
    width: 248px;
    height: 420px;
    margin-left: 10px;
    
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
    &:hover {
    transform: scale(1);
  }
`;

export const MenuLeft = styled.div`
    background-color: grey;
`;