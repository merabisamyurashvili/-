import React, { useRef } from "react";
import "./App.css";
import Days from "./Days.jsx";
function App() {
  const amindRef = useRef();
  const amindRef1 = useRef();
  async function func1() {
    const city = amindRef.current.value;
    const country = amindRef.current.value;
    const res1 = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city},${country}?key=27HC52E5DDKTJ54EQBTN7SY8Q`
    );
    const data1 = await res1.json();
    console.log(data1);
  }

  return (
    <div className="inpdiv">
      <div className="inpdiv9">
        <div className="importdiv">
          <Days />;
        </div>
        <div className="sainpute">
          <input ref={amindRef1} type="text" placeholder="country" />
          <input ref={amindRef} type="text" placeholder="city" />
          <button onClick={func1}>search</button>
          <h1 className="loc">polonnaruwa,Sri Lanka</h1>
          <img src="../../public/loc.png" alt="" />
          <div className="temp">
            <div className="tempbig"></div>
            <p>max temperature</p>
            <div className="tempmin"></div>
            <p>mini temperature</p>
          </div>
          <div className="sichq">
            {" "}
            <h1>37</h1>
            <p>fells like</p>
            <img src="" alt="" />
            <h1>45%</h1>
            <p>humidty</p>
            <img src="" alt="" />
            <h1>5m/s</h1>
            <p>wind</p>
            <img src="" alt="" />{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
export default App;
