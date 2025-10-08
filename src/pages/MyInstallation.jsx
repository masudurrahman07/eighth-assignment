import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function MyInstallation() {
  const [sortOrder, setSortOrder] = useState("default");
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(data);
  }, []);

  // uninstall
  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);

    localStorage.setItem("installedApps", JSON.stringify(updated));
    toast.success("App Uninstalled Successfully!");
  };

  //   sorting logic here
  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...installedApps];
    if (order === "high-low") sorted.sort((a, b) => b.downloads - a.downloads);
    if (order === "low-high") sorted.sort((a, b) => a.downloads - b.downloads);
    setInstalledApps(sorted);
  };

  if (installedApps.length === 0)
    return (
      <p className="text-center text-gray-600 mt-10 text-2xl font-normal">
        No apps installed yet.
      </p>
    );

  return (
    <div className="my-10 w-11/12 mx-auto">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2">Your Installed Apps</h2>
        <p className="text-gray-600 mb-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <h2 className="font-semibold text-1xl ">
          {" "}
          ({installedApps.length || 0}) Apps Found
        </h2>
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="border rounded p-2"
        >
          <option value="default">Sort by Downloads</option>
          <option value="high-low">High - Low</option>
          <option value="low-high">Low - High</option>
        </select>
      </div>

      <div className="flex flex-col gap-5">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between border  rounded-lg p-4  hover:shadow-md bg-white"
          >
            <div className="flex items-center gap-4">
              <img
                src={app.image}
                alt={app.title}
                className="w-16 h-16 object-contain rounded-md bg-gray-200"
              />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="font-semibold text-base sm:text-lg text-center sm:text-left">{app.title}</h3>

                <div className="flex flex-wrap items-center justify-center sm:justify-start text-sm gap-3  text-gray-600 mt-1">
                  <span className="flex items-center gap-2 text-green-600">
                    <i className="fa-solid fa-download"></i> {app.downloads}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-500">
                    <i className="fa-solid fa-star"></i> {app.ratingAvg}
                  </span>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            {/* uninstall button */}
            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-green-400 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyInstallation;
