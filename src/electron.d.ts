declare interface Window {
  electronAPI: {
    minimize: () => void;
    maximize: () => void;
    close: () => void;
    getAppVersion: () => Promise<string>;
  };
}