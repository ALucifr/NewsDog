import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    let imageURL =
      "https://cdn.24.co.za/files/Cms/General/d/10743/97d776dc91734e98906c0e1b7f3b1afa.jpg";
    return (
      <>
        <div className="container my-3">
          <h2>NewsDog - Top Headlines</h2>
          <div className="row">
            <div className="col-md-3">
              <NewsItem imageURL={imageURL} />
            </div>
            <div className="col-md-3">
              <NewsItem />
            </div>
            <div className="col-md-3">
              <NewsItem />
            </div>
            <div className="col-md-3">
              <NewsItem />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <NewsItem />
            </div>
            <div className="col-md-3">
              <NewsItem />
            </div>
            <div className="col-md-3">
              <NewsItem />
            </div>
            <div className="col-md-3">
              <NewsItem />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
