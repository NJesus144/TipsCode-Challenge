import styled from "styled-components";

export const Container = styled.div`
 height: 100vh;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-family: sans-serif;

 h1 {

 }

 button {
    background-color: #dc4773;
    padding: 15px 20px;
    width: 100%;
    border-radius: 10px;
    border: 0;
    font-weight: bold;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s;

    margin-top: 30px;

    &:hover {
      background-color: #ffad2e;
    }
  }
`;
