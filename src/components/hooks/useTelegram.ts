import type { WebApp } from "telegram-web-app";

const tg: WebApp = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();
  };

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    onToggleButton,
    onClose,
    tg,
    user: tg.initDataUnsafe?.user,
  };
}
