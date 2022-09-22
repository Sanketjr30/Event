import img1 from "./Teknorix.png";

import "./Component1.css";
import { HomeOutlined } from "@ant-design/icons";

export default function Component1() {
  return (
    <>
      <div className="background">
        <div id="main">
          <img src={img1} />
        </div>
      </div>

      <div className="color">
        <div id="event">ADD AN EVENT</div>
        <i>
          <a className="line">Come on add an event....</a>
        </i>

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
            <button className="button">START</button>
          </div>
        </>
      </div>
    </>
  );
}
