import satData from "./satData.js";
import "./styling.css";

const Buttons = (props) => {
  return (
    <div>
      {props.displaySats.map((id, sat) => {
  return (
    // This line is causing the error...filterByType(sat) 
    // results in no satellites showing up when the button clicked.
        <button onClick={() => props.filterByType("Low")}>Low Orbit</button>
      );
       
    })}
      <button onClick={() => props.filterByType("Medium")}>Medium Orbit</button>
      <button onClick={() => props.filterByType("High")}> High Orbit</button>
      <button onClick={() => props.setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;

