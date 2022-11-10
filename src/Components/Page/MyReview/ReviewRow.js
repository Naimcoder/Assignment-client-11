import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UseContext";

const ReviewRow = ({allreview,handleDeleted}) => {
    const {userName,_id,time,servicesName,review}=allreview;
    const {user}=useContext(AuthContext)

  return (
    <div className="py-5 bg-orange-100 px-20 w-full mx-auto">
      <tr className="mx-auto bg-slate-300">
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{userName}</div>
              <div className="text-sm opacity-50">{time}</div>
            </div>
          </div>
        </td>
        <td>
          {servicesName}
          <br/>
          <span className="badge badge-ghost badge-sm">{review}</span>
        </td>
        <th>
          <button onClick={()=>handleDeleted(_id)} className="btn btn-xs bg-blue-600 text-white">DELETE</button>
        </th>
        <th>
          <Link to={`/update/${_id}`}>
          <button  className="btn btn-xs bg-blue-600 text-white">UPDATE</button>
          </Link>
        </th>
      </tr>
    </div>
  );
};
export default ReviewRow;
