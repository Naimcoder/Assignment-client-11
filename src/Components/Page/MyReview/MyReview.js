import { useEffect, useState } from "react";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
  const [allreview, setReview] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReview(data);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <tbody>
            {allreview.map((review) => (
              <ReviewRow key={review._id} allreview={review}></ReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
