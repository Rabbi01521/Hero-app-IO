import { useLoaderData, useParams } from "react-router";

const AppDetails = () => {
  const appsData = useLoaderData();
  const { id } = useParams();

  const appId = parseInt(id);
  const appDetails = appsData.find((app) => app.id === appId);

  console.log(id, appsData);
  // console.log(appsData)
  return (
    <div className="py-16">
      {appDetails && (
        <div className="max-w-[1200px] mx-auto">
          <div className="card lg:card-side p-4">
            <figure>
              <img
                src={appDetails.image}
                className="lg:h-full lg:w-full lg:object-cover rounded-2xl"
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <div>
                <h2 className="card-title">{appDetails.title}</h2>
                <p className="">Developed By: {appDetails.companyName}</p>
              </div>
              <div>
                <div className="stats">
                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-8 w-8 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-title">Downloads</div>
                    <div className="stat-value">31K</div>
                    <div className="stat-desc">Jan 1st - Feb 1st</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-8 w-8 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-title">New Users</div>
                    <div className="stat-value">4,200</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                  </div>

                  <div className="stat">
                    <div className="stat-figure text-secondary">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-8 w-8 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        ></path>
                      </svg>
                    </div>
                    <div className="stat-title">New Registers</div>
                    <div className="stat-value">1,200</div>
                    <div className="stat-desc">↘︎ 90 (14%)</div>
                  </div>
                </div>
              </div>
              <div className="card-actions justify-start mt-5">
                <button className="btn btn-primary">
                  Install Now ( {appDetails.size}MB )
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppDetails;
