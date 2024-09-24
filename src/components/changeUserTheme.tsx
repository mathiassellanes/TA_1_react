import { useContext } from "react";
import { ThemeContext } from "../App";

const ChangeUserTheme = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="change-theme" onClick={toggleTheme}>
      Change to {isLight ? 'dark' : 'light'} theme
    </button>
  );
}

export default ChangeUserTheme;
