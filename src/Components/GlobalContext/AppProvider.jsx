import { useEffect, useState } from "react";
import { AppContext } from "./AppContext";

export function AppProvider({ children }) {
  // Looking for previously installed Apps
  const [installedApps, setInstalledApps] = useState(() => {
    const savedApps = localStorage.getItem("installedApps");
    return savedApps ? JSON.parse(savedApps) : [];
  });

  // Automatically Updating the Local Storage
  useEffect(() => {
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
  }, [installedApps]);

  // Install App hadler
  const installApp = (appObject) => {
    // Safety check (app already installed or not)
    const isAlreadyInsalled = installedApps.some(
      (item) => item.id === appObject.id,
    );
    if (isAlreadyInsalled) {
      return false;
    }
    // Appednding the app
    setInstalledApps([...installedApps, appObject]);
    return true;
  };
  //   Uninstall App
  const unInstallApp = (appId) => {
    setInstalledApps(installedApps.filter((item) => item.id !== appId));
  };
  return (
    <AppContext.Provider value={{ installApp, unInstallApp, installedApps }}>
      {children}
    </AppContext.Provider>
  );
}
