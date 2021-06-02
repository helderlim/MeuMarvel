import styled from "styled-components";

export const Container = styled.div`
  padding-left: 50px;
  
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
export const Subtitle = styled.p`
  position: absolute;
  top: 350px;
  right: 20px;
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  
`;

export const Item = styled.div`
    display: inline-block;
    position: relative;
    width: 248px;
    height: 420px;
    transform: scale(0.93);
    cursor:pointer;
   
    transition: all ease 0.2s;
    &:hover {
    transform: scale(1);
  }
   
    
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
   
    mask-image: linear-gradient(to top, transparent 1%, black 50%);
   
`;
