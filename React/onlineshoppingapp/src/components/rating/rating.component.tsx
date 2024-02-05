import React, { Component } from "react";

type RatingProps = {
  noofstars: number;
};

export default class Rating extends Component<RatingProps> {
  render() {
    let ratings = [];

    for (let index = 0; index < this.props.noofstars; index++) {
      ratings.push(
        <span style={{ color: "orange" }}>
          <i className="fa-solid fa-star"></i>
        </span>,
      );
    }
    return <div>{ratings}</div>;
  }
}
