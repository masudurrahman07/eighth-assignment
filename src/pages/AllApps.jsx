import { useEffect, useState } from "react";
import AppCard from "../components/AppCard";
import LoadingSpinner from "../components/LoadingSpinner";

export default function AllApps() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    fetch("/apps.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchLoading(true);

    setTimeout(() => {
      setSearchLoading(false);
    }, 400);
  };

  if (loading) return <LoadingSpinner />;

  const filtered = apps.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="p-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2">Our All Applications</h2>
        <p className="text-gray-600 mb-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col  md:items-center md:flex-row justify-between gap-4 mb-6 ">
        <span className="text-gray-700 font-semibold">
          ({filtered.length || 0}) Apps Found
        </span>
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={handleSearch}
          className="border rounded-md px-4 py-2 w-full md:w-64"
        />
      </div>

      {searchLoading ? (
        <div className="h-40 flex justify-center items-center ">
          <span className="loading loading-bars loading-md"></span>
        </div>) 
        : filtered.length === 0 ? (
        <p className="text-center text-gray-500 text-3xl font-semibold ">No App Found 😢 </p>) 
        : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )
      }
    </section>
  );
}
