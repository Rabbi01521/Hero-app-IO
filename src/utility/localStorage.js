import { toast } from "react-toastify";

const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("app");

  if (storedAppSTR) {
    const storedAppData = JSON.parse(storedAppSTR);
    return storedAppData;
  } else {
    return [];
  }
};

const saveAppToLocalStorage = (app) => {
  const appStringified = JSON.stringify(app);
  localStorage.setItem("app", appStringified);
};

const addToStoredDB = (id) => {
  const storedAppData = getStoredApp();

  if (storedAppData.includes(id)) {
    toast("This App Already Installed");
    return;
  } else {
    const newAppData = [...storedAppData, id];
    saveAppToLocalStorage(newAppData);
  }
};


const removeFromLocalStorage = id =>{
    const StoredApps = getStoredApp();
    const reaminingApps = StoredApps.filter(storedApp => storedApp !==id);
    saveAppToLocalStorage(reaminingApps);
}

export { addToStoredDB, getStoredApp, removeFromLocalStorage };

