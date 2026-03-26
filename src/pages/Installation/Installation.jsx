import { useEffect, useState } from "react";
import { MdInstallDesktop } from "react-icons/md";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";
import AppNotFound from "../../components/AppNotFound/AppNotFound";

import {
  getStoredApp,
  removeFromLocalStorage,
} from "../../utility/localStorage";

const Installation = () => {
  const appsData = useLoaderData();
  const [installAppList, setInstallAppList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const installedAppData = getStoredApp();
    const convertedStoredApp = installedAppData.map((id) => parseInt(id));
    // console.log(convertedStoredApp);
    const myInstalledApp = appsData.filter((app) =>
      convertedStoredApp.includes(app.id),
    );
    setInstallAppList(myInstalledApp);
  }, [appsData]);
  const convertDownloads = (str) => {
    const num = parseFloat(str);

    if (str.includes("M")) return num * 1_000_000;
    if (str.includes("K")) return num * 1_000;

    return num;
  };

  // console.log(installAppList);

  const handleSortByPage = (type) => {
    setSort(type);

    if (type === "lowHigh") {
      const sortedByPage = [...installAppList].sort(
        (a, b) => convertDownloads(a.downloads) - convertDownloads(b.downloads),
      );
      setInstallAppList(sortedByPage);
    }

    if (type === "highLow") {
      const sortedByPage = [...installAppList].sort(
        (a, b) => convertDownloads(b.downloads) - convertDownloads(a.downloads),
      );
      setInstallAppList(sortedByPage);
    }
  };

  const handleUninstall = (id) => {
    // console.log(id);
    removeFromLocalStorage(id);

    const storedIds = getStoredApp();

    const updatedApps = appsData.filter((app) =>
      storedIds.includes(app.id.toString()),
    );

    toast.success("App Uninstalled Successfully", {
      position: "bottom-right",
      autoClose: 2000,
    });
    setInstallAppList(updatedApps);
  };

  return (
    <div className="py-16 min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <div className="">
          <div className="lg:w-lg mx-auto mb-10">
            <h3 className="flex items-center justify-center gap-3 text-4xl font-bold">
              Your Installed Apps <MdInstallDesktop />
            </h3>
            <p className="text-center py-2 ">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center my-5">
            <div>
              <h3 className="text-lg underline font-medium">
                ({installAppList.length}) App Founds
              </h3>
            </div>
            <div className="">
              <select defaultValue="Sort By" className="select select-neutral">
                <option disabled={false}>
                  Sort By Size : {sort ? sort : ""}
                </option>
                <option onClick={() => handleSortByPage("lowHigh")}>
                  Low To High
                </option>
                <option onClick={() => handleSortByPage("highLow")}>
                  High To Low
                </option>
              </select>
            </div>
          </div>
        </div>
        {installAppList.length > 0 ? (
          <div className=" grid grid-cols-1 gap-5 ">
            {installAppList.map((app) => (
              <div
                key={app.id}
                className="flex items-center gap-3 p-3 rounded-xl bg-white shadow-sm transition-all duration-200"
              >
                <a
                  className="w-14 h-14 shrink-0"
                  href="/apps/3"
                  data-discover="true"
                >
                  <img
                    alt="FLIP - Focus Timer for Study"
                    className="w-full h-full object-cover rounded-xl"
                    src={app.image}
                  />
                </a>
                <div className="flex-1">
                  <a href="/apps/3" data-discover="true">
                    <p className="font-medium text-sm line-clamp-1">
                      {app.title}
                    </p>
                  </a>
                  <div className="flex items-center gap-3 text-xs mt-1">
                    <span className="flex items-center gap-1 text-success">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        className="inline-block"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          strokeWidth="2"
                          d="M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,12 L12,19 L19,12"
                        ></path>
                      </svg>{" "}
                      {app.downloads}
                    </span>
                    <span className="flex items-center gap-1 text-secondary">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 576 512"
                        className="inline-block"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                      </svg>{" "}
                      {app.rating}
                    </span>
                    <span className="text-xs text-gray-500">{app.size} MB</span>
                  </div>
                </div>
                <button
                  onClick={() => handleUninstall(app.id)}
                  className="btn btn-success text-white"
                >
                  Uninstall
                </button>
              </div>
            ))}
          </div>
        ) : (
          <AppNotFound />
        )}
      </div>
    </div>
  );
};

export default Installation;
