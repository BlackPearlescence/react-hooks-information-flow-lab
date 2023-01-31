// eslint-disable-next-line
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header.js";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div>
      <Header onChangeMode={onDarkModeClick} appDark={"App " + (isDarkMode ? "dark" : "light")} isDark={isDarkMode ? "Dark Mode" : "Light Mode"}> 
        <ShoppingList items={itemData} />
      </Header>
    </div>
  );
}

export default App;
