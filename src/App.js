import "./App.css";
import ClockPage from "./components/ClockPage";
import GeoLocation from "./components/GeoLocation";
import { MoreLess } from "./components/styles/MoreLess";
import { Theme } from "./components/styles/Theme";
import { ThemeProvider } from "styled-components";
import {
  GlobalStyles,
  morningTheme,
  nightTheme,
} from "./components/styles/GlobalStyles";
import BackgroudChange from "./components/BackgroudChange";

function App() {
  const [buttonPress, toggleButton] = MoreLess();
  const [theme, toggleTheme] = Theme();
  const themeMode = theme === "morning" ? morningTheme : nightTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyles />
        <BackgroudChange theme={theme} toggleTheme={toggleTheme} />
        <ClockPage />
        <GeoLocation buttonPress={buttonPress} toggleButton={toggleButton} />
      </div>
    </ThemeProvider>
  );
}

export default App;
