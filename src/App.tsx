import { useEffect } from "react";
import "./App.css";

declare global {
  interface Window {
    Telegram: any; // или более точный тип, если он у вас есть
  }
}
const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);
  const onClose = () => {
    tg.close;
  };

  return (
    <div className="App">
      App
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
