import styled from "styled-components";
import colors from "../../styles/colors"

export const Container = styled.div`
  border-radius: 3%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 160px;
  text-align: center;
  transition: 0.5s ease;
  background-color: ${colors.secondary};
  padding: 7px;
  color: ${colors.primary};


  span{
    text-transform:capitalize;
    cursor: pointer;
  }

  img {
    float: right;
    width: 35px;
    height: 35px;

    border-radius: 50%;
  }
`;
