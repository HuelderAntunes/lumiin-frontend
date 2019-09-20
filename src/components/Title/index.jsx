import  React from "react";
import { BottomBorder } from "./styles";

const Title  = props => {
  return (
    <BottomBorder>
      <span>{props.children}</span>
    </BottomBorder>
  );
};

export default Title;
