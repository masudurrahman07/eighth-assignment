import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/LoadingSpinner";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import download from "../assets/icon-downloads.png";
import icon from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import appError from '../assets/App-Error.png'

function AppDetails() {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id === Number(id));
        setApp(found);
        setLoading(false);

        const installedApps =
          JSON.parse(localStorage.getItem("installedApps")) || [];
        if (installedApps.some((x) => x.id === Number(id))) {
          setInstalled(true);
        }
      });
  }, [id]);

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (!installedApps.some((x) => x.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);
      toast.success("App Installed Successfully!");
    }
  };

  if (loading) return <LoadingSpinner />;
  if (!app) return <div className="flex flex-col items-center mt-10">
    <img  src={appError} alt="" />
    <h1 className="text-center text-gray-600 text-3xl font-semibold mt-5">OOPS! APP NOT FOUND</h1>
    <p className="text-gray-400">The App you are requesting is not found on our system.  please try another apps</p>
  </div>

  return (
    <div className="my-10 w-11/12 mx-auto">

      <div className="grid md:grid-cols-2 gap-6 items-center bg-gray-100 rounded-md p-4">
        <img src={app.image} alt={app.title} className="w-full h-60 object-contain rounded"/>
        <div>
          <h2 className="text-3xl font-bold mb-2">{app.title}</h2>
          <p className="text-gray-600 mb-2">{app.companyName}</p>
          <div className="flex items-center gap-1 bg-amber-100 rounded-md p-1 w-fit">
            <img className="h-4 w-4" src={icon} alt="" />
            <p className="text-sm font-medium">{app.ratingAvg}</p>
          </div>

          <div className="flex items-center bg-purple-100 gap-1 rounded-md w-fit p-2 mt-2">
            <img src={review} alt="" />
            <p>Reviews : {app.reviews}</p>
          </div>

          <div className="mt-2 text-sm text-gray-600 py-1 px-1 bg-green-200 rounded-md inline-flex gap-1 items-center w-fit">
            <img className="h-4 w-4" src={download} alt="" />
            Downloads: {app.downloads.toLocaleString()}
          </div>

          <button onClick={handleInstall} disabled={installed} className={`block w-fit mt-3 px-4 py-2 rounded text-white ${ installed ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600" }`}
          >
            {installed ? "Installed" : `Install Now(${app.size}MB)`}

          </button>
        </div>
      </div>

      <div className="my-10">
        <h3 className="text-xl font-semibold mb-4">Ratings</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={app.ratings}
              layout="vertical" 
              margin={{ top: 10, right: 30, left: 40, bottom: 10 }} >
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={70} />
              <Bar
                dataKey="count"
                fill="#f97316"
                barSize={20}
                radius={[0, 10, 10, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold mb-2">Description</h3>
        <p className="text-gray-700">{app.description}</p>
      </div>
    </div>
  );
}

export default AppDetails;
