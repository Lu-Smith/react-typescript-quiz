import styled from "styled-components";

export const Container = styled.div`
 font-style: italic;
 color: #e0ebeb; 
 background-color: #a7bcb9; 
 padding: 15px 20px;
 font-size: 20px;

 a {
    text-decoration: none;
    color: #e0ebeb; 
    transition: 200ms all ease-in-out;

 &:hover {
    border-bottom: 3px dotted #5dacbd; 
    border-top: 3px dotted #5dacbd; 
    padding: 5px 0;
 }
 }
`

export const Answer = styled.div`
 font-size: 20px;
 color: #24527a;

 button {
    width: 100%;

 &:active {
    background-color: #5dacbd; 
    color: #e0ebeb; 
 }
 &:hover {
    background-color: #5dacbd; 
    color: #e0ebeb; 
 }
}

 @media (max-width: 768px) {
    font-size: 18px;
 }

`

export const Number = styled.p`
 font-size: 20px;
 color: #24527a;
 font-weight: 600;
`

export const Question = styled.p`
 font-size: 25px;
 margin: 15px 0;

 @media (max-width: 768px) {
    font-size: 20px;
  }
`