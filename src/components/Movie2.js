import React, { Component } from "react";
import { ReviewForm } from "./ReviewForm";
import ReviewList from "./ReviewList";
// import Review from "./Review";

class Movie2 extends Component {
  render() {
    return (
      <div>
        <img
          alt="someImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyrTCIq5d6oMhKzY0GuzZzUJMjoSNEtqIStw&usqp=CAU"
        ></img>
        <h3>Dumb & Dumber</h3>
        <h4>Synopsis:</h4>
        "Classic"
        <span>
          <ReviewForm />
        </span>
        <div id="reviewList">
          <ReviewList />
        </div>
      </div>
    );
  }
}

export default Movie2;
