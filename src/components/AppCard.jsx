import { Link } from "react-router-dom";
import icon from '../assets/icon-ratings.png'
import download from '../assets/icon-downloads.png'

export default function AppCard({ app }) {
  return (
    <Link  to={`/apps/${app.id}`}   className="border rounded-lg p-4 hover:shadow-lg transition flex flex-col">
      <img  src={app.image}   alt={app.title}  className="w-full h-40 object-contain bg-gray-50 rounded-md mb-4 p-4 "/>

      <h3 className=" text-lg font-semibold">{app.title}</h3>
      <p className="text-gray-500 text-sm mb-2">Developed By {app.companyName}</p>

     <div className="flex justify-between">
         <div className="mt-auto text-sm text-gray-600 py-1 px-1 bg-green-200 rounded-md flex gap-1 items-center">
            <img className="h-4 w-4" src={download} alt="" />
        Downloads: {app.downloads.toLocaleString()}
      </div>

      <div className="flex items-center space-x-1 bg-amber-100 rounded-md p-1">
        <img className="h-4 w-4" src={icon} alt="" /> 
        <p className="text-sm font-medium">{app.ratingAvg}</p>
      </div>
     </div>
     
    </Link>
  );
}
