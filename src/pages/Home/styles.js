import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    overflow: hidden;
  }

  overflow: hidden;

  .ant-carousel .slick-slide h3 {
    color: ${colors.primary};
  }
`;
