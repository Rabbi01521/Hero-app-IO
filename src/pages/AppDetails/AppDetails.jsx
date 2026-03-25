import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdReviews } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { addToStoredDB, getStoredApp } from "../../utility/localStorage";

const AppDetails = () => {
  const appsData = useLoaderData();
  const { id } = useParams();
  // const [apps, setApps] = useState([]);

  const appId = parseInt(id);
  const appDetails = appsData.find((app) => app.id === appId);

  const [installed, setInstalled] = useState(false);

  // ✅ check on page load / refresh
  useEffect(() => {
    const storedAppIds = getStoredApp();

    if (storedAppIds.includes(id)) {
      setInstalled(true);
    }
  }, [id]);

  // console.log(apps);

  const handleInstall = (id) => {
    if (installed) return; // prevent duplicate click

    setInstalled(true);
    toast(`Installing ${appDetails.title}...`);
    addToStoredDB(id);
  };

  return (
    <div className="py-16">
      {appDetails && (
        <div className="max-w-[1200px] mx-auto">
          <div className="card lg:card-side p-4 mb-10">
            <figure>
              <img
                src={appDetails.image}
                className="lg:h-full lg:w-full lg:object-cover rounded-2xl"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <div className="space-y-3 border-b-2 border-[#632ee3] pb-5">
                <h2 className="card-title text-[#632ee3] text-4xl my-4">
                  {appDetails.title}
                </h2>
                <p className="font-medium text-xl">
                  Developed By:{" "}
                  <span className="text-[#632ee3]">
                    {appDetails.companyName}
                  </span>
                </p>
              </div>
              <div className="">
                <div className="stats grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                  <div className="stat stats-horizontal">
                    <div className="stat-figure text-secondary">
                      <FiDownload className="text-4xl text-[#632ee3]" />
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">{appDetails.downloads}</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <FaStar className="text-4xl text-[#632ee3]" />
                    </div>
                    <div className="stat-title">Avarage Ratings</div>
                    <div className="stat-value">{appDetails.rating}</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <MdReviews className="text-4xl text-[#632ee3]" />
                    </div>
                    <div className="stat-title">Total Reviews</div>
                    <div className="stat-value">{appDetails.reviews}</div>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-start mt-5">
                <button
                  onClick={() => handleInstall(id)}
                  disabled={installed}
                  className={`btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl 
    bg-[#632ee3] border-none hover:bg-[#632ee3]/90 text-white
    ${installed ? "opacity-60 cursor-not-allowed" : ""}
  `}
                >
                  {installed ? "Installed" : "Install Now"} ({appDetails.size}{" "}
                  MB)
                </button>
              </div>
            </div>
          </div>
          <BarChart
            layout="vertical"
            style={{
              width: "100%",
              maxHeight: "50vh",
              aspectRatio: 1.618,
            }}
            responsive
            data={[...appDetails.ratings].reverse()}
            margin={{ bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <Tooltip shared={true} wrapperStyle={{ backgroundColor: "#ccc" }} />
            <XAxis
              type="number"
              dataKey="count"
              height={50}
              stroke="#632ee3"
              label={{ value: "Count", position: "insideBottomRight" }}
            />
            <YAxis
              type="category"
              dataKey="name"
              width="auto"
              stroke="#632ee3"
              label={{
                value: "Rating",
                angle: -90,
                position: "insideTopLeft",
                textAnchor: "end",
              }}
            />
            <Bar dataKey="count" fill="#632ee3" barSize={30} />
          </BarChart>
          <div className="md:w-[90%] mx-auto">
            <h2 className="text-3xl font-bold text-[#632ee3] my-5">
              Description
            </h2>
            <p className="text-lg font-medium">{appDetails.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
