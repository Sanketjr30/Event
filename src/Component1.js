import img1 from "./Teknorix.png";
import "./Component1.css";
import img2 from "./calender.svg";


export default function Component1() {
  return (
    <>
      <div>
        {" "}
        <img src={img1} />
      </div>{" "}
      <div className="img2">
        {" "}
        <img src={img2} />
      </div>
      <div id="event">ADD AN EVENT</div>
      <div className="color">
        <>
          <div className="text">
            <br />
            <br />
            <a className="write">EVENT TITLE:- </a> <br />
            <a className="hey">
              <input type="text" />
            </a>
            <br />
            <br />
            <a className="write"> DESCRIPTION :-</a> <br />
            <a className="h">
              <textarea rows="5" cols="40" />
            </a>
            <br />
            <br />
            <a className="w"> LOCATION :-</a> <br />
            <a className="hey">
              <input type="text" />
            </a>
            <br />
            <br />
            <a className="write"> EVENT TITLE :-</a> <br />
            <a className="hey">
              <input type="text" />
            </a>
            <br />
            <br />
            <a className="last">START:- </a>
            <br />
            <a className="y">
              <input type="date" />
            </a>
            <br />
            <br />
            <a className="last"> END:- </a> <br />
            <a className="y">
              <input type="date" />
            </a>
            <br />
            <br />
            <button class="button">ADD EVENT</button>
          </div>
        </>
      </div>
    </>
  );
}
