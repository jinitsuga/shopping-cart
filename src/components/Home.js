import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <main>
      <section className="main-section">
        <div className="main-text-container">
          <p className="main-text">
            Come join in on the fun, with randomly chosen memes from all eras,
            old and new!
          </p>
        </div>
        <img
          className="main-img"
          alt="butterfly meme"
          src="https://assets3.thrillist.com/v1/image/2762016/1584x1056/crop;webp=auto;jpeg_quality=60;progressive.jpg"
        ></img>
      </section>
    </main>
  );
}
