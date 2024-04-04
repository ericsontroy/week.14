//Using what you've learned this week, create a page of an application that enables users to vote and leave reviews on movies.
//All data necessary for this assignment, including Movies and Reviews, can be pulled from an API or you can create the Movies and their Reviews yourself.
//Your application must include the following components:
//MovieList: a container for all the Movie components and their data.
//Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
//Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
//ReviewList: a container inside of a Movie that houses Review components.
//Review: A text review a user can leave on a movie.
//ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.
import React, { Component } from "react";

import { ReviewForm } from "./ReviewForm";
import ReviewList from "./ReviewList";

// import Review from "./Review";
// import Stars from "./Stars";

const testReviews = [
  {
    name: "",
    comment: "best review ever",
    date: "1/2/24",
    rating: 5,
  },
  {
    name: "testreviewname2",
    comment: "best review ever2",
    date: "1/2/2424",
    rating: 3,
  },
];

class Movie extends Component {
  //create a state here...
  constructor(props) {
    super(props);
    this.setState = [
      {
        title: "Toy Story",
        Image:
          "https://i5.walmartimages.com/seo/The-Toy-Story-Logo-Cartoon-Character-Customized-Name-Wall-Decal-Custom-Vinyl-Art-Personalized-Baby-Girl-Boy-Kid-Bedroom-Room-Decor-Stickers-Decoratio_f7b77954-8185-4c8d-80cf-e55949f2b22c_1.c5b03b395217466bb69147c25c752381.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
        synopsis: "Instant classic",
        year: "1996",
      },
    ];
  }

  render() {
    return (
      <div>
        <img
          alt="walmart"
          src="https://i5.walmartimages.com/seo/The-Toy-Story-Logo-Cartoon-Character-Customized-Name-Wall-Decal-Custom-Vinyl-Art-Personalized-Baby-Girl-Boy-Kid-Bedroom-Room-Decor-Stickers-Decoratio_f7b77954-8185-4c8d-80cf-e55949f2b22c_1.c5b03b395217466bb69147c25c752381.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
        ></img>
        <h3>Toy Story</h3>
        <h4>Synopsis:</h4>
        "See toys come to life"
        <span>
          {/* Pass the reviews state into the reviewForm, so it can update */}
          <ReviewForm setReviewsState={testReviews} />
        </span>
        <div id="reviewList">
          {/* pass the reviews state down here to iterate over it, not the test reviews */}
          <ReviewList reviews={testReviews} />
        </div>
      </div>
    );
  }
}

export default Movie;
