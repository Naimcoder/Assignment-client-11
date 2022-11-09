import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';
import { AuthContext } from '../../../Context/UseContext';

const MyReview = () => {
    const {user}=useContext(AuthContext)
    const [reviewEmail,setReviewEmail]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`,{
          headers:{
            authorization: `${localStorage.getItem('reviewToken')}`
          }
        })
        .then(res=>{
          if (res.status=== 401 || res.status === 403) {
            toast.warning('unauthozried Access')
          }
          res.json()})
        .then(data=>{
            setReviewEmail(data)
        })
    },[user?.email])
    return (
        <div>
            My All Review
            {reviewEmail.map(allreview=><div className=" shadow-xl my-4 mx-auto px-3 py-5 border lg:w-6/12 rounded" key={allreview._id}>
            <div className="flex items-center">
       <div>
         {user?.email ? (
           <>
             <img
               className="rounded-full w-16"
               src={user?.photoURL}
               alt=""
             />
           </>
         ) : (
           <>
             <span>
               <FaUser></FaUser>
             </span>
           </>
         )}
       </div>
       <div className="mt-5 ml-3">
         <h2>{allreview.userName}</h2>
         <h3>{allreview.userEmail}</h3>
         <h4>{allreview.servicesName}</h4>
         <h3>{allreview.review}</h3>
       </div>
     </div>
            </div>)
            }
        </div>
    );
};

 

export default MyReview;