import { useEffect, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { useLoaderData } from "react-router";
import { getStoredApp } from "../../utility/localStorage";

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

  console.log(installAppList);

  const handleSortByPage = (type) => {
    setSort(type);

    if (type === "lowHigh") {
      const sortedByPage = [...installAppList].sort(
        (a, b) => a.rating - b.rating,
      );
      setInstallAppList(sortedByPage);
    }

    if (type === "highLow") {
      const sortedByRating = [...installAppList].sort(
        (a, b) => b.rating - a.rating,
      );
      setInstallAppList(sortedByRating);
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="">
          <div className="lg:w-lg mx-auto mb-10">
            <h3 className="flex items-center justify-center gap-3 text-4xl font-bold">
              Your Installed Apps <FaArrowTrendUp />
            </h3>
            <p className="text-center py-2 ">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-between items-center my-5">
            <div>
              <h3>({installAppList.length}) App Founds</h3>
            </div>
            <div className="">
              <select defaultValue="Sort By" className="select select-neutral">
                <option disabled={true}>Sort By Size : {sort ? sort : ""}</option>
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
      </div>
    </div>
  );
};

export default Installation;
