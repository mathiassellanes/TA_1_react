import { useContext } from "react";
import { LanguageContext, ThemeContext } from "../App";

const ChangeUserTheme = () => {
  const { isLight, toggleTheme } = useContext(ThemeContext);
  const { language, setLanguage } = useContext(LanguageContext)

  const translations = {
    changeTo: {
      'en': 'Change to',
      'es': 'Cambiar a'
    },
    theme: {
      'en': 'theme',
      'es': 'tema'
    }
  }

  return (
    <>
      <button className="change-theme" onClick={toggleTheme}>
        {translations.changeTo[language]} {isLight ? 'dark' : 'light'} {translations.theme[language]}
      </button>
      <select className="change-theme" value={language} onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </>
  );
}

export default ChangeUserTheme;
