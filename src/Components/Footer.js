import { useState } from "react";
import e25 from "./laugh (1).png";
import { Fireworks } from "fireworks-js";

export default function Footer(second) {
  let item = localStorage.getItem("point");
  console.log(item)

  const getPoint = () => {
    let p = localStorage.getItem("point");
    // console.log(p)

    if (p) return JSON.parse(p);
    else return [];
  };

  const container = document.querySelector("body");
  const fireworks = new Fireworks(container, {});

  const [point, setPoint] = useState(getPoint());
  // if (point >= 1) fireworks.start();

  // setTimeout(() => {
  //   fireworks.stop();
  // }, 10000);

  let deq = JSON.parse(localStorage.getItem("deque")) || [];
  // deq.unshift(1)
  deq.unshift(point);

  localStorage.setItem("myDeque", JSON.stringify(deq));

  setTimeout(() => {
    localStorage.setItem("point", JSON.stringify(0));
    localStorage.setItem("reloadCount", JSON.stringify(0));
  }, 2000);

  return (
    <>
      <div className="f-container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "5rem",
            marginRight: "4rem",
          }}
        >
          {point > 10 ? (
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "500",
                letterSpacing: "3px",
              }}
              className="f-i-1"
            >
              <span className="grtwrk">Great work!!</span>{" "}
              <span className="emoji">😊</span>
              <br></br>&nbsp;&nbsp;
              {/* <img src={e25}/> */}
            </div>
          ) : (
            <h1 className="grtwrk">Hey, try that again... <span className="emoji">🙁</span></h1>
          )}

          {point > 10 ? (
            <div className="description">
              You did it well, buddy. Don't forget to practice it more. More
              features are yet to come where you will be able to compete with
              your peers and also with the people around the world.
              <br></br>
              <br></br>
              Much more fun is waiting for you. Just hang tight with Quiz Arena,
              you will never regret, trust us!
            </div>
          ) : (
            <div className="description">
              Well, try that again. Practice it more. More features are yet to
              come where you will be able to compete with your peers and also
              with the people around the world.
              <br></br>
              <br></br>
              Much more fun is waiting for you. Just hang tight with Quiz Arena,
              you will never regret, trust us!
            </div>
          )}
        </div>
        {/* )} */}

        <div className="f-point-container">
          <span>
            {point} <span className="by15">/ 15</span>
          </span>
        </div>
      </div>
    </>
  );
}
