import styled from "styled-components";
import colors from "../styles/colors"

export const Page = styled.div`
  margin-left: ${({ collapse }) => (collapse ? "70px" : "250px")};
  background-color: #f5f5f5;
  height: 100%;
  overflow: auto;
`;
export const Profile = styled.div`
  z-index: 9999;
  position: fixed;
  float: right;
  right: 0;
  padding: 18px;

  .switch-wrapper {
    position: relative;
  }

  .switch-wrapper > div {
    position: absolute;
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
`;

export const ProfileItem = styled.button`
  cursor: pointer;
  background-color: ${colors.transparent};
  color: ${colors.secondary};
  border: none;

  &:hover{
    color: ${colors.primary};
  }
`
