import Banner from "../components/Banner";
import StateCards from "../components/StateCards";
import AppCard from "../components/AppCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";



export default function Home() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data.slice(0, 8));
        setLoading(false);
      });}, []);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <Banner />
      <StateCards />
      <section className="p-6">
        
        {/* trending apps */}

        <h2 className="text-4xl font-bold text-center mb-4">Trending Apps</h2>
        <p className="mb-6 text-center text-gray-500 font-medium">Explore All Trending Apps on the Market developed by us</p>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
           ))}
        </div>

        <div className="text-center mt-6">
          <Link to="/apps"   className="bg-blue-600 text-white px-7 py-3 rounded-md" style={{ background: "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)", borderRadius: "4px", }}>Show All</Link>
        </div>
      </section>
    </>
  );
}
