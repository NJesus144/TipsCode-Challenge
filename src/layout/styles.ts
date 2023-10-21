import styled from "styled-components";

const WIDTH_BREAK = "700px";

export const StyledFlex = styled.div`
  display: flex;
`;

interface ImgProps {
  image: string;
}

export const StyledImage = styled.div<ImgProps>`
  background-image: url("${(props) => props.image}");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100vh;

  @media (max-width: ${WIDTH_BREAK}) {
    display: none;
  }
`;

export const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  padding: 30px 50px;
  font-family: sans-serif;
  h1 {
    color: #333;
  }

 div{
  margin-top: 10px;
 }

  input {
    width: 100%;
    border: 1px solid #dcdcdc;
    padding: 15px 20px;
    box-sizing: border-box;
    border-radius: 10px;

    &:focus {
      outline: none;
    }
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

  p {
    color: #ff4558;
  }

  @media (min-width: ${WIDTH_BREAK}) {
    min-width: calc(${WIDTH_BREAK} - 100px);
  }
  @media (max-width: ${WIDTH_BREAK}) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;

  height: calc(100vh - 60px);
  overflow-y: auto;

  &:before,
  &:after {
    content: "";
    margin: auto;
  }
`;
