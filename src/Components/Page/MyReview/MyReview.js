import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/UseContext";
import UseTitle from "../../Shares/UseTitle/UseTitle";
import ReviewRow from "./ReviewRow";



const MyReview = () => {
  UseTitle('My Review')
  const [allreview, setReview] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-review-server-one.vercel.app/reviews`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReview(data);
      });
  },[])
 




  const handaleDelete = (id) => {
    const proceed = window.confirm("Sure Want to Delete?");
    if (proceed) {
      fetch(`https://assignment-review-server-one.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted");
            const remenaing = allreview.filter((usr) => usr._id !== id);
            setReview(remenaing);
          }
        });
    }
  };

  return (
    <div>
      <div className="overflow-x-auto mx-auto w-6/12 py-5">
        <table className="table w-full">
          <tbody>
          {

            allreview.map(rv=><ReviewRow key={rv._id}allreview={rv} handleDeleted={handaleDelete}></ReviewRow>)
          }
          

{/* {  allreview.length >1 ?<div className=" min-h-screen"><p className='text-teal-300  text-center col-span-3 text-5xl md:text-6xl lg:text-8xl'>NO REVIEW ARE ADDED</p></div>:<>
              {allreview.map((review) => (
              <ReviewRow
                key={review._id}
                allreview={review}
                handleDeleted={handaleDelete}
              ></ReviewRow>
            ))}
              </>
            } */}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;

