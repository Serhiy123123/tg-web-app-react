// import { useEffect } from "react";
import { useEffect } from "react";
import { useTelegram } from "./components/hooks/useTelegram";
import "./App.css";

const { tg, onToggleButton }: any = useTelegram();

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
