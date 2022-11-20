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

 @media (max-width: 768px) {
    font-size: 18px;
 }
 
 @media (max-width: 480px) {
    font-size: 12px;
    padding: 15px 2px;
 }
`