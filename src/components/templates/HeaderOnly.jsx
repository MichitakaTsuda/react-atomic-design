import { Header } from "../atoms/layout/Header";
import styled from "styled-components";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <header>
      <Header />
      {children}
    </header>
  );
};
