import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useDarkModeToggle } from "./useDarkModeToggle";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    transition: background-color 0.3s, color 0.3s;
  }

  .dark-mode {
    background-color: #333;
    color: grey;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 5vh;
`;

const ToggleContainer = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  user-select: none;
`;

const ToggleInput = styled.input`
  display: none;
`;

const ToggleSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 20px;
  width: 40px; /* Adjust the width as needed */
  transition: background-color 0.3s;
`;

const ToggleCircle = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s;
  transform: ${(props: { checked: any }) =>
    props.checked ? "translateX(24px)" : "translateX(0)"};
`;

const ToggleText = styled.span`
  margin-left: 50px; /* Adjust the margin as needed */
  font-size: 16px;
  color: ${(props: { checked: any }) => (props.checked ? "#333" : "#ccc")};
  transition: color 0.3s;
`;

const ModeComponent: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeToggle();

  return (
    <Container>
      <GlobalStyle />
      <ToggleContainer>
        <ToggleInput
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleDarkMode}
        />
        <ToggleSlider>
          <ToggleCircle checked={isDarkMode} />
        </ToggleSlider>
        <ToggleText checked={isDarkMode}>
          Toggle {isDarkMode ? "Light" : "Dark"} Mode - useDebugValue
        </ToggleText>
      </ToggleContainer>
    </Container>
  );
};

export default ModeComponent;
