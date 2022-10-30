import React, { Component } from "react";
class Navbar extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div className="all">
        <div className="container">
          <img className="share-svg" src="share.svg"></img>
          <div className="profile">
            <div>
              <img
                src="profile.jpg"
                className="profile-img"
                alt="KamisiPamilerin"
                width="15%"
                height="150px"
              ></img>
              <h3 className="profile-name">Kamisi Pamilerin</h3>
              {/* <h2 id="slack">@Pamilerin</h2> */}
            </div>
          </div>
          <div className="profile-links">
            <a
              href="https://mobile.twitter.com/Kemzy_17"
              target="_blank"
              className="link-btn"
              rel="noreferrer"
              id="twitter"
            >
              Twitter Link
            </a>
            {/* <br></br> <br></br> <br></br> */}
            <br></br>
            <a
              href="https://training.zuri.team/"
              target="_blank"
              className="link-btn"
              rel="noreferrer"
              id="btn_zuri"
            >
              Zuri Trainig
            </a>
            {/* <br></br> <br></br> <br></br> */}
            <br></br>
            <a
              className="link-btn"
              href="http://books.zuri.team"
              title="Find The best book for coding here"
              rel="noreferrer"
              id="books"
              target="_blank"
            >
              Zuri Books
            </a>
            {/* <br></br> <br></br> <br></br> */}
            <br></br>
            <a
              className="link-btn"
              href="https://books.zuri.team/python-for-beginners"
              title="get The right book for Python learning here at Zuri books"
              rel="noreferrer"
              target="_blank"
              id="btn_python"
            >
              Zuri Python
            </a>
            {/* <br></br> <br></br> <br></br> */}
            <br></br>
            <a
              className="link-btn"
              href="https://background.zuri.team"
              target="_blank"
              rel="noreferrer"
              title="Don't worry about who you are hiring, leave that to us"
              id="pitch"
            >
              Backgroud check on Coders
            </a>
            {/* <br></br>
          <br></br>
          <br></br> */}
            <br></br>
            <a
              className="link-btn"
              href="https://books.zuri.team/design-rules"
              target="_blank"
              rel="noreferrer"
              title="Get the right books for designs here"
              id="book_design"
            >
              Design Books
            </a>
          </div>
          <div className="icons">
            <img src="slack.svg" title="slack" alt="slack icon"></img>
            <img src="github.svg" title="github" alt="github icon"></img>
          </div>
          <hr className="hr"></hr>
          <br></br>
          <br></br>
          <div className="footer">
            <img src="zuri.svg"></img>
            <p>HNG Internship 9 Frontend Task 1</p>
            <img src="IFG.svg"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
