import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UseContext";

const ReviewRow = ({allreview}) => {
    const {userName,time,servicesName,review}=allreview;
    const {user}=useContext(AuthContext)
  return (
    <div className="py-5 bg-orange-100 px-20">
     <tr>
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
    <br />
    <span className="badge badge-ghost badge-sm">
     {review}
    </span>
  </td>
  <th>
    <button className="btn bg-blue-500">UPDATE</button>
  </th>
  <th>
    <button className="btn bg-blue-700">DELETE</button>
  </th>
</tr>
    </div>
  );
};
export default ReviewRow;
