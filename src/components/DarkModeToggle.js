import React from "react";
import styled from 'styled-components'
import { Sun, Moon } from 'react-feather';
const DarkModeToggle = ({darkMode,setDarkMode}) => {
    return <Toggle onClick={() => { setDarkMode(!darkMode) }}>
        {darkMode ? <Moon color={"white"} size="28px"/> : <Sun color={"white"} size="28px"/>}
    </Toggle>
}

const Toggle = styled.button`
    border: none;
    background-color: transparent;
`;

export default DarkModeToggle