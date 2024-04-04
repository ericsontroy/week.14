//Your application must include the following components:
//MovieList: a container for all the Movie components and their data.
//Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
//Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
//ReviewList: a container inside of a Movie that houses Review components.
//Review: A text review a user can leave on a movie.
//ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.
import React, { useState } from "react";
// import Review from "./Review";
import Stars from "./Stars";

export const ReviewForm = (props) => {
  console.log("ReviewForm Props:", props);
  const [reviewer, setReviewer] = useState([""]);
  const [review, setReview] = useState([""]);

  const onReviewerChange = (e) => {
    // console.clear();
    console.log("Changing the reviewer...", e);
    setReviewer(e);
  };

  const onReviewChange = (e) => {
    // console.clear();
    console.log("Changing the review...", e);
    setReview(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(
      "ReviewForm onSubmit:",
      "setReviewer data:",
      reviewer,
      "setReview data:",
      review
    );

    //send the review data to it's state
    props.setReviewsState.push({
      name: reviewer,
      comment: review,
    });

    //Clears out the form
    if (reviewer && review) {
      setReviewer("");
      setReview("");
      // document.getElementById(({ setReviewer, setReview }.value = Text));
      // console.log({ setReview, setReviewer });
    } else {
      console.log("error");
    }
  };

  return (
    <div>
      <form className="form-control">
        <h3>Leave a review</h3>
        <label htmlFor="Name">Your Name = </label>
        <input
          type="text"
          id="Name"
          name="Name"
          placeholder="Your Name"
          value={reviewer}
          onChange={(e) => onReviewerChange(e.target.value)}
          autoComplete="on"
        ></input>{" "}
        <br></br>
        <label htmlFor="review">Review this Movie here: </label>
        <input
          type="text"
          id="review"
          name="review"
          placeholder="Leave a comment"
          value={review}
          onChange={(e) => onReviewChange(e.target.value)}
          autoComplete="on"
        ></input>
        <br></br>
        <span>
          <input type="date" name="date"></input>
        </span>
        <Stars />
        <button type="submit" onClick={onSubmit} value="Send it">
          Submit
        </button>
      </form>
    </div>
  );
};
