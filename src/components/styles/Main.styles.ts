import styled from "styled-components";

export const Container = styled.div`
 font-style: italic;
 color: #e0ebeb; 
 background-color: #a7bcb9; 
 padding: 15px 20px;
 font-size: 20px;
 height: 80vh;

 h1 {
    color: #24527a; 
    font-family: 'Pacifico', cursive;
 }

 button {
    padding: 10px 15px;
    font-size: 22px;
    font-weight: 600;
    border-radius: 15px;
    color: #5dacbd; 
    border: 2px solid  #5dacbd; 
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    transition: 200ms all ease-in-out;
    margin-bottom: 20px;

    &:hover {
      background-color: #5dacbd; 
      color: #e0ebeb; 
    }
};
`

export const Score= styled.div`
font-size: 40px;
font-weight: 800;

span {
    background-color: #5dacbd; 
    padding: 10px 15px;
    border-radius: 15px;
    font-style: normal;
}
`