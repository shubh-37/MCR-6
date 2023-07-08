import { useState } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Review from "../Components/ReviewModal";
import { menuContext } from "../MenuContextProvider";
import "../css/resto.css";

export default function RestoDetail() {
  const { restoId } = useParams();
  const { restoData } = useContext(menuContext);
  const restaurent = restoData.find((item) => item.id == restoId);
  const [isOpen, setIsOpen] = useState(false);
  const [review, setReview] = useState({});
  function addReview(e) {
    setReview({
      ...review,
      id: Math.floor(Math.random() * 1000 + 1),
      [e.target.name]: e.target.value,
    });
  }
  function saveReview() {
    restaurent.ratings.push(review);
    setIsOpen(false);
  }
  return (
    <div style={{ margin: "5rem" }}>
      <Link to="/">
        <span className="fa fa-arrow-left"></span>
      </Link>
      <div className="header">
        <div>
          <h1>{restaurent.name}</h1>
          <p>{restaurent.description}</p>
          <ul style={{ display: "flex" }}>
            {restaurent.menu.map((item) => (
              <li key={item.id} style={{ display: "inline" }}>
                <p>{item.name}, </p>
              </li>
            ))}
          </ul>
          <p>{restaurent.address}</p>
          <p>Average rating: {restaurent.averageRating}</p>
        </div>
        <div>
          <button onClick={() => setIsOpen(true)} className="cuisine-btn">
            Add review
          </button>
        </div>
      </div>

      <h2>Reviews</h2>
      <ul>
        {restaurent.ratings.map((item) => (
          <li key={item.id}>
            <div className="header">
              <span>
                <div>
                  <img src={item.pp} alt="" className="img-pp" />
                </div>
                <h3>{item.revName}</h3>
              </span>

              <div className="rating">
                {item.rating}
                <span className="fa fa-star"></span>
              </div>
            </div>

            <p>{item.comment}</p>
          </li>
        ))}
      </ul>
      {isOpen && (
        <Review
          closeModal={setIsOpen}
          addReview={addReview}
          saveReview={saveReview}
        />
      )}
    </div>
  );
}
