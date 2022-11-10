import { useEffect, useState } from "react";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
  const [allreview, setReview] = useState([]);
 const [deleted,setDeleted]=useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/reviews`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReview(data);
      });
  }, []);

  // const handleDeleted=(id)=>{
  //     // const agree=window.confirm(`are you sure delete`)
  //     // if (agree) {
  //     //   fetch(`http://localhost:5000/reviews/${id}`,{
  //     //     method:"DELETE"
  //     //   })
  //     //   .then(res=>res.json())
  //     //   .then(data=>{
  //     //     console.log(data);
  //     //     if (data.deletedCount) {
  //     //       const remenaing = deleted.filter(usr =>usr._id !== id);
  //     //       setDeleted(remenaing);
  //     //     }
  //     //   })
  //     // }
  // }

  const handaleDelete = (id) => {
    const proceed = window.confirm("Sure Want to Delete?")
    if (proceed) {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .thne(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                  alert('deleted')
                            const remenaing = deleted.filter(usr =>usr._id !== id);
                            setDeleted(remenaing);
                        }
            })
    }
  }

  return (
    <div>
      <div className="overflow-x-auto mx-auto w-6/12 py-5">
        <table className="table w-full">
          <tbody>
            {allreview.map((review) => (
              <ReviewRow key={review._id} allreview={review}handleDeleted={handaleDelete}></ReviewRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
