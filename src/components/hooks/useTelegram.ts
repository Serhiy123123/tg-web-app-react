declare global {
  interface Window {
    Telegram: any; // или более точный тип, если он у вас есть
  }
}

const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    tg.close();

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
  };
}
