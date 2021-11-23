import React from "react";
import "./App.css";
import Todo from "./components/Todo";
import DarkModeToggle from "./components/DarkModeToggle";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import useDarkMode from "../src/hooks/useDarkMode";

const GlobalStyle = createGlobalStyle`
  body {
    background-image: ${(props) => props.theme.DesktopBGImg};
    background-repeat: no-repeat;
    background-size: 100% 300px;
    background-color: ${(props) => props.theme.BasicBGColor};
    font-family: var(--Font-Family);
    font-size: var(--Font-Size);
  }
`;
const light = {
  BasicBGColor: "hsl(236, 33%, 92%)",
  TodoBGColor: "hsl(0, 0%, 98%)",
  TodoFontColor: "hsl(235, 19%, 35%)",
  TodoCompleteFontColor: "hsl(236, 9%, 61%)",
  TodoplaceholderFontColor: "hsl(236, 9%, 61%)",
  SeparationlineColor:"hsl(236, 33%, 92%)",
  DesktopBGImg: "var(--bg-desktop-light)",
  MobileBGImg: "var(--bg-mobile-light)",
};
const dark = {
  BasicBGColor: "hsl(235, 21%, 11%)",
  TodoBGColor: "hsl(235, 24%, 19%)",
  TodoFontColor: "hsl(234, 39%, 85%)",
  TodoCompleteFontColor: "hsl(234, 11%, 52%)",
  TodoplaceholderFontColor: "hsl(236, 9%, 61%)",
  SeparationlineColor:"hsl(233, 14%, 35%)",
  DesktopBGImg: "var(--bg-desktop-dark)",
  MobileBGImg: "var(--bg-mobile-dark)",
};

const Container = styled.div`
  
  display: flex;
  justify-content: center;
  align-items: center;
  .app {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: min(90%, 540px);
    margin-top: 80px;
    margin-bottom: 80px;
  }
  .row {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 54px;
  }
  .title {
    color: #fff;
    text-transform: uppercase;
    font-weight: var(--Font-Bold);
    letter-spacing: 14px;
  }

  .tip {
    margin-top: 100px;
    color: var(--Dark-Grayish-Blue);
    font-size: var(--Small-Font-Size);
  }
  @media (max-width: 768px) {
    body {
      background-image: ${(props) => props.theme.MobileBGImg};
      background-size: 100% 30%;
    }
    .app {
      margin-top: 60px;
      margin-bottom: 35px;
    }
    .row {
      margin-bottom: 35px;
    }
  }
  @media (max-width: 500px) {
    .app {
      width: 90%;
    }
    
  }
`;
const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <ThemeProvider theme={darkMode?dark:light}>
      <React.Fragment>
        <GlobalStyle />
        <Container>
          <div className="app">
            <div className="row">
              <h1 className="title">todo</h1>
              <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode}/>
            </div>
            <Todo />
            <p className="tip">Drag and drop to reorder list</p>
          </div>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
